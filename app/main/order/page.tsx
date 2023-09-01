import { inter } from '@/app/fonts'
import Button from '@/components/Button'
import BlockSum from '@/components/Order/BlockSum'
import EmptyTable from '@/components/Order/EmptyTable'
import { Order, Plus } from '@/image/image'
import React from 'react'

const Orders = async () => {
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
      <div className='bg-white rounded-xl flex-auto items-center justify-center'>
        <EmptyTable />
      </div>
    </section>
  )
}


export default Orders