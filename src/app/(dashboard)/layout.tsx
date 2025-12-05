import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dasboard-sidebar";

interface Props {
    children: React.ReactNode; 
}


const layout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <DashboardSidebar />
        <main className="flex flex-col h-screen">
      {children}
        </main>
    </SidebarProvider>
  );
};

export default layout;
