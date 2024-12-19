import Image from "next/image";
import { LoginForm } from "@/components/login/login-form";
import { StatsSection } from "@/components/login/stats-section";

const GRADIENT_BG = "linear-gradient(to right, white 50%, #fafafa 50%)";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen" style={{ background: GRADIENT_BG }}>
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
        <aside
          className="relative hidden w-1/2 items-center justify-center md:flex"
          aria-label="Statistics"
        >
          <StatsSection />
        </aside>

        <section
          className="flex w-full items-center justify-center px-6 md:w-1/2"
          aria-label="Login Form"
        >
          <LoginForm />
        </section>
      </div>

      {/* Background logo positioned relative to page root */}
      <div
        className="absolute bottom-0 left-0"
        aria-hidden="true"
        role="presentation"
      >
        <Image src="/logo-large.svg" alt="" width={284} height={319} priority />
      </div>
    </div>
  );
}
