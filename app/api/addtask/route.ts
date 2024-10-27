import fs from 'fs'
import {users} from '@/app/util/dbTask'
import { NextResponse } from 'next/server'
import path from 'path'
export async function POST(req:Request){
    const {id , name , email , age , password ,task} =await  req.json()
    const selectedUser = users.find((u)=> u.email===email)
    if(selectedUser){
        selectedUser.task = [
            ...selectedUser.task, 
            ...task // Ensure `task` is correctly structured
        ]
        
       
    }else{
        return NextResponse.json({title : 'Task not Added'})
    }
   
    const filePath = path.join(process.cwd(), 'app/util/dbTask.ts')
    const updatedUsersArray = JSON.stringify(users, null, 2)

    fs.writeFileSync(filePath, `export const users = ${updatedUsersArray}`)
    return NextResponse.json({ title: 'updated' })
}