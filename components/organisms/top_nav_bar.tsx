"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface TopNavBarProps {
  showSearch?: boolean;
}

export function TopNavBar({ showSearch = false }: TopNavBarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/jobs", label: "Cari Pekerjaan" },
    { href: "/training", label: "Pelatihan" },
    { href: "/about-us", label: "Tentang Kami" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl bg-surface-container-low shadow-sm h-20 flex justify-center items-center">
      <div className="flex justify-between items-center px-4 md:px-8 w-full max-w-screen-2xl mx-auto gap-4">
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-blue-900 font-manrope whitespace-nowrap shrink-0"
          >
            InginKerja
          </Link>
          <nav className="hidden md:flex items-center gap-4 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  className={
                    isActive
                      ? "text-blue-900 border-b-2 border-blue-900 pb-1 font-manrope text-sm font-medium tracking-tight whitespace-nowrap shrink-0"
                      : "text-slate-600 hover:text-blue-700 font-manrope text-sm font-medium tracking-tight transition-all whitespace-nowrap shrink-0"
                  }
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Integrated Search Bar */}
        {showSearch && (
          <div className="hidden lg:flex flex-1 items-center bg-surface-container-lowest rounded-full px-2 py-1.5 max-w-md shadow-sm shrink min-w-0">
            <div className="flex items-center flex-1 px-3 border-r border-outline-variant/30 min-w-0">
              <Icon
                name="work"
                className="text-outline text-sm mr-2 shrink-0"
              />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs w-full font-body min-w-0 truncate"
                placeholder="Peran atau cari kata kunci"
                type="text"
              />
            </div>
            <div className="flex items-center flex-[0.8] px-3 min-w-0">
              <Icon
                name="location_on"
                className="text-outline text-sm mr-2 shrink-0"
              />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs w-full font-body min-w-0 truncate"
                placeholder="Lokasi"
                type="text"
              />
            </div>
            <button className="bg-primary text-on-primary p-2 shrink-0 rounded-full flex items-center justify-center hover:bg-primary-container transition-all">
              <Icon name="search" className="text-sm" />
            </button>{" "}
          </div>
        )}

        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          <Button
            variant="text"
            className="hidden sm:flex px-3 py-2 rounded-xl transition-all font-manrope text-sm font-medium text-slate-600 hover:bg-slate-100/50 whitespace-nowrap shrink-0"
          >
            Masuk
          </Button>
          <Button
            variant="primary"
            className="px-4 py-2.5 md:px-5 lg:px-6 rounded-xl font-manrope text-sm font-bold shadow-sm hover:scale-95 active:scale-90 transition-all whitespace-nowrap shrink-0"
          >
            Pasang Lowongan
          </Button>
        </div>
      </div>
    </header>
  );
}
