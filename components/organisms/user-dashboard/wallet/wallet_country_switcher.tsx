'use client';

import React from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount } from './wallet_types';

interface WalletCountrySwitcherProps {
  accounts: CountryAccount[];
  selectedAccountId: string;
  onSelectAccount: (account: CountryAccount) => void;
}

export function WalletCountrySwitcher({
  accounts,
  selectedAccountId,
  onSelectAccount,
}: WalletCountrySwitcherProps) {
  const selectedAccount = accounts.find((a) => a.id === selectedAccountId) || accounts[0];

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-100 dark:bg-purple-950/60 rounded-2xl text-purple-600 dark:text-purple-300">
          <Icon name="public" className="text-2xl" />
        </div>
        <div>
          <h3 className="font-headline font-bold text-slate-900 dark:text-white text-base">
            Negara Penempatan Kerja
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
            Pilih negara untuk melihat saldo & riwayat dana pekerja Anda
          </p>
        </div>
      </div>

      {/* Country Pills / Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {accounts.map((acc) => {
          const isSelected = acc.id === selectedAccountId;
          return (
            <button
              key={acc.id}
              onClick={() => onSelectAccount(acc)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-manrope font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-md shadow-purple-900/20 ring-2 ring-purple-400/30'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
              }`}
            >
              <span className="text-lg leading-none">{acc.flagSymbol}</span>
              <span>{acc.countryName}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {acc.currencyCode}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
