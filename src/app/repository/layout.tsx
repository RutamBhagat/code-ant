import { AppSidebar } from "@/components/navbar/app-sidebar";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RepositoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider
        className="hidden lg:block"
        style={
          {
            "--sidebar-width": "242px",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <main className="flex-1 p-6">
          {/* <SidebarTrigger /> */}
          {children}
        </main>
      </SidebarProvider>
      <div className="lg:hidden">
        <MobileNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </>
  );
}
