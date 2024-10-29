import { AppSidebar } from "@/components/app-sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className="flex flex-col justify-center items-center w-screen h-screen">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default layout;
