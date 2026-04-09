import { UserHeader } from "../../components/organisms/user-dashboard/user_header";
import { ActiveApplicationCard } from "../../components/molecules/user-dashboard/active_application_card";
import { TrainingOverviewCard } from "../../components/molecules/user-dashboard/training_overview_card";
import { FinancialForecast } from "../../components/organisms/user-dashboard/financial_forecast";
import { RelocationRoadmap } from "../../components/organisms/user-dashboard/relocation_roadmap";

export default function UserDashboardPage() {
  return (
    <>
      <UserHeader
        userName="Adrian"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBrq9KzzElO0VkltArsZ1CbUTHFEvV8X79fvsYOcNmlon4kyqcY2WbTSGqKQI4UKg8NyWmGnxKU3GC6_QB3DFfLIt40FShu6brqTRl0ArHXv_ZJdhEuawj5l3iBRONN0sM7Lc1AxyZRp9c2XYvm6QqzMFBVH7dmUsdkJ6MjGOnCECXvicOMPU6JqHotG-Eu2cuQ6FOlpID332RVt1-NoGYZXuuUNy9JIzMXnm8J9AazNPU1izJ88W2T38xozeXUxp29FkmcpIairrsg"
        progressPercentage={65}
        highlightCountry="Jepang"
      />

      {/* Top Grid: 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ActiveApplicationCard />
        <TrainingOverviewCard />
      </div>

      {/* Payroll & Comparison Section (Bento Style) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FinancialForecast />
        <RelocationRoadmap />
      </section>
    </>
  );
}
