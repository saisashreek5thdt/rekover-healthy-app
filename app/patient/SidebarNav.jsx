"use client";

import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { Cog, LogOut, ShieldUser, ScanHeart, Hospital, FileChartPie, CalendarHeart, Users, MessageCircleHeart, Pill, HeartPulse, SquareActivity, Ambulance} from "lucide-react"
import Profile from "./Profile";
import Forms from "./Forms";
import Patients from "./Patients";

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
  forms: [
    {
      title: "FORMS",
      url: "#",
      isActive: true,
      items: [
        {
          name: "Create Forms",
          url: "#",
          icon: ScanHeart,
        },
        {
          name: "View Forms",
          url: "#",
          icon: Hospital,
        },
        {
          name: "View Prescriptions",
          url: "#",
          icon: Pill
        },
        {
          name: "View Diet Charts",
          url: "#",
          icon: FileChartPie
        },
        {
          name: "Medical Team",
          url: "#",
          icon: Ambulance
        }
      ]
    },    
  ],
  patients: [
    {
      title: "PATIENTS",
      url: "#",
      isActive: true,
      items: [
        {
          name: "Appointments",
          url: "#",
          icon: CalendarHeart
        },
        {
          name: "My Patients",
          url: "#",
          icon: Users
        },
        {
          name: "Chats",
          url: "#",
          icon: MessageCircleHeart
        },
        {
          name: "Medical History",
          url: "#",
          icon: SquareActivity
        },
        {
          name: "Health Plans",
          url: "#",
          icon: HeartPulse
        }
      ]
    }
  ]
}

export default function SidebarNav({ ...props }) {
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <Profile profile={data.profile} />
        </SidebarHeader>
        <SidebarContent>
          <Forms forms={data.forms} />
          <Patients patients={data.patients} />
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
