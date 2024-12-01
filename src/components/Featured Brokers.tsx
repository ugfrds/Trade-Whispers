import Link from "next/link"
import {Brokers} from '@/lib/dummydata';

export default function FeaturedBrokers(){
    return (
        <div className=" w-[100%] h-[550px] ">
            <h6 className="text-center font-bold text-2xl uppercase">Featured Brokers</h6>
            
             {
                Brokers.map((broker,index) => (
                    <div key={index} className="broker-details flex space-x-6 items-center justify-center p-3">
                      <div className="bg-yellow w-16 h-16">{broker.logo}</div>
                      <div>
                         <p className="font-bold text-[1.2rem] p-0 m-0">{broker.name}</p>
                         <div className=" p-0 m-0">{broker.reviews}
                            {/* Example star rating, replace with dynamic rating if needed */}
                             <span className="filled-star text-[#ffd700] text-2xl">★</span>
                             <span className="filled-star text-[#ffd700] text-2xl">★</span>
                             <span className="filled-star text-[#ffd700] text-2xl">★</span>
                             <span className="filled-star text-[#ffd700] text-2xl">★</span>
                             <span className="empty-star  text-2xl">☆</span>
                         </div>
                         <div className="flex gap-3  text-sm">
                              <Link href="">Review</Link>
                              <Link href="">Open Account</Link>
                          </div>
                       </div>
                    </div>
                ))
             }
        </div>
                
              
    )

}