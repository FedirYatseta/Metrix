'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

const ClientComponent = () => {
    const segment = useSelectedLayoutSegment()

    return <p className='capitalize text-xl text-black-700 font-medium'>{segment}</p>
}

export default ClientComponent