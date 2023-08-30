import React from 'react'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/configs/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = async () => {
  const session = await getServerSession(authConfig)

  if (session == null) {
    return redirect("/signin")
  } else {
    return (
      <>
        <Header />
        <main className='container'>
          <h1 className=" text-2xl">Very secure Page</h1>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </main>
        <Footer />
      </>
    )
  }
}

export default Home