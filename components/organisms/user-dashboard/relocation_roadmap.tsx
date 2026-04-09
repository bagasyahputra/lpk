import { Icon } from "../../atoms/icon";

export function RelocationRoadmap() {
  return (
    <div className="bg-primary-container text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
      <div className="relative z-10">
        <h3 className="font-manrope text-2xl font-extrabold mb-6">Roadmap</h3>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold shrink-0">
              1
            </div>
            <div>
              <p className="font-bold">Sertifikasi Keahlian</p>
              <p className="text-xs text-on-primary-container/70 mt-1">
                Selesai 12 Feb
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start relative before:absolute before:left-[-1.15rem] before:top-[-1.5rem] before:h-8 before:w-px before:bg-white/30 ml-2.5">
            <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold ring-4 ring-primary-container shrink-0 z-10 -ml-3">
              2
            </div>
            <div className="-ml-1">
              <p className="font-bold">Sponsor Visa</p>
              <p className="text-xs text-on-primary-container/70 mt-1">
                Sedang Berjalan (Tahap review)
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start opacity-50 relative before:absolute before:left-[-1.15rem] before:top-[-1.5rem] before:h-8 before:w-px before:bg-white/30 ml-2.5">
            <div className="w-6 h-6 rounded-full border border-white text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 -ml-3 bg-primary-container">
              3
            </div>
            <div className="-ml-1">
              <p className="font-bold">Penempatan</p>
              <p className="text-xs text-on-primary-container/70 mt-1">
                Estimasi: April 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Graphic */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute top-10 right-10 opacity-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2">
        <Icon name="flight_takeoff" className="text-9xl" />
      </div>
    </div>
  );
}
