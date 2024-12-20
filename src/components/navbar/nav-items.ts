import {
  Cloud,
  Code2,
  FileText,
  Home,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";

import { signOut } from "next-auth/react";

export const navigationItems = [
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

export const footerItems = [
  {
    title: "Support",
    url: "/repository/support",
    icon: Phone,
  },
  {
    title: "Logout",
    onClick: () => signOut(),
    icon: LogOut,
  },
];
