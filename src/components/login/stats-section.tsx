import { ArrowUp } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";

type StatItemProps = {
  value: string;
  label: string;
};

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-lg font-bold leading-7 text-[#0A0A29]">{value}</div>
    <div className="text-sm leading-5 text-gray-600">{label}</div>
  </div>
);

const STATS_DATA = [
  { value: "30+", label: "Language Support" },
  { value: "10K+", label: "Developers" },
  { value: "100K+", label: "Hours Saved" },
] as const;

export function StatsSection() {
  return (
    <section className="relative w-full max-w-[460px] px-6 z-10">
      <Card className="rounded-3xl bg-white shadow-lg">
        <header className="flex items-center gap-3 p-6 pb-0">
          <Image src="/logo.svg" alt="CodeAnt Logo" width={28} height={30} />
          <h2 className="text-lg font-semibold leading-7 text-[#0A0A29]">
            AI to Detect & Autofix Bad Code
          </h2>
        </header>

        <hr className="my-6 h-px bg-gray-200" />

        <div className="grid grid-cols-3 p-6 pt-0">
          {STATS_DATA.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Card>

      <aside className="ml-auto w-[280px] translate-x-[10%] translate-y-[-10%]">
        <Card className="rounded-3xl bg-white p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex flex-col justify-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e6e3fe]">
                  <Image
                    src="/icons/pie-chart.svg"
                    alt="Statistics Icon"
                    width={28}
                    height={30}
                  />
                </div>
                <h3 className="text-sm font-bold leading-5">Issues Fixed</h3>
              </div>
              <div className="text-3xl font-bold leading-8 text-[#0A0A29]">
                500K+
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 px-3 text-sm font-bold leading-5 text-blue-600">
                <ArrowUp className="h-4 w-4 font-bold" />
                <span>14%</span>
              </div>
              <div className="text-xsm font-normal leading-4">This week</div>
            </div>
          </div>
        </Card>
      </aside>
    </section>
  );
}

export default StatsSection;
