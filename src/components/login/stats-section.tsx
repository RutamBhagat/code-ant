import { ArrowUp } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";

export function StatsSection() {
  return (
    <>
      <div className="relative w-full max-w-[460px]">
        {/* Main card */}
        <Card className="rounded-3xl bg-white shadow-lg">
          <div className="flex items-center gap-3 p-6 pb-0">
            <Image src="/logo.svg" alt="" width={28} height={30} />
            <h2 className="text-lg font-semibold text-[#0A0A29]">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>

          <div className="my-6 h-px bg-gray-200" />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 p-6 pt-0">
            <div className="text-center">
              <div className="text-lg font-bold text-[#0A0A29]">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#0A0A29]">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#0A0A29]">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </Card>

        {/* Issues Fixed Card */}
        <Card className="ml-auto w-[280px] translate-x-[10%] translate-y-[-10%] rounded-3xl bg-white p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex flex-col justify-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e6e3fe]">
                  <Image
                    src="/icons/pie-chart.svg"
                    alt=""
                    width={28}
                    height={30}
                  />
                </div>
                <div className="text-sm font-bold">Issues Fixed</div>
              </div>
              <div className="text-3xl font-bold leading-none text-[#0A0A29]">
                500K+
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 px-3 text-sm font-bold text-blue-600">
                <ArrowUp className="h-4 w-4 font-bold" />
                <span>14%</span>
              </div>
              <div className="text-xsm font-normal">This week</div>
            </div>
          </div>
        </Card>
      </div>
      {/* Background Logo */}
      <div className="absolute bottom-0 left-0 -z-50">
        <Image src="/logo-large.svg" alt="" width={284} height={319} />
      </div>
    </>
  );
}

export default StatsSection;
