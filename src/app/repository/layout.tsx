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
      <AppSidebar />
      <main className="flex flex-1 flex-col">
        {/* <SidebarTrigger /> */}
        <MobileNav />
        {children}
      </main>
    </SidebarProvider>
  );
}
