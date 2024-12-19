"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <div className="w-full max-w-[440px] space-y-8">
      {/* Logo and Title */}
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Image
            src="/logo.svg"
            alt="CodeAnt AI"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </div>
        <h1 className="text-[28px] font-semibold tracking-tight">
          Welcome to CodeAnt AI
        </h1>
      </div>

      {/* Custom Toggle */}
      <div className="flex rounded-lg bg-gray-50/80 p-1">
        <button
          onClick={() => setMode("saas")}
          className={`flex-1 rounded-md px-6 py-2.5 text-base font-medium transition-all ${
            mode === "saas"
              ? "bg-white text-black shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          SAAS
        </button>
        <button
          onClick={() => setMode("self-hosted")}
          className={`flex-1 rounded-md px-6 py-2.5 text-base font-medium transition-all ${
            mode === "self-hosted"
              ? "bg-white text-black shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Self Hosted
        </button>
      </div>

      {/* Login Buttons */}
      <div className="space-y-3">
        {mode === "saas" ? (
          <>
            <Button
              variant="outline"
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
              asChild
            >
              <Link href="/auth/github">
                <Image src="/icons/github.svg" alt="" width={24} height={24} />
                Sign in with Github
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
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
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
              asChild
            >
              <Link href="/auth/azure">
                <Image src="/icons/azure.svg" alt="" width={24} height={24} />
                Sign in with Azure Devops
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
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
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
              asChild
            >
              <Link href="/auth/self-hosted">
                <Image src="/icons/gitlab.svg" alt="" width={24} height={24} />
                Self Hosted GitLab
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-[52px] w-full justify-start gap-3 rounded-xl border-gray-200 px-4 text-[15px] font-normal hover:bg-gray-50/50"
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
        <Link
          href="/privacy"
          className="font-medium text-gray-900 no-underline hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
