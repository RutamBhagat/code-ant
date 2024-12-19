import { ScreenSize } from "./screen-size";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      {process.env.NODE_ENV === "development" && <ScreenSize />}
      <Toaster />
    </div>
  );
}
