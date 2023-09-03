"use client"
import { inter } from '@/app/fonts'
import Button from '@/components/Button'
import BlockSum from '@/components/Order/BlockSum'
import EmptyTable from '@/components/Order/EmptyTable'
import Table from '@/components/Table/Table'
import { Order, Plus } from '@/image/image'
import React, { useLayoutEffect, useRef, useState } from 'react'

const Orders = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState<number>(0);

  console.log('ref', height, ref)

  useLayoutEffect(() => {
    if (ref?.current) {
      setHeight(ref?.current?.offsetHeight - 160);
    }
  }, [ref])
  const data = true
  return (
    <section className='p-5 flex flex-col flex-auto'>
      <div className='flex items-center justify-between w-full '>
        <h5 className={`${inter.className} text-lg font-bolt `}>Orders Summary</h5>
        <Button name="Create a New Order" icon={<Plus />} />
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        <BlockSum />
        <BlockSum />
        <BlockSum />
      </div>
      <div ref={ref} className='bg-white rounded-xl block p-5 h-full  overflow-hidden'>
        {data ? <Table height={height} /> : <EmptyTable />}
      </div>
    </section>
  )
}


export default Orders