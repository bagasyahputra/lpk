import { UserSidebar } from '../../components/organisms/user-dashboard/user_sidebar';
import { UserMobileNav } from '../../components/organisms/user-dashboard/user_mobile_nav';
import { Footer } from '../../components/organisms/footer';

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <UserSidebar />
      <div className="flex-1 md:ml-64 flex flex-col min-w-0">
        <main className="flex-1 p-6 md:p-10 pb-24 md:pb-10 max-w-screen-2xl w-full mx-auto">
          {children}
        </main>
        {/* We use the custom margin for footer since sidebar is fixed md:ml-64 */}
        <div className="mt-10 px-0">
          <Footer />
        </div>
      </div>
      <UserMobileNav />
    </div>
  );
}
