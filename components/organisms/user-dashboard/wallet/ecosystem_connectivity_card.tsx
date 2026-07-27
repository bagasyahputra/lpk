'use client';

import React from 'react';
import { Icon } from '../../../atoms/icon';

export function EcosystemConnectivityCard() {
  return (
    <div className="bg-gradient-to-br from-[#043d2e] via-[#065f46] to-[#047857] p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group border border-emerald-800/40 text-white">
      <Icon
        name="sync_alt"
        className="text-8xl opacity-10 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
      />
      <h4 className="font-headline text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Icon name="link" className="text-emerald-300" />
        Ecosystem Connectivity
      </h4>

      <div className="flex items-center justify-between gap-3 sm:gap-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex-1 text-center">
          <p className="text-[10px] text-emerald-200 uppercase font-black tracking-widest">
            InginKerja
          </p>
          <p className="text-white font-bold text-sm sm:text-base">Wallet</p>
        </div>

        <div className="flex flex-col items-center gap-1 shrink-0">
          <Icon name="check_circle" className="text-emerald-300 text-2xl animate-pulse" />
          <span className="text-[10px] text-emerald-100 font-bold">Connected</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex-1 text-center">
          <p className="text-[10px] text-emerald-200 uppercase font-black tracking-widest">
            Visaloka
          </p>
          <p className="text-white font-bold text-sm sm:text-base">Account</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-end relative z-10">
        <div>
          <p className="text-xs text-emerald-100/70">Status</p>
          <p className="text-sm font-bold text-white">Active & Synced</p>
        </div>
        <p className="text-xs text-emerald-100/60 italic">Last sync: 2 minutes ago</p>
      </div>
    </div>
  );
}
