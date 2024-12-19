import { LoginForm } from "@/components/login/login-form";
import { StatsSection } from "@/components/login/stats-section";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="grid min-h-screen md:grid-cols-2">
        {/* Stats section - only visible on desktop */}
        <div className="hidden md:block">
          <StatsSection />
        </div>

        {/* Login section */}
        <div className="flex items-center justify-center px-4 py-12 md:p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
