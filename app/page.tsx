import React from 'react'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/configs/auth';
import Header from '@/components/Header';

const Home = async () => {
  const session = await getServerSession(authConfig)

  if (session == null) {
    return redirect("/signin")
  } else {
    return redirect("/main/dashboard")
  }
}

export default Home