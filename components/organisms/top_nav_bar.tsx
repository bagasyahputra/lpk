import Link from "next/link";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface TopNavBarProps {
  showSearch?: boolean;
}

export function TopNavBar({ showSearch = false }: TopNavBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl bg-surface-container-low shadow-sm h-20 flex justify-center items-center">
      <div className="flex justify-between items-center px-8 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tighter text-blue-900 font-manrope">
            InginKerja
          </span>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              className="text-blue-900 border-b-2 border-blue-900 pb-1 font-manrope text-sm font-medium tracking-tight"
              href="/jobs"
            >
              Cari Pekerjaan
            </Link>
            <Link
              className="text-slate-600 hover:text-blue-700 font-manrope text-sm font-medium tracking-tight transition-all"
              href="/training"
            >
              Pelatihan
            </Link>
            <Link
              className="text-slate-600 hover:text-blue-700 font-manrope text-sm font-medium tracking-tight transition-all"
              href="/about-us"
            >
              Tentang Kami
            </Link>
          </nav>
        </div>

        {/* Integrated Search Bar */}
        {showSearch && (
          <div className="hidden lg:flex items-center bg-surface-container-lowest rounded-full px-4 py-2 w-full max-w-lg mx-8 shadow-sm">
            <div className="flex items-center flex-1 px-2 border-r border-outline-variant/30">
              <Icon name="work" className="text-outline text-sm mr-2" />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-full font-body"
                placeholder="Peran atau kata kunci"
                type="text"
              />
            </div>
            <div className="flex items-center flex-1 px-4">
              <Icon name="location_on" className="text-outline text-sm mr-2" />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-full font-body"
                placeholder="Negara"
                type="text"
              />
            </div>
            <button className="bg-primary text-on-primary p-2 rounded-full flex items-center justify-center hover:bg-primary-container transition-all">
              <Icon name="search" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-4">
          <Button
            variant="text"
            className="hidden sm:flex px-4 py-2 rounded-xl transition-all font-manrope text-sm font-medium text-slate-600 hover:bg-slate-100/50"
          >
            Masuk
          </Button>
          <Button
            variant="primary"
            className="px-6 py-2.5 rounded-xl font-manrope text-sm font-bold shadow-sm hover:scale-95 active:scale-90 transition-all"
          >
            Pasang Lowongan
          </Button>
        </div>
      </div>
    </header>
  );
}
