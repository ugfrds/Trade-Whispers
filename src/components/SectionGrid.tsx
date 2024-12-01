
import { fetchPostsByCategory } from "@/utils/fetchPostsByCategory";
//import Image from "next/image";


export default function SectionContent ({category}:
    {category:string}
){

    const posts =  fetchPostsByCategory(category);

   //sort posts to get the latest  | to be implemented
 //console.log(posts);
 return (
    <section id='education' className="mb-6">
      <h2 className="uppercase font-bold font-[2rem]"> Education</h2>  
      {(posts.length >0) ? (
       <div className="flex space-x-6">
        {posts.slice(0, 2).map((post) => (
          <div key={post.id} >
             <div
               className="w-full h-[220px] bg-center bg-cover"
               style={{
                  backgroundImage: `url('${post.img.src}')`,
                }} ></div>
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p className="text-sm mt-2 text-gray-600">{post.preview}</p>
          </div>
        ))}
        </div>
      ) :
      (<p>No posts for this Category: {category} </p>)
    }
      </section>
 )
}