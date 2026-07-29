'use client';

import React, { useState } from 'react';
import { Icon } from '../../../atoms/icon';
import { Transaction } from './wallet_types';

interface WalletRecentActivityProps {
  transactions: Transaction[];
}

export function WalletRecentActivity({ transactions }: WalletRecentActivityProps) {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTransactions = transactions.filter((t) => {
    const matchesCategory =
      filterCategory === 'All' || t.category.toLowerCase() === filterCategory.toLowerCase();
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.currency.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="font-headline text-xl font-bold text-slate-900">
            Recent Activity
          </h4>
          <p className="text-slate-500 text-sm font-medium">
            Monitor your global fund movement & withdrawal status
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
            {['All', 'Salary', 'Exchange', 'Withdrawal'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-950 text-white rounded-xl text-xs font-semibold hover:bg-indigo-900 transition-colors shadow-sm cursor-pointer">
            <Icon name="download" className="text-base" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-400 text-[11px] font-extrabold uppercase tracking-widest">
              <th className="px-6 md:px-8 py-4">Transaction Details</th>
              <th className="px-6 md:px-8 py-4">Category</th>
              <th className="px-6 md:px-8 py-4">Currency</th>
              <th className="px-6 md:px-8 py-4 text-right">Amount</th>
              <th className="px-6 md:px-8 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400 text-sm">
                  Tidak ada transaksi ditemukan.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-slate-50/50  transition-colors"
                >
                  <td className="px-6 md:px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 min-w-10 min-h-10 flex justify-center items-center rounded-xl ${tx.iconBg} ${tx.iconColor}`}>
                        <Icon name={tx.icon} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          {tx.title}
                        </p>
                        <p className="text-xs text-slate-400">{tx.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 md:px-8 py-6 font-medium text-slate-600">
                    {tx.category}
                  </td>
                  <td className="px-6 md:px-8 py-6">
                    <span className="font-bold text-slate-900">
                      {tx.currency}
                    </span>
                  </td>
                  <td className="px-6 md:px-8 py-6 text-right">
                    <span
                      className={`font-headline font-bold text-base ${
                        tx.amount > 0
                          ? 'text-indigo-950'
                          : tx.category === 'Withdrawal'
                          ? 'text-rose-600'
                          : 'text-slate-800'
                      }`}
                    >
                      {tx.formattedAmount}
                    </span>
                  </td>
                  <td className="px-6 md:px-8 py-6 text-center">
                    <span
                      className={`px-3.5 py-1.5 text-[10px] font-black rounded-full uppercase tracking-wider ${
                        tx.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : tx.status === 'Pending'
                          ? 'bg-amber-100  text-amber-700'
                          : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
