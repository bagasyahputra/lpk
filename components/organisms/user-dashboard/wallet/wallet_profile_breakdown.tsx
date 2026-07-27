'use client';

import React from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount } from './wallet_types';

interface WalletProfileBreakdownProps {
  account: CountryAccount;
  onOpenWithdrawModal: () => void;
}

export function WalletProfileBreakdown({
  account,
  onOpenWithdrawModal,
}: WalletProfileBreakdownProps) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between gap-6">
      {/* Total Balance Amount */}
      <div>
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">
          Total Saldo ({account.countryName} {account.flagSymbol})
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-headline text-3xl md:text-4xl font-black text-indigo-950 dark:text-indigo-200">
            {account.currencySymbol} {account.totalBalance.toLocaleString('id-ID')}
          </span>
          <span className="text-sm font-bold text-slate-400">{account.currencyCode}</span>
        </div>
      </div>

      {/* Locked & Available Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col justify-between gap-1">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold">
            <Icon name="lock" className="text-base" />
            <span>Locked Balance</span>
          </div>
          <span className="font-headline text-lg font-bold text-slate-900 dark:text-white">
            {account.currencySymbol} {account.lockedBalance.toLocaleString('id-ID')}
          </span>
        </div>

        <div className="p-4 bg-indigo-50/80 dark:bg-indigo-950/50 rounded-2xl border border-indigo-100/60 dark:border-indigo-900/40 flex flex-col justify-between gap-1">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 text-xs font-semibold">
            <Icon name="check_circle" className="text-base" />
            <span>Available Balance</span>
          </div>
          <span className="font-headline text-lg font-bold text-indigo-950 dark:text-indigo-200">
            {account.currencySymbol} {account.availableBalance.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      {/* Withdraw Action Button */}
      <button
        onClick={onOpenWithdrawModal}
        className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base active:scale-[0.99]"
      >
        <Icon name="payments" className="text-xl" />
        <span>Tarik Saldo Ke Rekening</span>
      </button>
    </div>
  );
}
