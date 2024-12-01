import { Posts } from "@/lib/dummydata"


export const fetchPostsByCategory = (category: string) => {
    
     return Posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
    
};




// export const fetchPostsByCategory = async (category: string): Promise<Post[]> => {
//     const response = await fetch(`/api/posts?category=${category}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch posts');
//     }
//     return response.json();
//   };