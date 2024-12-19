"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <Card className="w-full max-w-[440px] shadow-md">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Logo and Title */}
          <div className="text-center">
            <div className="mb-2 flex justify-center">
              <Image
                src="/logo.svg"
                alt="CodeAnt AI"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Custom Toggle */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setMode("saas")}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                mode === "saas"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setMode("self-hosted")}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
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
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/github">
                    <Image
                      src="/icons/github.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span>Sign in with Github</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/bitbucket">
                    <Image
                      src="/icons/bitbucket.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span>Sign in with Bitbucket</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/azure">
                    <Image
                      src="/icons/azure.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span>Sign in with Azure Devops</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/gitlab">
                    <Image
                      src="/icons/gitlab.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span>Sign in with GitLab</span>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/self-hosted">
                    <Image
                      src="/icons/gitlab.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span>Self Hosted GitLab</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center gap-3 rounded-lg border-gray-200 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/sso">
                    <Image src="/icons/key.svg" alt="" width={20} height={20} />
                    <span>Sign in with SSO</span>
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Privacy Policy */}
          <div className="text-center text-sm text-gray-500">
            By signing up you agree to the{" "}
            <Link
              href="/privacy"
              className="font-medium text-gray-900 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
