import React from 'react'
import {users} from '@/app/util/db'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
const Dashboard = ({params}: {params :{ user : string}}) => {
   const {user} = params
    const actualUser = users.find((u)=> u.id=== user)
  return (
    <div className='flex flex-col  min-h-screen'>
        <p className='text-5xl font-bold font-sans'>Welcome {actualUser?.name}</p>
        <p className='text-5xl font-bold font-sans'>Your Current Tasks</p>
        <div className='grid grid-cols-3'>
        {actualUser && actualUser.task.length > 0 ?  
        
        actualUser.task.map((task) => (
          <Card>
            <CardHeader>
            <CardTitle>{task.taskName}</CardTitle>
            </CardHeader>
            <CardFooter>{task.date}</CardFooter>
          </Card>
          
        )) :
      <div>No Tasks selected yet</div>
      }
        </div>
        
    </div>
  )
}

export default Dashboard