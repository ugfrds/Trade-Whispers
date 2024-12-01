import Link from "next/link"


export default function Strategies () {
    const TStrategies =[
        {title: "How to Trade Gold (XAU/USD)",
         href: ""
        },
        {title: "How to Trade Gold (XAU/USD)",
            href: ""
           },
           {title: "How to Trade Gold (XAU/USD)",
            href: ""
           },
           {title: "How to Trade Gold (XAU/USD)",
            href: ""
           },
           {title: "How to Trade Gold (XAU/USD)",
            href: ""
           },
       ]
    

       return (
        <section id='trading strategies' className="mb-6">
            <h2 className="uppercase font-bold text-[2rem]">Trading Strategies</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum fugit dolore, 
                harum animi ad aspernatur exercitationem 
                rem illo numquam incidunt totam facilis temporibus adipisci nemo eos sapiente officia illum!</p>
                {TStrategies.map(S => ( //just geting one for design purposes
             <div key={S.href} className="mt-3">
                <h3 className="text-2xl font-bold ">{S.title}</h3>
                <div className= 'w-28 px-4 py-2 bg-paleGreen font-bold text-lg'>
                <Link href={S.href} >Download</Link>
                </div> 
             </div>
                  ))
                }
        </section>
  
    )
}