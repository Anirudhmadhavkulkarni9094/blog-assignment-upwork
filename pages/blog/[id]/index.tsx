import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
export default function Post({ post }: { post: { title: string; body: string } }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading post...</p>
      </div>
    );
  }

 return (
  <>
    <Head>
      <title>{post.title} | My Blog</title>
      <meta name="description" content={post.body.slice(0, 150)} />
    </Head>
    <article className="max-w-3xl mx-auto p-6">
      <Link href="/blog" className="text-blue-500 hover:underline"> &larr; Go back</Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.body}</p>
    </article>
  </>
);
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  if (!post.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return {
    paths: posts.map((post: { id: number }) => ({
      params: { id: post.id.toString() },
    })),
    fallback: true,
  };
}
