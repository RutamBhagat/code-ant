"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";

const BUTTON_STYLES = {
  base: "mx-auto h-14 w-full max-w-[446px] justify-center gap-3 rounded-lg px-6 font-normal",
  outline: "border-gray-200 hover:bg-gray-50/50",
};

type LoginOption = {
  provider: string;
  icon: string;
  label: string;
  onClick?: () => void;
};

const LoginButton = ({ icon, label, onClick }: LoginOption) => {
  return (
    <Button
      variant="outline"
      className={`${BUTTON_STYLES.base} ${BUTTON_STYLES.outline}`}
      onClick={onClick}
    >
      <Image src={`/icons/${icon}.svg`} alt="" width={20} height={20} />
      <span className="text-base font-semibold leading-6">
        Sign in with {label}
      </span>
    </Button>
  );
};

const SAAS_OPTIONS: LoginOption[] = [
  {
    provider: "github",
    icon: "github",
    label: "Github",
    onClick: () => {
      void signIn("github", {
        callbackUrl: "/repository",
      });
    },
  },
  {
    provider: "bitbucket",
    icon: "bitbucket",
    label: "Bitbucket",
    onClick: () => {
      toast("Bitbucket login to be implemented please use Github login", {
        description: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        action: {
          label: "X",
          onClick: () => console.log("Cancel"),
        },
      });
    },
  },
  {
    provider: "azure",
    icon: "azure",
    label: "Azure Devops",
    onClick: () => {
      toast("Azure Devops login to be implemented please use Github login", {
        description: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        action: {
          label: "X",
          onClick: () => console.log("Cancel"),
        },
      });
    },
  },
  {
    provider: "gitlab",
    icon: "gitlab",
    label: "GitLab",
    onClick: () => {
      toast("GitLab login to be implemented please use Github login", {
        description: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        action: {
          label: "X",
          onClick: () => console.log("Cancel"),
        },
      });
    },
  },
];

const SELF_HOSTED_OPTIONS: LoginOption[] = [
  {
    provider: "gitlab",
    icon: "gitlab",
    label: "Self Hosted GitLab",
    onClick: () => {
      toast(
        "Self hosted GitLab login to be implemented please use Github login",
        {
          description: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
          action: {
            label: "X",
            onClick: () => console.log("Cancel"),
          },
        },
      );
    },
  },
  {
    provider: "sso",
    icon: "key",
    label: "SSO",
    onClick: () => {
      toast("SSO login to be implemented please use Github login", {
        description: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        action: {
          label: "X",
          onClick: () => console.log("Cancel"),
        },
      });
    },
  },
];

export function LoginForm() {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <main className="flex w-[408px] flex-col lg:w-full">
      <Card className="w-full flex-1 shadow-md">
        <header className="px-6 pt-9 text-center">
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
          <h1 className="text-2xl font-semibold leading-[48px] tracking-wide lg:text-3xl">
            Welcome to CodeAnt AI
          </h1>
        </header>

        <nav className="px-6 py-5">
          <div className="flex rounded-lg bg-gray-100">
            {["saas", "self-hosted"].map((type) => (
              <button
                key={type}
                onClick={() => setMode(type as "saas" | "self-hosted")}
                className={`h-[52px] flex-1 rounded-lg px-4 py-2 text-xl font-semibold leading-7 transition-all lg:h-[60px] ${
                  mode === type
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900"
                }`}
              >
                {type === "saas" ? "SAAS" : "Self Hosted"}
              </button>
            ))}
          </div>
        </nav>

        <section className="flex min-h-[325px] flex-col gap-4 border-0 border-t-2 border-gray-200 p-6">
          {(mode === "saas" ? SAAS_OPTIONS : SELF_HOSTED_OPTIONS).map(
            (option) => (
              <LoginButton key={option.provider} {...option} />
            ),
          )}
        </section>
      </Card>

      <footer className="py-8 text-center text-sm leading-6 text-gray-600 lg:text-base">
        By signing up you agree to the{" "}
        <Link
          href="/privacy"
          className="font-bold text-gray-900 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </footer>
    </main>
  );
}
