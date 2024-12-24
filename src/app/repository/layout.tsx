import { AppSidebar } from "@/components/navbar/app-sidebar";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RepositoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "242px",
        } as React.CSSProperties
      }
    >
      <div className="hidden lg:block">
        <AppSidebar />
      </div>
      <div className="flex w-full flex-col">
        <MobileNav />
        {children}
      </div>
    </SidebarProvider>
  );
}
