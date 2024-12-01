'use client'
import { fetchPostsByCategory } from "@/utils/fetchPostsByCategory";

// export default function CarouselCard ({tag}:

//     {tag: string} ) 
//     {
//     const posts =  fetchPostsByCategory(tag);
//     //fetch posts by Tag e.g featured , popular 
//     //sort posts to get the latest  | to be implemented
//     //slice the first 10 posts      | to be implemented
//     //put the posts in a carousel
    
//     //console.log(posts);

//     return (
       
//            <section className="card mb-6">
//             <h2 className="font-bold uppercase pt-4 pb-4"> Featured | Editorial</h2>
//             <div className="carousel">
//                 {posts.slice(0, 1).map((post) => ( //just geting one for design purposes
//              <div key={post.id}>
//                 <h3 className="text-lg font-bold">{post.title}</h3>
//                 <div className="flex gap-2" >
//                     <div className= 'image-container h-[200px] w-3/4 bg-gold'></div>
//                    <p className="text-sm mt-2 text-gray-600">{post.content}</p>
//                 </div>
//              </div>
//         ))}
//            </div>
//            </section>
//     )

// }

import { useState, useEffect } from "react";

export default function CarouselCard({ tag }: {tag: string} ) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const posts =  fetchPostsByCategory(tag);

  // Set autoplay duration in milliseconds (e.g., 3000ms = 3 seconds)
  const autoplayDuration = 3000;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect using setInterval
  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayDuration);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="card mb-6">
      <h2 className="font-bold uppercase pt-4 pb-4">Featured | Editorial</h2>
      <div className="relative">
        <div className="carousel flex overflow-hidden">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } w-full flex-shrink-0 transition-transform duration-500 ease-in-out`}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <div className="flex gap-2">
                <div className="image-container h-[200px] w-3/4 bg-gold"></div>
                <p className="text-sm mt-2 text-gray-600">{post.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next and Prev Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
        >
          &#62;
        </button>
      </div>
    </section>
  );
}
