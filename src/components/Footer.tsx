import Image from 'next/image';
import Link from 'next/link';
import fbicon from "../../public/icon-facebook.svg";
import instaicon from "../../public/icon-instagram.svg";
import linkedinicon from "../../public/icon-linkedin.svg";



export default function Footer (){

    const icons =[
        {
            name: "facebook icon",
            src: fbicon
   
        },
        {
            name: "instagram icon",
            src: instaicon
   
        },
        {
            name: "linkedin icon",
            src: linkedinicon
   
        }
    ]
    const navLinks =[
        {
            label:"About Us",
            href: "/about"

        },
        {
            label:"Contact Us",
            href: "/contact"

        },
        {
            label:"Terms",
            href: "/terms & conditions"

        },
        {
            label:"Privacy",
            href: "/privacy"
        }
       
    ]
    
   
    return (
        <footer className="mt-auto bg-darkBlue p-6  text-zinc-300   " >
          <div className=" flex items-center justify-between">
           <ul className="font-medium flex space-x-6 ">
             { navLinks.map((link) => (
            
             <li key={link.href} className='flex space-x-[10px] '>
               <Link href={link.href}> {link.label} </Link>
               <div className={`h-[20px] w-[3px] bg-zinc-200 `}> </div>
              </li> 
             
           ))
         }
           </ul>
          <div className="flex  space-x-6 items-center">   
           {
            icons.map((icon,index) => (
                <Image key={index} 
                 src={icon.src}
                 alt={icon.name}
                 width={30}
                 height={30}
                 className="text-white"
                />   
            ))
           }

          </div>
        </div>
        
        <h6 className='max-w-[750px] mt-3'>
            <span className='text-[red]/80'>Disclaimer: </span>
            <span className="text-zinc-500  "> This is not financial Advice. Lorem ipsum dolor sit 
                 laboriosam ut voluptatum sapiente blanditiis officia nesciun. Lorem ipsum, dolor sit
                  ametcumque ex nisi sed! Accusamus, saepe!</span>
        </h6>
        <div className="flex justify-between items-center mt-6 text-zinc-400">
           <small >&copy;{new Date().getFullYear()} Trade Whispers. All Rights Reserved.</small>
            <small> DESIGNED & DEVELOPED BY: <Link target = '_blank'className="underline text-[1.2rem]" href="https://ugfrds.github.io/portfolio/src/pages/homepage.html">
            Justlikewiseman</Link> </small>
        </div>
       
        </footer>
    )

}