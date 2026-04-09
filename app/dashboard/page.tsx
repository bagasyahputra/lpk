import { StatCard } from "../../components/molecules/stat_card";
import { ApplicantRow } from "../../components/molecules/applicant_row";
import { Icon } from "../../components/atoms/icon";
import { Button } from "../../components/atoms/button";

export default function DashboardPage() {
  const applicants: React.ComponentProps<typeof ApplicantRow>[] = [
    {
      name: "Budi Santoso",
      avatarSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDynlKeLmwvvL_uToC2uT-2g_3jL9i4tckR4Vvg5ZFq0EFJQMNeydUZneisVOufqSPtctz52vrY3Z5XUorXRYiFGHbiLHp8W8OWJJL-llaOxjz4Eqhyk2MQCdZi3pzDe6CSGXSt43pSLsCchgsohuXv2Ssp8AvN_0fJG5JJaWaiQR2uaEdi0LqkEMe7r2MgovLjKVNSv_oc7zl1Rrh3FAelV9NUGLSoWTIhgpc62oCkgAHChlw2sm-kPtF-N1OlnT6M6K1aZxPMuQJA",
      jobApplied: "Senior Guest Relations - Kyoto",
      appliedDate: "12 Okt 2026",
      status: "Baru",
      jlptLevel: "N3",
    },
    {
      name: "Siti Rahmawati",
      avatarSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCGuYGCynbnSwyneqjcbFDkhX1qDrtNsYS8svmNYftcJ12BRxFboRq_g7qUiJqi-YwDjmSOioZ0doedB9Vs8_AI5MPZMYDsoRZsSRRY3CvyO0-YWbJb3PET9B_NSDcJaLtdXxKKwJ5PAfu8OV-JxWo2wPmPV9csm638OQjkUpod5owx6-sZgqMS87zLud9n0TzWiztSVRAf2Og3DJCQW-_LiPLWxMJ68YEeX2WGhK-KEBk7_XHZdp5huOrIq18JzxeLWtUPfyc61cLM",
      jobApplied: "Hospitality Management - Osaka",
      appliedDate: "10 Okt 2026",
      status: "Wawancara",
      jlptLevel: "N4",
    },
    {
      name: "Ahmad Riyadi",
      avatarSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6uFEyhOO0dQB9n2e6l3t002pgDECGScMTOZ_fi_3esBFxU8e2Q_NokpyuktMFaH5WtRq0LdBkRSlD1MxTuXT1-BJ8IdnLOqJLfmEfM0UjDHasEj34Q8nPZzVd2l4Mu_QJk0uIdCA_gx5yHSL9IrjSCnGLRWVFtE7O59TCu3fp8BGScpZ7gICSetmdYXXcreDVlbAo5_B33ZIYSwi6st-wB5HHrwUb1TkdRzCKPQ09Nn07EE_TmhhP4Z2bHadkAnirVwbyU7UlmavN",
      jobApplied: "Resort Staff - Hokkaido",
      appliedDate: "08 Okt 2026",
      status: "Diterima",
      jlptLevel: "N2",
    },
    {
      name: "Dewi Lestari",
      avatarSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCax7HFLToaRme2huHSXyWRz-yuK5MOqwWlQKSqpeTlJZSK_3IiSkeIA_T2pNgN69PeMBwdbjWzhEmTpzaxDOsf4_Z9oBKBKCpdEwuHY1-ua9YR976z0XLuofqwe-gniwUSgClmkHZdkkPTAgiuuacp3trsZsk7UwmGR99TqE8frLYZ0RTiLZ5Uml6GWf-cL5O4PcP4K9OkLKygIZwBzi4Gnul6Rivs81HHo2uNmINRARECY83olfZBz4qI5L55ZER_pT5T884AJiZQ",
      jobApplied: "Factory Assembly - Nagoya",
      appliedDate: "05 Okt 2026",
      status: "Ditolak",
      jlptLevel: "N5",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-headline font-extrabold text-primary">
            Selamat datang kembali!
          </h2>
          <p className="text-on-surface-variant font-medium text-sm mt-1">
            Berikut ringkasan aktivitas rekrutmen Anda hari ini.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-sm py-2">
            <Icon name="download" className="text-sm mr-1" />
            Unduh Laporan
          </Button>
          <Button variant="primary" className="text-sm py-2">
            <Icon name="add" className="text-sm mr-1" />
            Posting Pekerjaan
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <StatCard
          title="Total Lowongan"
          value="4"
          iconName="work"
          colorScheme="primary"
        />
        <StatCard
          title="Kandidat Aktif"
          value="79"
          iconName="group"
          colorScheme="secondary"
        />
      </div>

      {/* Main Content Area: Tables & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applicants Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-headline font-bold text-primary">
              Pelamar Terbaru
            </h3>
            <a
              href="#"
              className="text-sm font-bold text-secondary hover:underline flex items-center gap-1"
            >
              Lihat Semua
              <Icon name="arrow_forward" className="text-xs" />
            </a>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/20 overflow-hidden flex flex-col">
            {applicants.map((app, idx) => (
              <ApplicantRow key={idx} {...app} />
            ))}
          </div>
        </div>

        {/* Right column (e.g., Quick Actions or Agenda) */}
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30">
            <h3 className="text-lg font-headline font-bold text-primary mb-4">
              Agenda Mendatang
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-secondary-container text-secondary-fixed rounded-xl flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Okt
                  </span>
                  <span className="text-lg font-black leading-none">14</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">
                    Review Kandidat Hoshinoya
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">
                    10:00 AM - Zoom
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-primary-container text-primary-fixed rounded-xl flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Okt
                  </span>
                  <span className="text-lg font-black leading-none">15</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">
                    Presentasi Visa Kerja
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">
                    1:00 PM - Aula Utama
                  </p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-6 text-xs">
              Lihat Kalender Lengkap
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-3xl text-white shadow-xl">
            <h3 className="text-xl font-bold font-headline mb-2">
              Butuh Bantuan?
            </h3>
            <p className="text-sm text-blue-100 mb-6">
              Tim dukungan kami siap membantu Anda 24/7 kapanpun dibutuhkan.
            </p>
            <button className="bg-white text-primary font-bold px-4 py-2.5 rounded-xl w-full hover:bg-surface transition-colors flex items-center justify-center gap-2">
              <Icon name="support_agent" />
              Hubungi Spesialis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
