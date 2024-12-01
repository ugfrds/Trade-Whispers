'use client';

import { fetchLatestPosts } from '@/utils/fetchLatestPosts';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestPostsSidebar() {
const latestPosts = fetchLatestPosts(5); // Fetch the latest 5 posts

return (

<aside className="w-full max-w-xs p-4 bg-white shadow-lg rounded-md">
<h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
Latest Posts
</h2>
<ul className="space-y-4">
{latestPosts.map((post) => (
<li key={post.id} className="flex items-center gap-4">
{/* {/_ Post Thumbnail _/} */}
<div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
<Link href={`/posts/${post.id}`}>
<Image
     src={post.img}
     alt={post.title}
     className="w-full h-full object-cover hover:scale-105 transition-transform"
     />
</Link>
</div>
{/* {/_ Post Info _/} */}
<div>
<Link href={`/posts/${post.id}`}>
<h3 className="text-sm font-semibold text-gray-800 hover:underline">
{post.title}
</h3>
</Link>
<p className="text-xs text-gray-500">{post.preview.substring(0, 50)}...</p>
<span className="text-xs text-gray-400">
{new Date(post.createdAt).toLocaleDateString()}
</span>
</div>
</li>
))}
</ul>
</aside>
);
}


// import LatestPostsSidebar from '@/components/LatestPostsSidebar';

// export default function HomePage() {
// return (

// <div className="flex gap-6">
// <main className="flex-1 p-4">
// <h1 className="text-2xl font-bold">Welcome to PawaBetTips</h1>
// {/_ Main content goes here _/}
// </main>
// <LatestPostsSidebar />
// </div>
// );
}