import Image from 'next/image';
import Link from 'next/link';
import fbicon from "../../public/icon-facebook.svg";
import instaicon from "../../public/icon-instagram.svg";
import linkedinicon from "../../public/icon-linkedin.svg";

export default function TopNav () {

    const icons = [
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

    const Currencies = [
        {
            name: "gold",
            symbol: "XAU/USD"
        },
        {
            name: "Euro Dollar",
            symbol: "EUR/USD"
        },
        {
            name: "Pound dollar",
            symbol: "GBP/USD"
        },
        {
            name: "yen dollar",
            symbol: "JPY/USD"
        },
    ]

    return (
        <div className="pt-3 text-zinc-750 top-nav">
            <div className="flex items-center justify-between">
                <ul className="font-medium flex space-x-6 animate-marquee">
                    {Currencies.map((C) => (
                        <li key={C.name} className="flex space-x-[10px]">
                            <Link href="">{C.symbol}</Link>
                            <div className="h-[20px] w-[3px] bg-zinc-700"></div>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-12">
                    <div className="flex space-x-6 items-center">
                        {icons.map((icon, index) => (
                            <Image key={index}
                                src={icon.src}
                                alt={icon.name}
                                width={20}
                                height={20}
                                className="text-white"
                            />
                        ))}
                    </div>
                    <Link href='' className='bg-darkBlue text-yellow font-bold py-1 px-3 mb-1'>
                        DONATE
                    </Link>
                </div>
            </div>
        </div>
    )
}
