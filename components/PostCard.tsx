import Link from 'next/link';

export default function PostCard({ post }: { post: { id: number; title: string; body: string } }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.body.slice(0, 100)}...</p>
      <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline font-medium">
        Read More →
      </Link>
    </div>
  );
}
