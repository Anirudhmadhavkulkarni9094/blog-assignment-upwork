import { useState, useEffect } from 'react';
import PostCard from '@/components/PostCard';

export default function Home({ posts }: { posts: { id: number; title: string; body: string }[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Left Sidebar: Search & Filter */}
      <div className="md:col-span-1 ">
        <h2 className="text-xl font-semibold mb-4">Filter Posts</h2>
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* You can add more filter controls here */}
      </div>

      {/* Right Main: Posts List */}
      <main className="md:col-span-3">
        <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
