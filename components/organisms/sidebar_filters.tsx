import { FilterItem } from "../molecules/filter_item";
import { PromoCard } from "../molecules/promo_card";

export function SidebarFilters() {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-28 space-y-8">
        <div className="bg-surface-container-low rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline font-bold text-lg text-primary">
              Filter
            </h3>
            <button className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline">
              Hapus Semua
            </button>
          </div>

          {/* Industry */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Industri
            </label>
            <div className="space-y-2">
              <FilterItem type="checkbox" label="Hospitalitas" checked />
              <FilterItem type="checkbox" label="Kesehatan" />
              <FilterItem type="checkbox" label="Manufaktur" />
            </div>
          </div>

          {/* Destination */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Tujuan
            </label>
            <div className="flex flex-wrap gap-2">
              <FilterItem type="pill" label="Jepang" checked />
              <FilterItem type="pill" label="Korea" />
              <FilterItem type="pill" label="Jerman" />
              <FilterItem type="pill" label="Taiwan" />
            </div>
          </div>

          {/* Job Type */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Jenis Pekerjaan
            </label>
            <div className="space-y-2">
              <FilterItem
                type="radio"
                name="jobtype"
                label="Penuh Waktu"
                checked
              />
              <FilterItem type="radio" name="jobtype" label="Kontrak" />
            </div>
          </div>

          {/* Salary */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Gaji
            </label>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                <span>Rp1.000.000</span>
                <span>Rp90.000.000</span>
              </div>
              <div className="px-2 py-3">
                <div className="relative h-2 rounded-full bg-surface-container-highest cursor-pointer">
                  {/* Highlighted track */}
                  <div className="absolute top-0 left-0 h-full w-full bg-primary rounded-full"></div>
                  {/* Thumbs */}
                  <div className="absolute top-1/2 left-0 w-5 h-5 bg-white border-[3px] border-primary rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                  <div className="absolute top-1/2 right-0 w-5 h-5 bg-white border-[3px] border-primary rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>
              </div>
              <div className="pt-2">
                <FilterItem
                  type="checkbox"
                  label="Gaji bisa dinegosiasi"
                  checked
                />
              </div>
            </div>
          </div>

          {/* Type */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Industri
            </label>
            <div className="space-y-2">
              <FilterItem type="checkbox" label="Remote" checked />
              <FilterItem type="checkbox" label="Hybrid" />
              <FilterItem type="checkbox" label="On-site" />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Pengalaman
            </label>
            <select className="w-full bg-surface-container-lowest border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 p-3 outline-none">
              <option>Tingkat Awal (0-2 tahun)</option>
              <option>Menengah (3-5 tahun)</option>
              <option>Senior (5+ tahun)</option>
            </select>
          </div>
        </div>

        {/* Ad/Promo Card */}
        <PromoCard />
      </div>
    </aside>
  );
}
