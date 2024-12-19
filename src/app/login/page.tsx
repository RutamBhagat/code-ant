import { LoginForm } from "@/components/login/login-form";
import { StatsSection } from "@/components/login/stats-section";

export default function LoginPage() {
  return (
    <div className="bg-[linear-gradient(to_right,white_50%,#fafafa_50%)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px]">
        {/* Stats section - only visible on desktop */}
        <div className="relative hidden w-1/2 lg:block">
          <div className="relative z-10 flex h-full items-center justify-center">
            <StatsSection />
          </div>
        </div>

        {/* Login section */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
