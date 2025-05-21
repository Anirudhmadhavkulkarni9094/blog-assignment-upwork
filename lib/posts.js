export async function fetchPosts(limit = 5) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return await res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return await res.json();
}
