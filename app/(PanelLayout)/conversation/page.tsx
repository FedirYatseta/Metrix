import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import Input from "@/components/Input/Input";
import EmptyTable from "@/components/Order/EmptyTable";
import { Chat, SearchInput, WhiteImage } from "@/image/image";
import React from "react";

const Orders = () => {
  return (<section className="flex flex-col flex-auto  overflow-y-auto h-full">
    <div className="rounded-md w-full flex flex-col flex-auto p-4">
      <HeaderGeneral name={'New Message'} title={'Conversations with Customers'} />
      <div className=" h-full flex flex-col flex-auto ">
        <div className="grid xs:grid-col lg:grid-cols-3 gap-4 mt-2 h-full ">
          <div className="col-span-1 bg-white rounded-xl p-6 ">
            <div className="flex justify-between">
              <h5 className="text-xl font-medium">Contacts</h5>
              <span className="text-black-200 font-medium text-xl">34</span>
            </div>
            <label className="relative block border-0 h-full max-h-[45px] my-3">
              <span className="absolute inset-0 left-2 flex items-center ">
                <SearchInput />
              </span>
              <input
                className=" h-full rounded-md block py-1.5 px-9 w-full text-xs focus-within:hover:bg-hov focus:outline-none border border-black-100 "
                placeholder="Search"
              ></input>
            </label>

          </div>
          <div className="lg:col-span-2 bg-white rounded-xl  p-6">
            <EmptyTable
              name='New Message'
              icon={<Chat />}
              title={'Messages'}
              iconBtn={<WhiteImage />}
              describe="Click on a contact to view messages."
            />
          </div>
        </div>
      </div>
    </div>
  </section>)
};

export default Orders;
