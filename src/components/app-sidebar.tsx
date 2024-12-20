"use client";

import {
  ChevronDown,
  Cloud,
  Code2,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Repositories",
    url: "/repository/repositories",
    icon: Home,
  },
  {
    title: "AI Code Review",
    url: "/repository/code-review",
    icon: Code2,
  },
  {
    title: "Cloud Security",
    url: "/repository/cloud-security",
    icon: Cloud,
  },
  {
    title: "How to Use",
    url: "/repository/guide",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/repository/settings",
    icon: Settings,
  },
];

const footerItems = [
  {
    title: "Support",
    url: "/repository/support",
    icon: HelpCircle,
  },
  {
    title: "Logout",
    url: "/repository/logout",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r bg-[#FAFAFA]">
      <SidebarHeader className="flex items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="CodeAnt AI Logo" width={32} height={32} />
          <span className="text-lg font-semibold">CodeAnt AI</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium">
            UtkarshDhairyaPa...
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" sideOffset={5} align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
                    className={`w-full gap-2 ${
                      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 rounded-md px-3 py-2"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t">
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="w-full gap-2 hover:bg-gray-100"
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-2 rounded-md px-3 py-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
