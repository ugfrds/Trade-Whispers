import Link from "next/link"

export default  function Hero (){
    const navLinks =[
        {
            label:"Trading strategy Generator",
            href: "/strategy-generator"

        },
        {
            label:"Position Size Calculator",
            href: "p-size-calc"

        },
        {
            label:"Economic Calendar",
            href: "/economic-calendar"

        },
    ] as const;

    return (
        <section id='hero-section' className="hero-section p-6 mt-3 mb-6">
            <div className="overlay"></div>
            <h2 className="max-w-[950px] ">YOUR <span className="text-paleGreen">JOURNEY</span> TO  
            <span className="text-orange"> CONFIDENT</span> TRADING STARTS HERE</h2>
        <div className="flex items-center space-x-24">
        <h3 className="capitalize ">Join a Community of<span className="text-orange"> Real </span>Traders,
        Access Resources and Build strategies that Work for You. </h3>
        <div className="font-medium capitalize flex flex-col space-y-4 drop-shadow ">
           { navLinks.map((link) => (
            
            <div key={link.href} className="bg-white text-zinc-800 py-3 px-6 w-[250px]" >
              <Link href={link.href} > {link.label} </Link>
            </div> 
           ))
        }
        </div>
        </div>
        </section>
        

    )
    
}