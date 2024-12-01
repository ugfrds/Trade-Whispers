'use client';
import Image from "next/image";
import imgurl from "@/../public/up-arrow-svgrepo-com.svg";

export default function TopButton() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enables smooth scrolling
        });
    };

    return (
        <div className="flex flex-col items-center mb-3">
            <Image
                src={imgurl}
                alt="Scroll to the top"
                width={110}
                height={110}
                onClick={handleClick}
                className="bg-orange p-6 border rounded-full transition cursor-pointer hover:scale-105"
            />
            <p className="uppercase font-bold text-2xl">TOP</p>
        </div>
    );
}
