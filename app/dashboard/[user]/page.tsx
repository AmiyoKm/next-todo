import React from "react";
import { users } from "@/app/util/db";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
const Dashboard = ({ params }: { params: { user: string } }) => {
  const { user } = params;
  const actualUser = users.find((u) => u.id === user);
  //const formattedDate = dayjs(actualUser?.task.date).format('DD/MM/YYYY');
  return (
    <div className="flex flex-col  min-h-screen">
      <p className="text-5xl font-bold font-sans m-4">
        Welcome {actualUser?.name}
      </p>
      <p className="text-5xl font-bold font-sans m-4">Your Current Tasks</p>
      <div className="grid grid-cols-3 ">
        {actualUser && actualUser?.task.length > 0 ? (
          actualUser.task.map((task , index ) => (
            <div key={index} className="m-6 h-52 w-96">
              <Card>
                <CardHeader className="border-b-2">
                  <CardTitle> Task Name : {task.taskName}</CardTitle>
                </CardHeader>
                <CardContent>Due Date : {new Date(task.date).toLocaleDateString('en-US')}</CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <Button variant="default">Completed</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <div>No Tasks selected yet</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
