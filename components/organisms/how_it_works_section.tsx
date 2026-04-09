import { FeatureStep } from '../molecules/feature_step';

export function HowItWorksSection() {
  const steps = [
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzuTT1N7U32hidqHs6Z68iTJvK-CavI5gudv3DPX-3PNOUb-XdJoarkeIJ77vMfzwVVPVHijnOoEg-bARTxhPs1aI6MfO-BAHXNb0ygSrAq5n0AyQuze5Hr7sMtGbgGr8ndm3WdhGYxnkM6v04wnSNVPYhDTRY5aA557eDTJDroXyYxS2IxnQ0B2tGADSh5aoEg1Mxk42yBFGINwsgbBv59KC4vi7lxN5GBK1twOASWKlKivjm26QxiXf5y7PEB5jua5cRMGrMtaIh",
      imageAlt: "Students in a training center",
      stepNumber: "01",
      title: "LPK Elite Training",
      description: "Master the language and hospitality protocols specific to your destination country through our intensive 3-month bootcamp."
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6qAq_Z9LBbOfOeCbWMwUvrN_f1Nic_DpmhnY4k6E6nmu4LZQUapyBdFd44NEcJOXzmyW1RAAX1N5dlWdGuEONd5zIgPduNGIQWgKyqyswuZdkKEUr_LvlfBcDmhsRjmDKv-VksRmkCl0AnAeEfGe8LlMRkobc8KqCQOQ9nhkZXD-zUl9JUQHyJWOp3SLwx2559ljkl_LYiqa4fuISQE1KA7o8acMgYhmp_EFYa9fvunTjJvhPedwdIC6zRNlJbE0RmCijXZQOM2Kc",
      imageAlt: "Interview process",
      stepNumber: "02",
      title: "Direct Matching",
      description: "Skip the line with our curated job board. We match your skills directly with high-end hospitality partners in Asia and Europe."
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFHEouqsSEmCem3sU3Tm6_Mt3Ayf4No524ehtKs7u7FitndAAb3JhmzcIWZW3lFiQnOopXr-arPFKe1d6uc5wKBmRQLbeNNgCTkwd_xgdB6ViNwXeC2vpRvaGIvjTUOA-DlgFqf5Hc8mgB28dimPnL-dN3K-qT-3Mg-fYAXdtc-MoGa1Y5_pYltXok57DGGA-hQOLyo-Sboa5iUJkqwo_mqGNlsv6gx68SCbb4csoFDAyrMWoprrivMsChbG9cnqjaVxz6GN561r9m",
      imageAlt: "Airport travel",
      stepNumber: "03",
      title: "Overseas Departure",
      description: "Visa processing, flight arrangements, and local orientation are all handled by our concierge career team."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">
            The Path to International Success
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From professional language training to your first day in Tokyo or Berlin—we manage the entire journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <FeatureStep key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
