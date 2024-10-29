import fs from 'fs'
import {users} from '@/app/util/db'
import { NextResponse } from 'next/server'
export async function POST(req:Request){
    const {id , name , email , age , password} =await  req.json()
    users.push({
        id:String(id) , name:name ,email : email  , age :Number(age) , password : password ,task : []
    })
    const updatedUsersArray = users
    const updatedUser = JSON.stringify(updatedUsersArray,null,2)

    fs.writeFileSync('app/util/db.ts',`export const users = ${updatedUser}`)
    return NextResponse.json({title : 'updated'})
}