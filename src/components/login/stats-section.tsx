import { ArrowUp } from "lucide-react";
import Image from "next/image";

export function StatsSection() {
  return (
    <div className="relative flex h-full items-center justify-center bg-gray-50/50 p-8">
      <div className="absolute bottom-0 left-0 opacity-5">
        <Image src="/logo-large.svg" alt="" width={800} height={800} />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header Card */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={28} height={28} />
            <span className="text-[15px] font-semibold">
              AI to Detect & Autofix Bad Code
            </span>
          </div>

          {/* Stats Grid */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>

        {/* Issues Fixed Card */}
        <div className="rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <div className="h-4 w-4 rounded-full border-[3px] border-blue-500" />
                </div>
                <div className="text-sm text-gray-600">Issues Fixed</div>
              </div>
              <div className="text-[32px] font-bold">500K+</div>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
              <ArrowUp className="h-3 w-3" />
              <span>14%</span>
            </div>
          </div>
          <div className="mt-1 text-sm text-gray-500">This week</div>
        </div>
      </div>
    </div>
  );
}
