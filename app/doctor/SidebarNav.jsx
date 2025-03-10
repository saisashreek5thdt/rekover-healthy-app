"use client";

import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { Cog, LogOut, ShieldUser } from "lucide-react"
import Profile from "./Profile";

const data = {
  profile: [
    {
      name: "John Doe",
      logo: ShieldUser
    },
    {
      name: "Settings",
      logo: Cog
    },
    {
      name: "Logout",
      logo: LogOut
    },
  ],
}

export default function SidebarNav({ ...props }) {
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <Profile profile={data.profile} />
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
