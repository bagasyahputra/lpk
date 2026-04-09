import { DashboardSidebar } from '../../components/organisms/dashboard/dashboard_sidebar';
import { DashboardHeader } from '../../components/organisms/dashboard/dashboard_header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Pass a generic title or make it dynamic if using advanced context. For simplicity, we hardcode it for the page view */}
        <DashboardHeader title="Dashboard LPK" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-surface p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
