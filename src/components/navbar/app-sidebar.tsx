"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { footerItems, navigationItems } from "./nav-items";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();
  const [selectedUser, setSelectedUser] = useState("UtkarshDhairyaPanwar");

  return (
    <Sidebar className="hidden border-r bg-white lg:block">
      <SidebarHeader className="space-y-5">
        <div className="mx-4 mt-6 flex items-center gap-3">
          <Image src="/logo.svg" alt="CodeAnt AI Logo" width={29} height={32} />
          <span className="text-2xl leading-6">CodeAnt AI</span>
        </div>
        <Select value={selectedUser} onValueChange={setSelectedUser}>
          <SelectTrigger className="mx-auto h-[40px] w-[202px]">
            <SelectValue placeholder="Select a username" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Username</SelectLabel>
              <SelectItem value="UtkarshDhairyaPanwar">
                UtkarshDhairyaPanwar
              </SelectItem>
              <SelectItem value="RutamBhagat">RutamBhagat</SelectItem>
              <SelectItem value="KunalKushwaha">KunalKushwaha</SelectItem>
              <SelectItem value="HarkiratSingh">HarkiratSingh</SelectItem>
              <SelectItem value="PiyushGoyal">PiyushGoyal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarMenu>
            {navigationItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="h-12 w-full gap-2"
                    style={
                      {
                        "--sidebar-accent": "215, 87%, 51%",
                        "--sidebar-accent-foreground": "0, 0%, 100%",
                      } as React.CSSProperties
                    }
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3.5 py-2.5"
                    >
                      <item.icon className="h-5 w-4" />
                      <span className="text-md font-semibold">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto px-4 pb-6">
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="h-11 w-full gap-2">
                {item.url ? (
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 rounded-md px-3.5 py-2.5"
                  >
                    <item.icon className="h-5 w-4" />
                    <span className="text-md font-semibold">{item.title}</span>
                  </Link>
                ) : (
                  <button
                    onClick={async () => {
                      await item.onClick?.();
                    }}
                    className="flex w-full items-center gap-3 rounded-md px-3.5 py-2.5"
                  >
                    <item.icon className="h-5 w-4" />
                    <span className="text-md font-semibold">{item.title}</span>
                  </button>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
