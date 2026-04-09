import { JobCard } from "../molecules/job_card";
import { TrainingPromoCard } from "../molecules/training_promo_card";
import { Icon } from "../atoms/icon";

export function JobsList() {
  const jobs: React.ComponentProps<typeof JobCard>[] = [
    {
      variant: "detailed",
      title: "Resepsionis Hotel Mewah - Teluk Tokyo",
      company: "Global Gateway LPK",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6uFEyhOO0dQB9n2e6l3t002pgDECGScMTOZ_fi_3esBFxU8e2Q_NokpyuktMFaH5WtRq0LdBkRSlD1MxTuXT1-BJ8IdnLOqJLfmEfM0UjDHasEj34Q8nPZzVd2l4Mu_QJk0uIdCA_gx5yHSL9IrjSCnGLRWVFtE7O59TCu3fp8BGScpZ7gICSetmdYXXcreDVlbAo5_B33ZIYSwi6st-wB5HHrwUb1TkdRzCKPQ09Nn07EE_TmhhP4Z2bHadkAnirVwbyU7UlmavN",
      urgencyStatus: "Urgent",
      visaProvided: true,
      salary: "Rp12.000.000 - Rp17.000.000",
      duration: "Permanen",
    },
    {
      variant: "detailed",
      title: "Staf Resor - Pegunungan Hokkaido",
      company: "Nippon Bridge Agency",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCax7HFLToaRme2huHSXyWRz-yuK5MOqwWlQKSqpeTlJZSK_3IiSkeIA_T2pNgN69PeMBwdbjWzhEmTpzaxDOsf4_Z9oBKBKCpdEwuHY1-ua9YR976z0XLuofqwe-gniwUSgClmkHZdkkPTAgiuuacp3trsZsk7UwmGR99TqE8frLYZ0RTiLZ5Uml6GWf-cL5O4PcP4K9OkLKygIZwBzi4Gnul6Rivs81HHo2uNmINRARECY83olfZBz4qI5L55ZER_pT5T884AJiZQ",
      visaProvided: true,
      salary: "Rp16.000.000 - Rp21.000.000",
      duration: "12 Bulan",
    },
    {
      variant: "detailed",
      title: "Manajer Hospitalitas - Distrik Osaka",
      company: "Rising Sun Careers",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCT96KoYKhP3O8e-2Gh6drAzt-3SQsmUymNcqNKLVXp8c55EkSu27psvnKqDUj6RBegnyyrTUXmtEKD8soPNdhkQoPD9SNQG848dGwO_UNtBygfZ6PLuQd7gqs_z3BD-WJNl63bMu32emtkmWlLCn_1GEldg-ioDH2hM4Itp0syUgFJiJ-N_mtaZVr0Bn79GykIzgXLQxxNYcDOs2hx8YkhHgYOERv0IUXdGGQf1FtY5qcrhpnlTdx7siVEerw8tG5BOA4XJ2BJBiAk",
      urgencyStatus: "Urgent",
      visaProvided: true,
      salary: "Rp13.500.000 - Rp18.000.000",
      duration: "Permanen",
    },
  ];

  return (
    <section className="flex-1 space-y-8 w-full max-w-full">
      {/* Header / Results Count */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">
            Peran Hospitalitas di Jepang
          </h2>
          <p className="text-on-surface-variant font-medium mt-1">
            Menampilkan 124 peluang terverifikasi
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl shrink-0">
          <span className="text-sm font-bold text-on-surface-variant">
            Urutkan:
          </span>
          <select className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-bold text-primary">
            <option>Gaji Tertinggi</option>
            <option>Terbaru</option>
            <option>Urgent</option>
          </select>
        </div>
      </div>

      {/* Job Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <JobCard {...jobs[0]} />
        <JobCard {...jobs[1]} />
        <JobCard {...jobs[2]} />
        {/* Featured Training Slot (Bento Variation) */}
        <TrainingPromoCard />
      </div>

      {/* Pagination / Load More */}
      <div className="flex justify-center pt-8 border-t border-outline-variant/20 mt-8">
        <button className="group flex items-center gap-3 bg-surface-container-low hover:bg-surface-container-high px-8 py-4 rounded-2xl transition-all shadow-sm">
          <span className="text-sm font-bold text-primary">
            Muat lebih banyak peluang
          </span>
          <Icon
            name="expand_more"
            className="text-primary group-hover:translate-y-1 transition-transform"
          />
        </button>
      </div>

      {/* "No Results Found" Scenario (Hidden by default) */}
      <div className="hidden flex-col items-center justify-center py-24 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl scale-150"></div>
          <Icon
            name="search_off"
            className="text-8xl text-outline-variant relative"
          />
        </div>
        <h3 className="text-2xl font-headline font-extrabold text-primary mb-2">
          Tidak ada hasil ditemukan
        </h3>
        <p className="text-on-surface-variant max-w-sm mb-8">
          Kami tidak dapat menemukan pekerjaan yang cocok dengan filter Anda.
          Coba sesuaikan industri atau tujuan Anda.
        </p>
        <button className="bg-surface-container-high text-primary font-bold px-8 py-3 rounded-xl hover:bg-surface-variant transition-all">
          Atur Ulang Semua Filter
        </button>
      </div>
    </section>
  );
}
