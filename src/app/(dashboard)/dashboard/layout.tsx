import { Metadata } from "next";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardTopBar from "@/components/dashboard/TopBar";

export const metadata: Metadata = {
  title: "Admin Dashboard | Time Digitals",
  description: "Manage your Time Digitals website settings and analytics.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-300 flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen">
        <DashboardTopBar />
        
        <main className="p-6 md:p-8 xl:p-10 max-w-[1600px] w-full mx-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
