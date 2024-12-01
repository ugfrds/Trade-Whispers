'use client';
import React, { useState } from "react";
//import TabContent from "./TabContent";
import TabGrid from "./TabGrid";

export default function TabNav () {
  const tabs = ["Technical Analysis", "Fundamental Analysis", "Trading Tips"] ;
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const [category , setCategory] = useState(activeTab)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCategory(tab);
    //console.log(category);
  };

  return (
    <>
    <div className="tabs mb-4 flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`py-2 px-6 font-medium text-2xl border border-orange outline-none
             ${activeTab === tab ? 'bg-paleGreen text-zinc-900 border-none' : 'bg-zinc-100'}`}
        >
          {tab}
        </button>
        
      ))}

    </div>
    <TabGrid category ={category} />
    {/* <TabContent category ={category} /> */}
    
    </>
  );
};


