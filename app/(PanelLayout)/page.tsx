import React from 'react'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/configs/auth';
import Header from '@/components/LeftNav/Header';

const Home = async () => {
  return (
    <div>Dashboard</div>
  )
}

export default Home