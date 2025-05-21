import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';

export default function Home({ posts }:{ posts: { id: number; title: string; body: string }[] }) {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover insightful articles, tutorials, and stories about web development, programming, and technology.
          </p>
        </section>

        {/* Latest Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 max-w-3xl">
            Hi! I'm a passionate web developer and blogger sharing knowledge and tutorials to help others grow. When not coding, I enjoy traveling, photography, and exploring new technologies.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-blue-600 rounded-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">Want to stay updated?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest posts and tips delivered straight to your inbox.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded shadow hover:bg-gray-100 transition">
            Subscribe Now
          </button>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
