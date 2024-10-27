"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { users } from "@/app/util/db"
export function LoginForm() {
  const {toast} = useToast();
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 async function handleSubmit(email : string,password: string){
      try {
          const res = await fetch('/api/login',
            {
              method: "POST",
              headers : {
                'content-type' : "application/json"
              },
              body :JSON.stringify({email, password})
            }
          )
          if(res.status!==200){
            toast({
              description: "Something went wrong.",
            })
          }
          else if(res.status==200) {
            toast({
              description: "Logged in",
            })
            const selectedUser = users.find((u)=> u.email===email)
            router.push(`/dashboard/${selectedUser?.name}`)

          }      
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" value={password}
              onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <Button onClick={()=>handleSubmit(email,password)} type="submit" className="w-full">
            Login
          </Button>
          <Link href="/register">
          <Button variant="outline" className="w-full">
            Register
          </Button>
          </Link>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
