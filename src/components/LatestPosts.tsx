

//fetch latest Posts , like 10  /// create a helper function for that // all to be implemented
//will have to use DB to calculate this .... will not have a static tag for latest
//using all this below for design purposes

import { fetchPostsByCategory } from "@/utils/fetchPostsByCategory";
//import Image from "next/image";


export default function LatestPosts ({tag}:
    {tag:string}
){

    const posts =  fetchPostsByCategory(tag);
    return (
        <div>
         <h2 className="uppercase font-bold text-[2rem]"> Latest</h2>                          
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="mb-6 flex flex-col" >
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <div className="mr-auto">
                <span className="text-orange text-sm p-2">By Author Name</span>
                <span className="text-lg font-bold p-2">|</span> 
                <span className="text-sm text-zinc-600">10 minutes ago</span> 
            </div>
             
              {/* replace with post.author & calculate time after posting */}
          </div>
        ))}
      </div>

    )
}

