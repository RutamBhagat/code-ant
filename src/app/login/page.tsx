import { LoginForm } from "@/components/login/login-form";
import { StatsSection } from "@/components/login/stats-section";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Stats section - only visible on desktop */}
      <div className="relative hidden w-1/2 bg-gray-50 lg:block">
        <div className="relative z-10 flex h-full items-center justify-center">
          <StatsSection />
        </div>
      </div>

      {/* Login section */}
      <div className="flex w-full items-center justify-center bg-white px-4 py-12 lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
