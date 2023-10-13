'use client';
import React from "react";
import { Bag, BagIcon, Folder, Graph, Plus, ShoppingIcon, User } from "@/image/image";
import EmptyElement from "@/components/Order/EmptyTable";
import { inter, poppins } from "@/styles/fonts";
import { PieChart } from "react-minimal-pie-chart";
import OutlineSelect from "@/components/Select/outline";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import ImageIcon from "../../image/ihone.png";
import OrderBlock from "@/components/OrderBlock/OrderBlock";



const data1 = [{ label: 'Customers', value: 0 }, { label: 'Active', value: 0 }]

const data2 = [{ label: 'Sales', value: 0 }, { label: 'Volume', value: 0 }]

const data3 = [{ label: 'All Orders', value: 0 }, { label: 'Pending', value: 0 }, { label: 'Completed', value: 0 }]
const data4 = [{ label: 'Abandoned Cart', value: 0 }, { label: 'Customers', value: 0 }]

const data5 = [{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon },
{ title: 'iPhone 13', date: '12 Sept 2022', price: '730,000.00', status: 'Pending', icon: ImageIcon }]

const data6 = [
  { sum: 80, date: 'Sept 10' },
  { sum: 25, date: 'Sept 11' },
  { sum: 75, date: 'Sept 12' },
  { sum: 60, date: 'Sept 13' },
  { sum: 50, date: 'Sept 14' },
  { sum: 50, date: 'Sept 15' }]

const Home = () => {
  const isProduct = false;

  return <section className="p-4 h-full">
    <div className="flex flex-col flex-initial h-full overflow-auto">
      <div className="grid  lg:grid-rows-5 lg:grid-cols-3 	lg:grid-flow-col lg:auto-cols-max h-full  gap-4">
        <div className="bg-white dark:bg-black-600 rounded-xl p-5">
          <InfoBlock bgIcon={'bg-primary-960'} data={data2} icon={<Graph />} options={[{ value: "Shop", label: "shop" }]} />
        </div>
        <div className="bg-white dark:bg-black-600 rounded-xl lg:row-span-2 p-5 xs:max-h-[400px] lg:max-h-max">
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
          />
        </div>
        <div className="bg-white dark:bg-black-600 rounded-xl lg:row-span-2 lg:col-span-2 p-5">
          <div className="flex flex-col h-full">
            <div className={`flex items-center justify-between ${inter.className} pb-3`}>
              <h2 className=" font-medium text-md text-start "> Summary</h2>
              <OutlineSelect
                handleChangeFc={() => ({})}
                name="Last 7 Days"
                options={[{ value: "Shop", label: "shop" }]}
                className="text-black-200  text-sm"
              />
            </div>

            <div className={`flex justify-between h-full xs:min-h-[400px] lg:min-h-max `}>
              {data6.map((item, index) => {
                const percentage = (percent: any, total: any) => {
                  return ((percent / 100) * total)
                }
                const percentResult = percentage(item.sum, 100).toString();

                return (
                  <div key={index} className="text-center w-full h-full flex flex-col items-center">
                    <div className="bg-grey-2 rounded-xl mx-3 max-w-[14px] h-full w-full flex rotate-180 ">
                      <span style={{ height: `${percentResult}%` }} className={` rounded-t-xl w-full bg-primary-0`}></span>
                    </div>
                    <p className={`${inter.className} text-xs text-black-100 pt-3 `}>{item.date}</p>
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black-600 rounded-xl p-5">
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
        <div className="bg-white dark:bg-black-600 rounded-xl p-5">
          <InfoBlock textColor={'text-danger'} bgIcon={'bg-secondary-200'} data={data4} icon={<ShoppingIcon />} options={[{ value: "Shop", label: "shop" }]} />

        </div>
        <div className="bg-white dark:bg-black-600 rounded-xl p-5">
          <InfoBlock bgIcon={'bg-secondary-200'} data={data3} icon={<BagIcon />} options={[{ value: "Shop", label: "shop" }]} />
        </div>
        <div className="bg-white dark:bg-black-600 rounded-xl lg:row-span-4 p-5 overflow-y-auto min-h-[350px]">
          <h2 className={`${inter.className} font-medium text-md text-start `}>Recent Order</h2>
          <div className="overflow-y-auto">
            {isProduct ? (<EmptyElement
              name='No Orders Yet?'
              iconBtn={<Plus />}
              icon={<Bag />} title={'No Orders Yet?'}
              describe="Add products to your store and start selling to see orders here."
            />) :
              (<OrderBlock data={data5} />)
            }
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Home;
