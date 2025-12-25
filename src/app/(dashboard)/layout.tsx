// import { SidebarProvider } from "@/components/ui/sidebar";
// import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
// import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";

// interface Props {
//     children: React.ReactNode; 
// }


// const layout = ({children}: Props) => {
//   return (
//     <SidebarProvider>
//         <DashboardSidebar />
//         <main className="flex flex-col h-screen w-screen bg-muted">
//           <DashboardNavbar />
//       {children}
//         </main>
//     </SidebarProvider>
//   );
// };

// export default layout;
"use client";


import dynamic from "next/dynamic";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardNavbar = dynamic(
  () => import("@/modules/dashboard/ui/components/dashboard-navbar"),
  { ssr: false }
);

const layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
