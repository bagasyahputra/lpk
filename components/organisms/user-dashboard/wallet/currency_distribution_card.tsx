'use client';

import React from 'react';
import { CountryAccount } from './wallet_types';

interface CurrencyDistributionCardProps {
  accounts: CountryAccount[];
  selectedAccountId: string;
}

export function CurrencyDistributionCard({
  accounts,
  selectedAccountId,
}: CurrencyDistributionCardProps) {
  const selectedAcc = accounts.find((a) => a.id === selectedAccountId) || accounts[0];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
      <h4 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-6">
        Currency Distribution
      </h4>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Circular Chart Simulation */}
        <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-purple-500"
              strokeWidth="4"
              strokeDasharray="100, 100"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {/* Primary Portion (75%) */}
            <path
              className="text-indigo-950 dark:text-indigo-400"
              strokeWidth="4.2"
              strokeDasharray="75, 100"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs text-slate-400 font-semibold">Total</span>
            <span className="font-headline text-lg font-black text-slate-900 dark:text-white">
              {selectedAcc.currencySymbol}
              {selectedAcc.totalBalance >= 1000
                ? `${Math.round(selectedAcc.totalBalance / 1000)}k`
                : selectedAcc.totalBalance}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-indigo-950 dark:bg-indigo-400 shrink-0"></span>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {selectedAcc.currencyCode} Wallet
              </p>
              <p className="font-headline text-lg font-bold text-slate-900 dark:text-white">
                75%
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-500 shrink-0"></span>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                IDR Wallet
              </p>
              <p className="font-headline text-lg font-bold text-slate-900 dark:text-white">
                25%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
