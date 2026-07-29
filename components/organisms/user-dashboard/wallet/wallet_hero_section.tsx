'use client';

import React from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount } from './wallet_types';

interface WalletHeroSectionProps {
  account: CountryAccount;
}

export function WalletHeroSection({ account }: WalletHeroSectionProps) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Main Country Card */}
      <div className="xl:col-span-2 relative min-h-[260px] rounded-3xl overflow-hidden shadow-xl shadow-purple-950/10 transition-all hover:scale-[1.005] duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${account.colorGradient} z-0`}></div>

        <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{account.flagSymbol}</span>
                <p className="text-purple-200/80 text-xs font-semibold tracking-widest uppercase">
                  {account.countryName.toUpperCase()} WORKER ACCOUNT
                </p>
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                {account.accountTitle}
              </h3>
            </div>
            <Icon name="contactless" className="text-4xl text-white/50" />
          </div>

          <div className="mt-8">
            <span className="text-purple-200/80 text-sm font-medium">
              Current Balance
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-headline text-4xl md:text-5xl font-black tracking-tight">
                {account.currencySymbol} {account.totalBalance.toLocaleString('id-ID')}
              </span>
              <span className="text-xl text-purple-200/80 font-bold">
                {account.currencyCode}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Column */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
          <div className="w-10 h-10 justify-center items-center flex bg-purple-200 rounded-2xl text-purple-600">
            <Icon name="trending_up" className="text-2xl" />
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold">
              Total Transactions
            </p>
            <p className="font-headline text-2xl font-bold text-slate-900">
              {account.totalTransactions}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
          <div className="w-10 h-10 justify-center items-center flex bg-teal-200 rounded-2xl text-teal-600">
            <Icon name="currency_exchange" className="text-2xl" />
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold">
              Exchange Volume
            </p>
            <p className="font-headline text-2xl font-bold text-slate-900">
              {account.exchangeVolume}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all">
          <div
            className={`w-10 h-10 justify-center items-center flex rounded-2xl ${
              account.employmentStatus === 'Aktif Bekerja'
                ? 'bg-emerald-100 text-emerald-600'
                : 'bg-blue-100 text-blue-600'
            }`}
          >
            <Icon
              name={account.employmentStatus === 'Aktif Bekerja' ? 'badge' : 'verified'}
              className="text-2xl"
            />
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold">
              Status Karyawan
            </p>
            <p className="font-headline text-xl font-bold text-slate-900 mt-0.5 flex items-center gap-2">
              <span>{account.employmentStatus}</span>
              {account.employmentStatus === 'Aktif Bekerja' && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
