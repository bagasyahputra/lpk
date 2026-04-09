"use client";

import { useState, useEffect } from "react";
import { FilterItem } from "../molecules/filter_item";
import { PromoCard } from "../molecules/promo_card";
import { Icon } from "../atoms/icon";

function FilterContent() {
  return (
    <div className="bg-surface-container-low rounded-3xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline font-bold text-lg text-primary">Filter</h3>
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
          <FilterItem type="radio" name="jobtype" label="Penuh Waktu" checked />
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
            <FilterItem type="checkbox" label="Gaji bisa dinegosiasi" checked />
          </div>
        </div>
      </div>

      {/* Type */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          Tipe
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
        <select className="w-full bg-surface-container-lowest border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 p-3 outline-none max-w-full truncate">
          <option>Tingkat Awal (0-2 tahun)</option>
          <option>Menengah (3-5 tahun)</option>
          <option>Senior (5+ tahun)</option>
        </select>
      </div>
    </div>
  );
}

export function SidebarFilters() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold shadow-md hover:bg-primary/90 transition-all"
        >
          <Icon name="tune" />
          Filter Pekerjaan
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/60 transition-opacity backdrop-blur-sm">
          {/* Drawer background dismiss */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
            aria-label="Close filters"
          />
          {/* Drawer content */}
          <div className="w-4/5 max-w-sm bg-surface h-full overflow-y-auto shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/20 sticky top-0 bg-surface z-10">
              <h3 className="font-headline font-bold text-xl text-primary">
                Filter Pencarian
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-surface-container-lowest rounded-full hover:bg-surface-container-low transition-all text-on-surface-variant"
              >
                <Icon name="close" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <FilterContent />
              <PromoCard />
              {/* Apply button for mobile */}
              <div className="sticky z-10 bottom-0 pb-6 pt-2 bg-surface">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
                >
                  Terapkan Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-28 space-y-8">
          <FilterContent />
          <PromoCard />
        </div>
      </aside>
    </>
  );
}
