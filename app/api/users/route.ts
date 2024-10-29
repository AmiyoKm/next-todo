import { NextResponse } from "next/server";
import {users} from "@/app/util/db"
import fs from 'fs'
export async function GET(){
    
    const data = users
    return NextResponse.json({userData : data})
}
export async function POST(req : Request){
    const {id ,name, age, email, password} = await req.json()
    const selectedEmail = users.findIndex((s)=>s.email===email)
    if(!id || !name || !age || !email || !password ){
        return NextResponse.json({title : "Please fill all the blanks"})
    }
    else if(users[selectedEmail].email===email){
        return NextResponse.json({title : "User already Exists"})
    }
    else{
        users.push({id ,name, age, email, password , task : []})
        const updatedUsersArray = users
        const updatedUser = JSON.stringify(updatedUsersArray,null,2)
        fs.writeFileSync('app//util/db.ts',`export const users=${updatedUser}`)
        return NextResponse.json({title : "New User added"})
    }



}
export async function PUT(req :Request ){
    const {id  ,name ,age , email , password} = await req.json();
    
}