"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [mode, setMode] = useState("saas");

  return (
    <div className="w-full max-w-[440px] space-y-8">
      {/* Logo */}
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Image src="/logo.svg" alt="CodeAnt AI" width={48} height={48} />
        </div>
        <h1 className="text-[28px] font-semibold">Welcome to CodeAnt AI</h1>
      </div>

      {/* Mode Toggle */}
      <Tabs defaultValue="saas" className="w-full" onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gray-100 p-1">
          <TabsTrigger
            value="saas"
            className="rounded-md px-8 py-2.5 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            SAAS
          </TabsTrigger>
          <TabsTrigger
            value="self-hosted"
            className="rounded-md px-8 py-2.5 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Self Hosted
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Login Buttons */}
      <div className="space-y-3">
        {mode === "saas" ? (
          <>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/github">
                <Image src="/icons/github.svg" alt="" width={24} height={24} />
                Sign in with Github
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/bitbucket">
                <Image
                  src="/icons/bitbucket.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                Sign in with Bitbucket
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/azure">
                <Image src="/icons/azure.svg" alt="" width={24} height={24} />
                Sign in with Azure Devops
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/gitlab">
                <Image src="/icons/gitlab.svg" alt="" width={24} height={24} />
                Sign in with GitLab
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/self-hosted">
                <Image src="/icons/gitlab.svg" alt="" width={24} height={24} />
                Self Hosted GitLab
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 w-full justify-start gap-3 rounded-xl text-base font-normal hover:bg-gray-50"
              asChild
            >
              <Link href="/auth/sso">
                <Image src="/icons/key.svg" alt="" width={24} height={24} />
                Sign in with SSO
              </Link>
            </Button>
          </>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="text-center text-[15px] text-gray-600">
        By signing up you agree to the{" "}
        <Link href="/privacy" className="font-semibold text-gray-900 underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
