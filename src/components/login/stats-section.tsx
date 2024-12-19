import { ArrowUp } from "lucide-react";
import Image from "next/image";

export function StatsSection() {
  return (
    <>
      <div className="relative w-full max-w-[460px]">
        {/* Main card */}
        <div className="rounded-[20px] bg-white shadow-lg">
          <div className="flex items-center gap-3 p-6 pb-0">
            <Image src="/logo.svg" alt="" width={24} height={24} />
            <h2 className="text-[20px] font-semibold text-[#0A0A29]">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>

          <div className="my-6 h-px bg-gray-200" />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 p-6 pt-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A0A29]">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A0A29]">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0A0A29]">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>

        {/* Issues Fixed Card */}
        <div className="absolute -bottom-28 -right-10 w-[280px] rounded-[20px] bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FF]">
                  <div className="h-6 w-6 rounded-full border-4 border-blue-600" />
                </div>
                <div className="text-sm text-gray-600">Issues Fixed</div>
              </div>
              <div className="text-[40px] font-bold leading-none text-[#0A0A29]">
                500K+
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-[#EEF4FF] px-3 py-1.5 text-sm font-medium text-blue-600">
              <ArrowUp className="h-4 w-4" />
              <span>14%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background Logo */}
      <div className="absolute bottom-0 left-0 -z-50">
        <Image src="/logo-large.svg" alt="" width={284} height={319} />
      </div>
    </>
  );
}

export default StatsSection;
