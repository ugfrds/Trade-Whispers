import { fetchPostsByCategory } from "@/utils/fetchPostsByCategory";
//import Image from "next/image";
import Link from "next/link";

export default function TabContent({ category }: { category: string }) {
const posts = fetchPostsByCategory(category);
console.log(posts);

return (

<div className="w-[800px] h-[550px] grid grid-rows-[300px_250px] gap-2 mb-12 ">

<div className="flex gap-8 row-span-1">
{posts.slice(0, 2).map((post) => (
<div key={post.id} className="flex flex-col items-center">
<Link href="">
<div
className="w-full h-[220px] bg-center bg-cover"
style={{
                  backgroundImage: `url('${post.img.src}')`,
                }} ></div>
<h4 className="text-lg font-bold mt-2">{post.title}</h4>
<p className="text-sm mt-1 text-gray-600">{post.preview}</p>
</Link>
</div>
))}
</div>

      {/* Second row: Three posts with only titles */}
      <div className="flex justify-between row-span-1">
        {posts.slice(2, 5).map((post) => (
          <div key={post.id} className="flex flex-col items-center relative">
            <Link href="">
              {/* <Image 
               src={post.img.src}
               alt=""
               width={250}
               height={150}
               className="w-[250px] h-[200px]"
               /> */}

              <div
                className="w-[250px] h-[200px]  bg-center bg-cover "
                style={{
                  backgroundImage: `url('${post.img.src}')`,
                }}
              ></div>
              <h4 className="text-lg font-bold mt-2 absolute bottom-[60px] right-[10px] bg-paleGreen ">{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>

);
}