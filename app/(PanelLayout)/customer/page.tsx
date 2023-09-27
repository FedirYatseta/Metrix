'use client';
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import Modal from "@/components/Modal/Modal";
import BlockSum from "@/components/Order/BlockSum";
import EmptyTable from "@/components/Order/EmptyTable";
import { block } from "@/components/Order/config";
import Table from "@/components/Table/Table";
import { Bag, Plus } from "@/image/image";
import { useGetUsersListQuery } from "@/store/api/api";
import React, { useState } from "react";


const Orders = () => {


  const result = useGetUsersListQuery();
  const { data, error, isLoading } = result;
  console.log('data', data)

  const title = [
    { text: " ", key: "check" },
    {
      text: 'Customer Name', key: 'name'
    }, {
      text: 'Email', key: 'email'
    }, {
      text: 'Phone', key: 'phone'
    }, {
      text: 'Order Total', key: 'name'
    }, {
      text: 'Address', key: 'address'
    }]

  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(!modal);
  }

  console.log('title', title)
  return <section className="xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full">
    {modal && <Modal handleOpen={handleOpen} />}
    <HeaderGeneral name={'Add a New Customer'} title="Customers Summary" icon={<Plus />} handleOpen={handleOpen} />
    <div className="grid xs:grid-col lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">
      {block.map((item, key) => {
        return <BlockSum item={item} key={key} />;
      })}
    </div>
    <div
      className="bg-white rounded-xl flex flex-col flex-initial  xs:p-2 lg:p-5 h-full "
    >
      {data ? <Table data={data} title={title} /> : <EmptyTable
        name='New Product'
        iconBtn={<Plus />}
        icon={<Bag />} title={'No Orders Yet?'}
        describe=" Add products to your store and start selling to see orders here." />}
    </div>
  </section>;
};

export default Orders;
