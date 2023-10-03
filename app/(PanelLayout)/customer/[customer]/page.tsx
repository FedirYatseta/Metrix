'use client';
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import AddressUser from "@/components/InfoUser/AddressUser";

import InfoUser from "@/components/InfoUser/Infouser";
import TotalOrder from "@/components/InfoUser/TotalOrder";

import BlockSum from "@/components/Order/BlockSum";
import EmptyTable from "@/components/Order/EmptyTable";
import { block } from "@/components/Order/config";
import Table from "@/components/Table/Table";
import { row, title } from "@/components/Table/index.config";
import { Bag, ManIcon, Plus } from "@/image/image";
import { useGetUserByIdQuery } from "@/store/api/api";
import { inter } from "@/styles/fonts";
import React, { useState } from "react"

const Customer = ({ params }: { params: { customer: string } }) => {
    const customerId = parseInt(params.customer); // Перетворення рядка в число

    const { data: user = {}, isFetching, isLoading } = useGetUserByIdQuery(customerId);

    console.log('data', user)
    const [isClient, setIsClient] = useState(true)

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className="xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full">
            <HeaderGeneral name={'Suspend Customer'} title="Customers Summary" />
            <div className="grid xs:grid-col lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">


                <InfoUser user={user} />
                <AddressUser user={user} />
                <TotalOrder />
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
    )
};

export default Customer;
