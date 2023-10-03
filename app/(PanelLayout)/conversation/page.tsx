'use client';
import HeaderGeneral from "@/components/HeaderGeneral/HeaderGeneral";
import EmptyTable from "@/components/Order/EmptyTable";
import { Chat, SearchInput, WhiteImage } from "@/image/image";
import Image from "next/image";
import React, { useState } from "react";
import logoUsers from '@/image/Doe.png'
import ChatBlock from "@/components/ChatBlock/ChatBlock";
import ChatDashboard from "@/components/ChatDashboard/ChatDashboard";
import Section from "@/components/Section/Section";

const data = [
  {
    id: 1,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: false,
    nameUser: 'John Doe',
    newMessage: false,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 2,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 3,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Kunle Adekunle',
    newMessage: false,
    countNewMessage: 0,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 4,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'John Doe',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 5,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Kunle Adekunle',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 6,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 7,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 8,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 9,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },
  {
    id: 10,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },

  {
    id: 11,
    logoUsers: <Image src={logoUsers} alt="logo" className=" min-h-[48px] min-w-[48px] rounded-xl" />,
    active: true,
    nameUser: 'Janet Adebayo',
    newMessage: true,
    countNewMessage: 2,
    lastMessage: 'Hi, i want make enquiries about your product',
    time: '2:30pm'
  },

]

const Orders = () => {
  const [selectUser, setSelectUser] = useState(false)
  const [userId, setUserId] = useState(0)

  const setSelectUserId = (e: any, id: any) => {
    setSelectUser(true)
    setUserId(id)

  }

  const selectedUser = data.find((item: any) => item.id === userId)
  console.log('User', selectedUser)


  return (<Section>
    <div className="rounded-md w-full flex flex-col flex-auto">
      <HeaderGeneral name={'New Message'} title={'Conversations with Customers'} />
      <div className=" h-full flex flex-col flex-auto  ">
        <div className="grid xs:grid-col lg:grid-cols-3 gap-4 mt-4 h-full ">
          <div className="flex flex-col col-span-1 bg-white rounded-xl p-6 ">
            <div className="flex justify-between flex-col">
              <div className="flex justify-between">
                <h5 className="text-xl font-medium">Contacts</h5>
                <span className="text-black-200 font-medium text-xl">34</span>
              </div>


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
            <div className="flex flex-col flex-initial  h-full max-h-[calc(100vh-322px)] overflow-auto ">
              <div className="overflow-auto">
                <ChatBlock data={data} setSelectUser={setSelectUserId} />
              </div>
            </div>

          </div>
          <div className="lg:col-span-2 bg-white rounded-xl  p-6">
            {selectUser ? (
              <ChatDashboard name={selectedUser} />
            ) : (
              <EmptyTable
                name='New Message'
                icon={<Chat />}
                title={'Messages'}
                iconBtn={<WhiteImage />}
                describe="Click on a contact to view messages."
              />

            )}
          </div>
        </div>
      </div>
    </div>
  </Section>)
};

export default Orders;
