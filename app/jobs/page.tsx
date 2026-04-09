import { TopNavBar } from '../../components/organisms/top_nav_bar';
import { SidebarFilters } from '../../components/organisms/sidebar_filters';
import { JobsList } from '../../components/organisms/jobs_list';
import { Footer } from '../../components/organisms/footer';

export default function JobsPage() {
  return (
    <>
      <TopNavBar showSearch={true} />
      <main className="pt-24 pb-12 min-h-screen max-w-screen-2xl mx-auto px-8 flex flex-col lg:flex-row gap-8">
        <SidebarFilters />
        <JobsList />
      </main>
      <Footer />
    </>
  );
}
