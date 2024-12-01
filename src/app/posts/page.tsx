'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PostData {
id: number;
category: string;
img?: string;
title: string;
preview: string;
content: string;
createdAt: string;
tags?: Record<string, boolean>;
author?: string;
}

export default function SinglePost({ post }: { post: PostData }) {
return (

<div className="max-w-4xl mx-auto p-4">
<Link href="/posts">
<a className="text-blue-500 hover:underline text-sm mb-4 inline-block">← Back to Posts</a>
</Link>

      {/* Title Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="flex justify-between items-center text-sm text-gray-500">
           {post.author && (
            <p>By <span className="font-medium">{post.author}</span></p>
           )}
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
        <p className="text-xs italic mt-1">Category: {post.category}</p>
      </header>

      {/* Post Image */}
      {post.img && (
        <div className="mb-6">
          <Image
            src={post.img}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
      )}

      {/* Content */}
      <section className="mb-6">
        <p className="text-lg font-medium mb-2">{post.preview}</p>
        <article className="text-gray-700 leading-relaxed">{post.content}</article>
      </section>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(post.tags)
            .filter(([_, value]) => value)
            .map(([key]) => (
              <span
                key={key}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm"
              >
                #{key}
              </span>
            ))}
        </div>
      )}
    </div>

);
}