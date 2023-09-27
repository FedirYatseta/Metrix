'use client';
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import BlockSum from "@/components/Order/BlockSum";
import { block } from "@/components/Order/config";
import { Plus } from "@/image/image";
import { useGetUserByIdQuery } from "@/store/api/api";
import React from "react"

const Customer = ({ params }: { params: { customer: string } }) => {
    const customerId = parseInt(params.customer); // Перетворення рядка в число

    const { data: user, isFetching, isLoading } = useGetUserByIdQuery(customerId);

    console.log('data', user)
    return (
        <section className="xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full">
            <HeaderGeneral name={'Suspend Customer'} title="Customers Summary" />
            <div className="grid xs:grid-col lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">
                {block.map((item, key) => {
                    return <BlockSum item={item} key={key} />;
                })}

            </div>
            <h1>{user?.name}</h1>
        </section>
    )
};

export default Customer;
