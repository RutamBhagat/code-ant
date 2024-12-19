"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <div className="flex w-full flex-col">
      <Card className="w-full flex-1 shadow-md">
        <div className="space-y-6">
          {/* Logo and Title */}
          <div className="px-6 pt-9 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Image
                src="/logo.svg"
                alt="CodeAnt AI"
                width={36}
                height={40}
                className="h-8 w-8"
              />
              <span className="text-3xl leading-8">CodeAnt AI</span>
            </div>
            <h1 className="text-3xl font-semibold leading-[48px] tracking-wide">
              Welcome to CodeAnt AI
            </h1>
          </div>

          {/* Custom Toggle */}
          <div className="px-6">
            <div className="flex rounded-lg bg-gray-100">
              <button
                onClick={() => setMode("saas")}
                className={`h-[60px] flex-1 rounded-lg px-4 py-2 text-xl font-semibold leading-7 transition-all ${
                  mode === "saas"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setMode("self-hosted")}
                className={`h-[60px] flex-1 rounded-lg px-4 py-2 text-xl font-semibold leading-7 transition-all ${
                  mode === "self-hosted"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
              >
                Self Hosted
              </button>
            </div>
          </div>

          <div className="flex min-h-[325px] flex-col gap-4 border-0 border-t-2 border-gray-200 p-6">
            {/* Login Buttons */}
            {mode === "saas" ? (
              <>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/github">
                    <Image
                      src="/icons/github.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-semibold leading-6">
                      Sign in with Github
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/bitbucket">
                    <Image
                      src="/icons/bitbucket.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-semibold leading-6">
                      Sign in with Bitbucket
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/azure">
                    <Image
                      src="/icons/azure.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-semibold leading-6">
                      Sign in with Azure Devops
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/gitlab">
                    <Image
                      src="/icons/gitlab.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-semibold leading-6">
                      Sign in with GitLab
                    </span>
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/self-hosted">
                    <Image
                      src="/icons/gitlab.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-semibold leading-6">
                      Self Hosted GitLab
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg border-gray-200 px-6 font-normal hover:bg-gray-50/50"
                  asChild
                >
                  <Link href="/auth/sso">
                    <Image src="/icons/key.svg" alt="" width={20} height={20} />
                    <span className="text-base font-semibold leading-6">
                      Sign in with SSO
                    </span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
      {/* Privacy Policy */}
      <div className="py-8 text-center text-base leading-6 text-gray-600">
        By signing up you agree to the{" "}
        <Link
          href="/privacy"
          className="font-bold text-gray-900 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
