import React from 'react';
import { GetStaticProps } from 'next';
import { Post } from '../types'; // Assume you have a `Post` type defined somewhere
import { fetchPostsByCategory } from '../lib/api'; // Function to fetch posts by category

type Props = {
  posts: Post[];
};

const PostGrid: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* First row: Two posts with title and preview */}
      <div className="sm:col-span-2 grid grid-cols-2 gap-4">
        {posts.slice(0, 2).map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-sm mt-2 text-gray-600">{post.preview}</p>
          </div>
        ))}
      </div>

      {/* Second row: Three posts with only titles */}
      <div className="lg:col-span-3 grid grid-cols-3 gap-4">
        {posts.slice(2, 5).map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const category = 'your-category'; // Replace with the desired category
  const posts = await fetchPostsByCategory(category);

  return {
    props: {
      posts,
    },
  };
};

export default PostGrid;



  