"use client";
import { DatePickerWithPresets } from "@/components/date-picker";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { DayPickerProvider } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useParams } from "next/navigation";
import {users } from '@/app/util/dbTask'
import { useToast } from "@/hooks/use-toast";
interface Task {
  taskName: string | undefined;
  date: Date | undefined;
}
const AddTask = ({params}: {params :{ user : string}}) => {
    const {toast} = useToast()
    const { user } = useParams()
    console.log(user)
  const [date, setDate] = React.useState<Date>(new Date());
  const [taskName, setTaskName] = React.useState<string>();
 
  const [disabled ,setDisabled] = React.useState(true)
  async function handleSubmit(taskName: string | undefined, date: Date | undefined) {
    try {
      const selectedUser = users.find((u) => u.name === user);
      if (selectedUser) {
        const response = await fetch('http://localhost:3000/api/addtask', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: selectedUser.id,
            name: selectedUser.name,
            age: selectedUser.age,
            email: selectedUser.email,
            password: selectedUser.password,
            task: {
              taskName: taskName,
              date: date,
            },
          }),
        });
  
        // Check for a successful response
        if (response.status !== 200) {
          throw new Error(`Failed to post: ${response.statusText}`);
        }
        
        toast({
          title: "New Task Added",
        });
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
  
  
  React.useEffect(()=>{
    if(taskName !== '' ){
        setDisabled(!taskName )
    }
  },[ taskName])
  return (
    <BackgroundBeamsWithCollision>
      <Card className="z-10">
        <CardHeader>
          <CardTitle>Add Task</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="task-name">Task Name</Label>
          <Input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mt-2 mb-4"
            type="text"
            placeholder="Task Name"
          />

          <Label htmlFor="date" className="block mb-2">
            Choose Deadline Date
          </Label>
          <DatePickerWithPresets date={date} setDate={setDate} />
        </CardContent>
        <CardFooter>
          <Button disabled={disabled} onClick={() =>{ handleSubmit(taskName, date)}}>Submit</Button>
        </CardFooter>
      </Card>
    </BackgroundBeamsWithCollision>
  );
};

export default AddTask;
