
import { Posts } from "@/lib/dummydata"
import Image from "next/image";


export default function TabContent ({category}:
    {category:string}
){

 const fetchPostsByCategory = Posts.filter(post => post.category.toLowerCase === category.toLowerCase);
 const posts = fetchPostsByCategory;
 console.log(posts);
 return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-orange">
      {/* First row: Two posts with title and preview */}
      <div className="sm:col-span-2 grid grid-cols-2 gap-4">
        {posts.slice(0, 2).map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <Image 
             src= {post.img}
             alt=''
             width={200}
             height={200}
             />
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p className="text-sm mt-2 text-gray-600">{post.preview}</p>
          </div>
        ))}
      </div>

      {/* Second row: Three posts with only titles */}
      <div className="lg:col-span-3 grid grid-cols-3 gap-4">
        {posts.slice(2, 5).map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <Image 
             src= {post.img}
             alt=''
             width={200}
             height={200}
             />
            <h4 className="text-lg font-bold">{post.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );


}

