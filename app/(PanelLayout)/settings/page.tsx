import Account from '@/components/Tabs/Account/Account';
import Tabs from '@/components/Tabs/Tabs'
import React from 'react'

const Orders = async () => {

  const tabsData = [
    {
      label: 'Account',
      content: <Account />,
    },
    {
      label: 'Business',
      content: <p>Content for Tab 2</p>,
    },
    {
      label: 'Security',
      content: <p>Content for Tab 3</p>,
    },
  ];
  return (
    <section className='xs:p-2 lg:p-5 flex flex-col flex-auto  overflow-y-auto h-full'>
      <div className='bg-white rounded-md w-full h-full'>
        <Tabs tabs={tabsData} defaultTab={0} />
      </div>
    </section>
  )
}


export default Orders