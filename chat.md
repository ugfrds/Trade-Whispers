import imgurl from '@/../public/code.jpg';

type PostData = {
id: number;
category: string;
img: StaticImageData;
title: string;
preview: string;
content: string;
createdAt: string;
postedBy: string;
likes: number;
tags?: Record<string, boolean>;
};

export const Posts: PostData[] = [
{
id: 1,
category: "Technical Analysis",
img: imgurl,
title: "Understanding Support and Resistance",
preview: "Learn how to identify key support and resistance levels to improve your trading strategy.",
content: "Support and resistance levels are fundamental concepts in technical analysis. They represent price levels where a stock or asset often reverses or pauses its trend.",
createdAt: "2024-11-01",
postedBy: "John Doe",
likes: 250,
tags: { popular: true, featured: true, latest: true },
},
{
id: 2,
category: "Technical Analysis",
img: imgurl,
title: "Candlestick Patterns for Beginners",
preview: "Master the basics of candlestick charting and recognize patterns that predict market movements.",
content: "Candlestick charts visually represent price movements. Recognizing patterns like doji, hammer, and engulfing can provide insight into market sentiment.",
createdAt: "2024-11-02",
postedBy: "Jane Smith",
likes: 340,
tags: { popular: true, featured: true, latest: false },
},
{
id: 3,
category: "Fundamental Analysis",
img: imgurl,
title: "Earnings Reports and Their Impact",
preview: "Understand how earnings reports can significantly influence stock prices and market trends.",
content: "Earnings reports provide insight into a company’s profitability. Traders closely analyze these reports for potential stock price movements.",
createdAt: "2024-11-03",
postedBy: "Alice Johnson",
likes: 180,
tags: { popular: true, featured: false, latest: true },
},
{
id: 4,
category: "Technical Analysis",
img: imgurl,
title: "Using Moving Averages Effectively",
preview: "Discover how moving averages can smooth price data and identify trends.",
content: "Moving averages are essential tools in technical analysis. Learn how to use simple and exponential moving averages for trend detection.",
createdAt: "2024-11-05",
postedBy: "Mark Davis",
likes: 220,
tags: { popular: false, featured: true, latest: false },
},
];

type BrokerData = {
name: string;
website: string;
reviews: string;
logo: string;
review_url: string;
foundedYear: number;
country: string;
};

export const Brokers: BrokerData[] = [
{
name: "Exness",
website: "https://www.exness.com",
reviews: "4.8/5",
logo: "https://example.com/logos/exness.png",
review_url: "https://example.com/reviews/exness",
foundedYear: 2008,
country: "Cyprus",
},
{
name: "XM",
website: "https://www.xm.com",
reviews: "4.7/5",
logo: "https://example.com/logos/xm.png",
review_url: "https://example.com/reviews/xm",
foundedYear: 2009,
country: "Australia",
},
{
name: "IQ Option",
website: "https://www.iqoption.com",
reviews: "4.6/5",
logo: "https://example.com/logos/iqoption.png",
review_url: "https://example.com/reviews/iqoption",
foundedYear: 2013,
country: "Cyprus",
},
{
name: "HotForex",
website: "https://www.hotforex.com",
reviews: "4.5/5",
logo: "https://example.com/logos/hotforex.png",
review_url: "https://example.com/reviews/hotforex",
foundedYear: 2010,
country: "Mauritius",
},
{
name: "Plus500",
website: "https://www.plus500.com",
reviews: "4.4/5",
logo: "https://example.com/logos/plus500.png",
review_url: "https://example.com/reviews/plus500",
foundedYear: 2008,
country: "Israel",
},
];

import { fetchPostsByCategory } from "@/utils/fetchPostsByCategory";
import Link from "next/link";

export default function TabContent({ category }: { category: string }) {
const posts = fetchPostsByCategory(category);

    return (
        <div className="grid w-[800px] h-[450px] grid-rows-[300px_150px] mb-16">
            {/* First row: Two posts with title and preview */}
            <div className="flex gap-8">
                {posts.slice(0, 2).map((post) => (
                    <div key={post.id} className="flex flex-col items-start">
                        <Link href="">
                            <div
                                className="w-full h-[200px] bg-aqua bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/code.jpg')`,
                                }}
                            ></div>
                            <h4 className="mt-2 text-lg font-bold">{post.title}</h4>
                            <p className="mt-2 text-sm text-gray-600">{post.preview}</p>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Second row: Three posts with only titles */}
            <div className="flex justify-between">
                {posts.slice(2, 5).map((post) => (
                    <div key={post.id} className="flex flex-col items-start">
                        <Link href="">
                            <div
                                className="w-[250px] h-full bg-blueviolet bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/code.jpg')`,
                                }}
                            ></div>
                            <h4 className="mt-2 text-lg font-bold">{post.title}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

}
..........................................

import { useEffect, useState } from "react";

interface Post {
id: string;
title: string;
content: string;
createdAt: string; // Assuming 'createdAt' is in ISO string format
}

const getTimeAgo = (timestamp: string) => {
const now = new Date();
const postTime = new Date(timestamp);
const difference = now.getTime() - postTime.getTime(); // Difference in milliseconds

const seconds = Math.floor(difference / 1000); // convert to seconds
const minutes = Math.floor(seconds / 60); // convert to minutes
const hours = Math.floor(minutes / 60); // convert to hours
const days = Math.floor(hours / 24); // convert to days

if (days > 0) {
return `${days} day${days > 1 ? "s" : ""} ago`;
} else if (hours > 0) {
return `${hours} hour${hours > 1 ? "s" : ""} ago`;
} else if (minutes > 0) {
return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
} else {
return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
}
};

export default function FeaturedCarousel({ posts }: { posts: Post[] }) {
return (
<section className="card mb-6">
<h2 className="font-bold uppercase pt-4 pb-4">Featured | Editorial</h2>
<div className="carousel">
{posts.map((post) => (
<div key={post.id}>
<h3 className="text-lg font-bold">{post.title}</h3>
<div className="flex gap-2">
<div className="image-container h-[200px] w-3/4 bg-gold"></div>
<p className="text-sm mt-2 text-gray-600">{post.content}</p>
</div>
<span className="text-sm text-zinc-600">
{getTimeAgo(post.createdAt)} {/_ Display time passed _/}
</span>
</div>
))}
</div>
</section>
);
}
