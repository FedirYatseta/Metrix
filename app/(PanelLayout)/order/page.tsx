"use client";
import React, { useEffect, useState } from "react";
import BlockSum from "@/components/Order/BlockSum";
import EmptyTable from "@/components/Order/EmptyTable";
import Table from "@/components/Table/Table";
import { Bag, Plus } from "@/image/image";
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import { row, title } from "@/components/Table/index.config";
import { block } from "@/components/Order/config";




const Orders = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <section className="xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full">
      <HeaderGeneral name={'Add a New Customer'} title="Order Summary" icon={<Plus />} />
      <div className="grid xs:grid-col lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">
        {block.map((item, key) => {
          return <BlockSum item={item} key={key} />;
        })}
      </div>

      <div
        className="bg-white rounded-xl flex flex-col flex-initial  xs:p-2 lg:p-5 h-full "
      >

        {isClient ? <Table data={row} title={title} /> : <EmptyTable
          name='New Product'
          iconBtn={<Plus />}
          icon={<Bag />} title={'No Orders Yet?'}
          describe=" Add products to your store and start selling to see orders here." />}
      </div>
    </section>
  );
};

export default Orders;
