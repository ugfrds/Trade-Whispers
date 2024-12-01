import SinglePost from '@/components/SinglePost';
import { Posts } from '@/data/Posts'; // Replace with actual data fetching

export default function PostPage({ params }: { params: { id: string } }) {
const postId = parseInt(params.id, 10);
const post = Posts.find((p) => p.id === postId);

if (!post) {
return <div className="text-center p-8">Post not found!</div>;
}

return <SinglePost post={post} />;
}

// Next.js dynamic routing
export async function generateStaticParams() {
// Example: Generate params from Posts data
return Posts.map((post) => ({ id: post.id.toString() }));
}