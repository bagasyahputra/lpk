'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount, WithdrawPayload } from './wallet_types';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  account: CountryAccount;
  onSubmitWithdraw: (payload: WithdrawPayload) => void;
}

const BANKS = [
  { id: 'bca', name: 'Bank BCA', logo: '🏦' },
  { id: 'mandiri', name: 'Bank Mandiri', logo: '🏦' },
  { id: 'bri', name: 'Bank BRI', logo: '🏦' },
  { id: 'bni', name: 'Bank BNI', logo: '🏦' },
  { id: 'dana', name: 'DANA E-Wallet', logo: '📱' },
  { id: 'gopay', name: 'GoPay', logo: '📱' },
  { id: 'ovo', name: 'OVO', logo: '📱' },
];

export function WithdrawModal({
  isOpen,
  onClose,
  account,
  onSubmitWithdraw,
}: WithdrawModalProps) {
  const [bankName, setBankName] = useState(BANKS[0].name);
  const [accountNumber, setAccountNumber] = useState('1234567890');
  const [accountName, setAccountName] = useState('Adrian Wijaya');
  const [amount, setAmount] = useState<number>(account.availableBalance);
  const [exchangeRate, setExchangeRate] = useState<number>(110.42);
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Sync available balance when account changes
  useEffect(() => {
    setAmount(account.availableBalance);
  }, [account]);

  // Fetch rate to IDR
  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;

    async function getRateToIdr() {
      if (account.currencyCode === 'IDR') {
        setExchangeRate(1);
        return;
      }
      setIsLoadingRate(true);
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${account.currencyCode}`);
        const data = await res.json();
        if (data?.rates?.IDR && isMounted) {
          setExchangeRate(data.rates.IDR);
        }
      } catch (err) {
        console.warn('Fallback rate for withdrawal:', err);
        const defaults: Record<string, number> = { JPY: 110.42, KRW: 11.8, TWD: 495.2, EUR: 17600, SGD: 12100 };
        if (isMounted) setExchangeRate(defaults[account.currencyCode] || 100);
      } finally {
        if (isMounted) setIsLoadingRate(false);
      }
    }

    getRateToIdr();
    return () => {
      isMounted = false;
    };
  }, [isOpen, account.currencyCode]);

  if (!isOpen) return null;

  const calculatedIdr = Math.round(amount * exchangeRate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0 || amount > account.availableBalance) {
      alert('Jumlah penarikan tidak valid atau melebihi Saldo Tersedia!');
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      onSubmitWithdraw({
        countryId: account.id,
        bankName,
        accountNumber,
        accountName,
        amount,
        currencyCode: account.currencyCode,
        calculatedIdr,
      });
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 rounded-2xl text-emerald-600 dark:text-emerald-300">
              <Icon name="payments" className="text-xl" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-slate-900 dark:text-white text-lg">
                Penarikan Saldo Ke Rekening
              </h3>
              <p className="text-slate-500 text-xs font-medium">
                Tarik saldo pekerja {account.countryName} langsung ke rekening Indonesia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Icon name="close" className="text-xl" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl animate-bounce">
              <Icon name="check_circle" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Permintaan Penarikan Berhasil!
            </h4>
            <p className="text-slate-500 text-sm">
              Permintaan penarikan sebesar {account.currencySymbol}{amount.toLocaleString('id-ID')} ({calculatedIdr.toLocaleString('id-ID')} IDR) telah diproses dan sedang diverifikasi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Source Account Info */}
            <div className="p-4 bg-purple-50/80 dark:bg-purple-950/40 rounded-2xl border border-purple-100 dark:border-purple-900/50 flex justify-between items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-300 block">
                  Sumber Saldo ({account.countryName} {account.flagSymbol})
                </span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Tersedia: {account.currencySymbol} {account.availableBalance.toLocaleString('id-ID')} {account.currencyCode}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAmount(account.availableBalance)}
                className="text-xs font-bold text-purple-700 dark:text-purple-300 underline hover:opacity-80"
              >
                Tarik Semua
              </button>
            </div>

            {/* Bank / E-Wallet Selection */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 block">
                Pilih Bank / E-Wallet Tujuan (Indonesia)
              </label>
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm outline-none focus:border-purple-500"
              >
                {BANKS.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.logo} {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Account Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 block">
                  Nomor Rekening / E-Wallet
                </label>
                <input
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 block">
                  Nama Pemilik Rekening
                </label>
                <input
                  type="text"
                  required
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Amount input */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 block">
                Jumlah Penarikan ({account.currencyCode})
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  max={account.availableBalance}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full p-3.5 pr-16 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-headline text-xl font-bold outline-none focus:border-purple-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                  {account.currencyCode}
                </span>
              </div>
            </div>

            {/* Live Output in IDR */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  Estimasi Diterima (IDR)
                </p>
                <p className="text-xs text-slate-500">
                  Kurs Real: 1 {account.currencyCode} = {exchangeRate.toLocaleString('id-ID')} IDR
                </p>
              </div>
              <span className="font-headline text-xl font-extrabold text-emerald-700 dark:text-emerald-300">
                Rp {calculatedIdr.toLocaleString('id-ID')}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-200 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-600/20 transition-all cursor-pointer"
              >
                Konfirmasi Penarikan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
