import { Plus, RotateCw, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  interface Repository {
    name: string;
    visibility: "Public" | "Private";
    language: string;
    size: string;
    updatedAt: string;
  }

  const repositories: Repository[] = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      language: "PHP",
      size: "5432 KB",
      updatedAt: "7 days ago",
    },
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold md:text-3xl">Repositories</h1>
        <p className="text-muted-foreground">33 total repositories</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" className="w-full sm:w-auto" size="lg">
          <RotateCw className="mr-2 h-4 w-4" />
          Refresh All
        </Button>
        <Button className="w-full sm:w-auto" size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Add Repository
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search Repositories" className="h-12 pl-9" />
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
          >
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-lg font-semibold">{repo.name}</h2>
                <Badge
                  variant={
                    repo.visibility === "Public" ? "secondary" : "outline"
                  }
                >
                  {repo.visibility}
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {repo.language}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M21 7 9 19l-5.5-5.5" />
                    <path d="M9 19l-5.5-5.5" />
                    <path d="M21 12 9 24l-5.5-5.5" />
                  </svg>
                  {repo.size}
                </div>
                <div>Updated {repo.updatedAt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
