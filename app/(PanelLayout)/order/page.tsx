"use client"
import { inter } from '@/styles/fonts'
import Button from '@/components/Button'
import BlockSum from '@/components/Order/BlockSum'
import EmptyTable from '@/components/Order/EmptyTable'
import Table from '@/components/Table/Table'
import { Bags, Order, Plus } from '@/image/image'
import React, { useLayoutEffect, useRef, useState } from 'react'

const block = [
  {
    orders: 'All Orders',
    pending: 'Pending',
    completed: 'Completed',
    image: Order
  },
  {
    orders: 'Canceled',
    pending: 'Returned',
    completed: 'Damaged',
    image: Order
  },
  {
    orders: 'Abandoned Cart',
    pending: 'Customers',
    image: Bags
  }
]

const Orders = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref?.current) {
      setHeight(ref?.current.offsetHeight - 175);
    }
  }, [ref])
  const data = true
  return (
    <section className='xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full'>
      <div className='flex items-center justify-between w-full '>
        <h5 className={`${inter.className} text-lg font-bolt `}>Orders Summary</h5>
        <Button name="Create a New Order" icon={<Plus />} />
      </div>
      <div className="grid xs:grid-col lg:grid-cols-3 xs:gap-2 lg:gap-4 xs:my-2 lg:my-5 ">
        {block.map((item, key) => {
          return (<BlockSum item={item} key={key} />)
        })}

      </div>
      <div ref={ref} className='bg-white rounded-xl block xs:p-2 lg:p-5 h-auto  '>
        {data ? <Table height={height} /> : <EmptyTable />}
      </div>
    </section>
  )
}


export default Orders