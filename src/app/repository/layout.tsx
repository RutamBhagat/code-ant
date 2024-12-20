import { AppSidebar } from "@/components/app-sidebar";
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
      <main className="flex-1 p-6">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
