import { NextResponse } from "next/server";
import {users} from "@/app/util/db"
import fs from 'fs'
export async function GET(){
    
    const data = users
    return NextResponse.json({userData : data})
}
export async function POST(req : Request){
    const { email, password} = await req.json()
    const selectedEmail = users.findIndex((s)=>s.email===email)
    if(!email || !password ){
        return NextResponse.json({title : "Please fill all the blanks"},{status :400 })
    }
    else if(selectedEmail === -1){
        return NextResponse.json({title : "Email not Registered"} ,{status: 404 })
    }
    else if(users[selectedEmail].email===email && users[selectedEmail].password !== password ){
        return NextResponse.json({title : "Wrong Password"})
    }
    else{
        return NextResponse.json({title : "Successfully Logged in"},{status :200})
    }



}
