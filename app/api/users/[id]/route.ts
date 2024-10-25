import { NextResponse } from "next/server";
import {users} from "@/app/util/db"
export async function GET(req : Request , {params} : {params : {id : string}}){
    const {id } = params
    const user = users.find((user) => user.id === id)
    const data = user
    return NextResponse.json({userData : data})
}