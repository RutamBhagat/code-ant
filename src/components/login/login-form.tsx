"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [mode, setMode] = useState("saas");

  return (
    <div className="w-full max-w-[400px] space-y-6">
      {/* Logo */}
      <div className="text-center">
        <div className="mb-2 flex justify-center">
          <Image src="/logo.svg" alt="CodeAnt AI" width={40} height={40} />
        </div>
        <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
      </div>

      {/* Mode Toggle */}
      <Tabs defaultValue="saas" className="w-full" onValueChange={setMode}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="saas" className="text-base">
            SAAS
          </TabsTrigger>
          <TabsTrigger value="self-hosted" className="text-base">
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
              className="w-full justify-start gap-3 text-base font-normal"
              asChild
            >
              <Link href="/auth/github">
                <Image src="/icons/github.svg" alt="" width={24} height={24} />
                Sign in with Github
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-base font-normal"
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
              className="w-full justify-start gap-3 text-base font-normal"
              asChild
            >
              <Link href="/auth/azure">
                <Image src="/icons/azure.svg" alt="" width={24} height={24} />
                Sign in with Azure Devops
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-base font-normal"
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
              className="w-full justify-start gap-3 text-base font-normal"
              asChild
            >
              <Link href="/auth/self-hosted">
                <Image src="/icons/gitlab.svg" alt="" width={24} height={24} />
                Self Hosted GitLab
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-base font-normal"
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
      <div className="text-center text-sm">
        By signing up you agree to the{" "}
        <Link href="/privacy" className="font-medium underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
