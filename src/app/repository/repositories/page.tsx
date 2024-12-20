import { Plus, RefreshCcw, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { repositories } from "./_components/config";

export default async function page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold md:text-3xl">Repositories</h1>
          <p className="text-sm leading-5 text-muted-foreground">
            33 total repositories
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="h-10 w-full px-4 sm:w-auto"
            size="lg"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh All
          </Button>
          <Button
            className="h-10 w-full bg-[#1570ef] px-4 text-white hover:bg-[#184179] sm:w-auto"
            size="lg"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Repository
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          placeholder="Search Repositories"
          className="h-11 max-w-[366px] pl-11"
        />
      </div>

      <div className="">
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
