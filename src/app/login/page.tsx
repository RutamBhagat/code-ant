import { LoginForm } from "@/components/login/login-form";
import { StatsSection } from "@/components/login/stats-section";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Stats section - only visible on desktop */}
      <div className="relative hidden w-1/2 bg-gray-50 lg:block">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M159.5 176.5C159.5 215.212 128.212 246.5 89.5 246.5C50.7878 246.5 19.5 215.212 19.5 176.5C19.5 137.788 50.7878 106.5 89.5 106.5C128.212 106.5 159.5 137.788 159.5 176.5ZM89.5 282.5C148.318 282.5 196 234.818 196 176C196 117.182 148.318 69.5 89.5 69.5C30.6816 69.5 -17 117.182 -17 176C-17 234.818 30.6816 282.5 89.5 282.5ZM265.5 175.5C265.5 195.106 249.606 211 230 211C210.394 211 194.5 195.106 194.5 175.5C194.5 155.894 210.394 140 230 140C249.606 140 265.5 155.894 265.5 175.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
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
