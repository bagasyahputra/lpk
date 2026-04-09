import { JobCard } from "../molecules/job_card";

export function ActiveOpportunitiesSection() {
  const jobs: React.ComponentProps<typeof JobCard>[] = [
    {
      title: "Senior Pastry Chef",
      company: "Grand Hyatt",
      location: "Tokyo, Japan",
      iconType: "apartment",
      urgencyStatus: "Urgent",
      tags: ["Full-time", "JLPT N4 Required", "$3,500 - $4,200 /mo"],
      postedTime: "2 jam yang lalu",
    },
    {
      title: "Front Office Lead",
      company: "Marriott Int.",
      location: "Berlin, Germany",
      iconType: "hotel",
      urgencyStatus: "New",
      tags: ["Full-time", "English + German A1", "€2,800 - €3,400 /mo"],
      postedTime: "5 jam yang lalu",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">
            Lowongan Terbaru
          </h2>
          <div className="flex gap-2">
            <button className="px-5 py-2 rounded-full border border-outline-variant text-sm font-semibold hover:bg-surface-container transition-colors text-on-surface">
              Culinary
            </button>
            <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold">
              Hospitality
            </button>
            <button className="px-5 py-2 rounded-full border border-outline-variant text-sm font-semibold hover:bg-surface-container transition-colors text-on-surface">
              Tech
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
