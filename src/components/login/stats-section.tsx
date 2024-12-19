import { ArrowUp } from "lucide-react";
import Image from "next/image";

export function StatsSection() {
  return (
    <div className="w-full max-w-[460px] space-y-6 p-8">
      <div className="absolute bottom-0 left-0 -z-50">
        <Image src="/logo-large.svg" alt="" width={284} height={319} />
      </div>

      {/* Header Card */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm text-gray-500">Language Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-gray-500">Developers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">100K+</div>
            <div className="text-sm text-gray-500">Hours Saved</div>
          </div>
        </div>
      </div>

      {/* Issues Fixed Card */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <div className="h-4 w-4 rounded-full border-[3px] border-blue-500" />
              </div>
              <div className="text-sm text-gray-500">Issues Fixed</div>
            </div>
            <div className="text-[32px] font-bold leading-none">500K+</div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-500">
            <ArrowUp className="h-3 w-3" />
            <span>14%</span>
          </div>
        </div>
        <div className="mt-1 text-sm text-gray-500">This week</div>
      </div>
    </div>
  );
}
