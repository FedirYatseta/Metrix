'use client';
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";
import Header from "@/components/LeftNav/Header";
import { Bag, BagIcon, Folder, Graph, Plus, ShoppingIcon, User } from "@/image/image";
import EmptyElement from "@/components/Order/EmptyTable";
import { inter, poppins } from "@/styles/fonts";
import { PieChart } from "react-minimal-pie-chart";
import OutlineSelect from "@/components/Select/outline";
import InfoBlock from "@/components/InfoBlock/InfoBlock";

const data1 = [{ label: 'Customers', value: 0 }, { label: 'Active', value: 0 }]

const data2 = [{ label: 'Sales', value: 0 }, { label: 'Volume', value: 0 }]

const data3 = [{ label: 'All Orders', value: 0 }, { label: 'Pending', value: 0 }, { label: 'Completed', value: 0 }]
const data4 = [{ label: 'Abandoned Cart', value: 0 }, { label: 'Customers', value: 0 }]


const Home = async () => {
  return <section className="p-4 h-full">
    <div className="flex flex-col flex-initial h-full">
      <div className="grid  grid-rows-5 grid-cols-3 	grid-flow-col auto-cols-max h-full  gap-4">
        <div className="bg-white rounded-xl p-5">
          <InfoBlock bgIcon={'bg-primary-960'} data={data2} icon={<Graph />} options={[{ value: "Shop", label: "shop" }]} />
        </div>
        <div className="bg-white rounded-xl row-span-2 p-5">
          <div className={`flex items-center justify-between ${inter.className}`}>
            <h2 className=" font-medium text-md text-start "> Marketing</h2>
            <OutlineSelect
              handleChangeFc={() => ({})}
              name="Select week"
              options={[{ value: "Shop", label: "shop" }]}
              className="text-black-200  text-sm"
            />
          </div>
          <div className="flex items-center justify-between pt-3 pb-5">
            <div className="flex items-center "> <span className="rounded-full p-1 h-[8px] bg-primary-0 mr-2"></span> <p className="text-black-100 text-sm">Acquisition </p> </div>
            <div className="flex items-center "> <span className="rounded-full p-1 h-[8px] bg-primary-500 mr-2"></span> <p className="text-black-100 text-sm">Purchase </p> </div>
            <div className="flex items-center "> <span className="rounded-full p-1 h-[8px] bg-secondary-200 mr-2"></span> <p className="text-black-100 text-sm">Retention </p> </div>

          </div>
          <PieChart lineWidth={55} radius={40} viewBoxSize={[100, 130]} animate={true}
            data={[
              { title: 'One', value: 35, color: '#5570F1' },
              { title: 'Two', value: 15, color: '#97A5EB' },
              { title: 'Three', value: 20, color: '#FFCC91' },
            ]}
          /> </div>
        <div className="bg-white rounded-xl row-span-2 col-span-2">3</div>
        <div className="bg-white rounded-xl p-5">
          <InfoBlock bgIcon={'bg-secondary-200'} data={data1} icon={<User />} options={[{ value: "Shop", label: "shop" }]} />
        </div>
        <div className="bg-primary-0 rounded-xl p-5">
          <div className="flex flex-col h-full justify-between ">
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary-950 p-2">
                <Folder />
              </div>


            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col ">
                <p className="text-white text-start">All Products</p>
                <div className="flex items-center ">
                  <p className={`${poppins.className} text-xl font-medium text-white  pr-1`}>0</p>
                  <p className="text-white text-xs">+0.00%</p>
                </div>
              </div>
              <div>
                <p className="text-white text-start">Active</p>
                <div className="flex items-center ">
                  <p className={`${poppins.className} text-xl font-medium text-white  pr-1`}>0</p>
                  <p className="text-white text-xs">+0.00%</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5">
          <InfoBlock textColor={'text-danger'} bgIcon={'bg-secondary-200'} data={data4} icon={<ShoppingIcon />} options={[{ value: "Shop", label: "shop" }]} />

        </div>
        <div className="bg-white rounded-xl p-5">
          <InfoBlock bgIcon={'bg-secondary-200'} data={data3} icon={<BagIcon />} options={[{ value: "Shop", label: "shop" }]} />
        </div>
        <div className="bg-white rounded-xl row-span-4 p-5">
          <h2 className={`${inter.className} font-medium text-md text-start `}>Recent Order</h2>
          <EmptyElement
            name='No Orders Yet?'
            iconBtn={<Plus />}
            icon={<Bag />} title={'No Orders Yet?'}
            describe="Add products to your store and start selling to see orders here."
          />
        </div>
      </div>
    </div>


  </section>;
};

export default Home;
