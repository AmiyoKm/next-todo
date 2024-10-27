"use client"
import React from 'react'
import  SidebarDemo  from './layout'
import { useRouter } from 'next/compat/router'
import {users} from '@/app/util/db'

const  DashboardEmail = ({params} : {params: {user: string}}  ) => {
  
    const { user } = params
  console.log(user)
  const actualUser = users.find((u) => u.email === user)  
  return (
    
      
      <>
      <div className=" flex justify-center min-w-screen">
        <p className='text-5xl font-bold font-sans'>Your Current Tasks</p>
      </div>
      </>
    

     
  )
}

export default  DashboardEmail