"use client";

import { useState } from 'react';
import { DashboardSidebar } from '../../components/organisms/dashboard/dashboard_sidebar';
import { DashboardHeader } from '../../components/organisms/dashboard/dashboard_header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-surface w-full relative">
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title="Dashboard LPK" 
          onMenuClick={() => setIsSidebarOpen(true)} 
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-surface p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
