import Section from "@/components/Section/Section";
import Account from "@/components/Tabs/Account/Account";
import Tabs from "@/components/Tabs/Tabs";
import React from "react";

const Orders = async () => {
  const tabsData = [
    {
      label: "Account",
      content: <Account />,
    },
    {
      label: "Business",
      content: <p>Content for Tab 2</p>,
    },
    {
      label: "Security",
      content: <p>Content for Tab 3</p>,
    },
  ];
  return (
    <Section>
      <div className="bg-white dark:bg-black-600 rounded-md w-full h-auto">
        <Tabs tabs={tabsData} defaultTab={0} />
      </div>
    </Section>
  );
};

export default Orders;
