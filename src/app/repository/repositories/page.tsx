import { Database, Plus, RefreshCcw, Search } from "lucide-react";

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
                <h2 className="truncate text-lg font-medium leading-6 sm:text-xl">
                  {repo.name}
                </h2>
                <Badge className="cursor-pointer rounded-full bg-[#eff8ff] text-sm font-normal leading-5 text-[#1570ef] hover:bg-[#bedff8]">
                  {repo.visibility}
                </Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  {repo.language}
                  <div className="h-2 w-2 rounded-full bg-[#1570ef]" />
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-3 w-2.5" />
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
