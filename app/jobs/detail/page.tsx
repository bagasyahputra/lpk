import { TopNavBar } from '../../../components/organisms/top_nav_bar';
import { Footer } from '../../../components/organisms/footer';
import { JobHeader } from '../../../components/organisms/job-details/job_header';
import { JobDescription } from '../../../components/organisms/job-details/job_description';
import { JobQualifications } from '../../../components/organisms/job-details/job_qualifications';
import { JobBenefits } from '../../../components/organisms/job-details/job_benefits';
import { CultureImage } from '../../../components/organisms/job-details/culture_image';
import { StickyActionCard } from '../../../components/organisms/job-details/sticky_action_card';
import { LpkTrainingInfo } from '../../../components/organisms/job-details/lpk_training_info';
import { LocationMapCard } from '../../../components/organisms/job-details/location_map_card';

export default function JobDetailPage() {
  return (
    <>
      <TopNavBar showSearch={false} />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <JobHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job Details */}
          <div className="lg:col-span-8 space-y-12">
            <JobDescription />
            <JobQualifications />
            <JobBenefits />
            <CultureImage />
          </div>
          
          {/* Right Sidebar: Training & Actions */}
          <div className="lg:col-span-4 relative">
            {/* The action card itself is sticky inside its container, but we also include training info below it */}
            <StickyActionCard />
            <div className="mt-8">
              <LpkTrainingInfo />
              <LocationMapCard />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
