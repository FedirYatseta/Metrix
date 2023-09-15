"use client";
import { FC, useState } from "react";
import { ITabsProps } from "./interface";
import { inter } from "@/styles/fonts";

const Tabs: FC<ITabsProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="p-6 h-full ">
      <div className={`${inter.className} text-black-200 flex text-md`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab &&
              " text-black-0 border-b-4  border-primary-0"
            } px-6 py-2.5 border-b-4  border-white`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-2 h-full">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;