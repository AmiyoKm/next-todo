"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  PasswordInput
} from "@/components/ui/password-input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import {users} from "@/app/util/db"
import fs from 'fs' 
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { useRouter } from "next/navigation"
const formSchema = z.object({
  name_8193825577: z.string(),
  name_5074242054: z.string(),
  name_2597391224: z.string(),
  name_7795817675: z.string(),
  name_2139017743: z.string()
});


export default function MyForm() {
  const router = useRouter()
  const {toast } = useToast()
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  async function  onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      if(values.name_7795817675 !== values.name_2139017743){
        toast({
          title : "Passwords do not match",
          description : "Please enter the same password in both fields.",
        }

        )
       return 
      }
      const matchingName = users.findIndex(user => user.name===values.name_8193825577)
      if(matchingName !==-1){
        toast({
          title : "User already exists",
          description : "Please Login instead.",
        })
          return
      }
      else{
            const id = Math.floor(Math.random()*10000) +1
           await fetch('/api/register',
            {
              method : "POST",
              headers :{
                'content-type' : 'application/json'
              },
              body : JSON.stringify({
                id: id,
                name : values.name_8193825577,
                email: values.name_5074242054,
                age:Number(values.name_2597391224),
                password : values.name_7795817675 
              })
            }
            
          )
          toast({
            title : "User Added"
          })
          router.push(`/dashboard/${id}`)
         
      }
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        title: "Error",
        description: "There was an error submitting the form. Please try again.",
      })
    }
  }

  return (
    <BackgroundBeamsWithCollision>
       <div className="w-screen h-screen flex justify-center items-center z-10">
         <Card className="w-96 h-auto ">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="name_8193825577"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                placeholder="username..."
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_5074242054"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                placeholder="email..."
                
                type="email"
                {...field} />
              </FormControl>
              <FormDescription>This is your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_2597391224"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>This is your age</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_7795817675"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="password..." {...field} />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        <FormField
          control={form.control}
          name="name_2139017743"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="confirm password..." {...field} />
              </FormControl>
              <FormDescription>Enter your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </CardContent>
    </Card>
    </div>
    </BackgroundBeamsWithCollision>
   
   
   
  )
}