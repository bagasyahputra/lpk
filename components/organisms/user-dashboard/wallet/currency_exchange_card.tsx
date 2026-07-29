'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount } from './wallet_types';

interface CurrencyExchangeCardProps {
  activeAccount: CountryAccount;
  accounts: CountryAccount[];
  onSelectAccount?: (account: CountryAccount) => void;
  onExchangeSuccess?: (
    fromAccount: CountryAccount,
    toAccount: CountryAccount,
    fromAmt: number,
    toAmt: number
  ) => void;
}

export function CurrencyExchangeCard({
  activeAccount,
  accounts,
  onSelectAccount,
  onExchangeSuccess,
}: CurrencyExchangeCardProps) {
  // Available destination accounts (places user has worked, excluding active account)
  const availableToAccounts = accounts.filter((acc) => acc.id !== activeAccount.id);

  const [toAccountId, setToAccountId] = useState<string>(
    availableToAccounts[0]?.id || ''
  );
  const [fromAmount, setFromAmount] = useState<number>(1000);
  const [liveRate, setLiveRate] = useState<number>(110.42);
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Sync toAccountId if it matches activeAccount or becomes invalid
  useEffect(() => {
    if (availableToAccounts.length > 0) {
      if (!availableToAccounts.some((a) => a.id === toAccountId)) {
        setToAccountId(availableToAccounts[0].id);
      }
    }
  }, [activeAccount.id, accounts, toAccountId, availableToAccounts]);

  const toAccount =
    availableToAccounts.find((a) => a.id === toAccountId) || availableToAccounts[0];

  const fromCurrencyCode = activeAccount.currencyCode;
  const toCurrencyCode = toAccount?.currencyCode || 'IDR';

  // Fetch real-time exchange rates from open public API
  useEffect(() => {
    let isMounted = true;
    async function fetchRate() {
      if (!toCurrencyCode || fromCurrencyCode === toCurrencyCode) {
        setLiveRate(1);
        return;
      }
      setIsLoadingRate(true);
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrencyCode}`);
        if (!res.ok) throw new Error('Network response failed');
        const data = await res.json();
        if (data && data.rates && data.rates[toCurrencyCode]) {
          if (isMounted) {
            setLiveRate(data.rates[toCurrencyCode]);
          }
        } else {
          throw new Error('Rate not found');
        }
      } catch (err) {
        console.warn('Using fallback exchange rate:', err);
        // Fallback static rates if network is offline
        const fallbackRates: Record<string, Record<string, number>> = {
          JPY: { IDR: 110.42, USD: 0.0065, EUR: 0.006, KRW: 8.95, TWD: 0.21, SGD: 0.0088, MYR: 0.03 },
          IDR: { JPY: 0.0095, USD: 0.000062, EUR: 0.000057, KRW: 0.081, TWD: 0.0019, SGD: 0.00008, MYR: 0.00027 },
          USD: { IDR: 16250, JPY: 154.2, EUR: 0.92, KRW: 1380, TWD: 32.5, SGD: 1.35, MYR: 4.72 },
          EUR: { IDR: 17600, JPY: 167.5, USD: 1.08, KRW: 1500, TWD: 35.3, SGD: 1.46, MYR: 5.12 },
          KRW: { IDR: 11.8, JPY: 0.11, USD: 0.00072, EUR: 0.00066, TWD: 0.023, SGD: 0.00097, MYR: 0.0034 },
          TWD: { IDR: 498.5, JPY: 4.75, USD: 0.031, EUR: 0.028, KRW: 42.5, SGD: 0.041, MYR: 0.14 },
        };
        const rate = fallbackRates[fromCurrencyCode]?.[toCurrencyCode] || 1;
        if (isMounted) {
          setLiveRate(rate);
        }
      } finally {
        if (isMounted) setIsLoadingRate(false);
      }
    }

    fetchRate();
    return () => {
      isMounted = false;
    };
  }, [fromCurrencyCode, toCurrencyCode]);

  const calculatedToAmount = fromAmount * liveRate;

  const isExceedingBalance = fromAmount > activeAccount.availableBalance;

  const handleSwap = () => {
    if (toAccount && onSelectAccount) {
      const previousFromId = activeAccount.id;
      onSelectAccount(toAccount);
      setToAccountId(previousFromId);
    }
  };

  const handleInitiateConfirm = () => {
    setValidationError(null);
    if (!fromAmount || fromAmount <= 0) {
      setValidationError('Masukkan jumlah nominal tukar saldo yang valid.');
      return;
    }
    if (isExceedingBalance) {
      setValidationError(
        `Jumlah penukaran melebihi batas saldo yang tersedia (${activeAccount.currencySymbol} ${activeAccount.availableBalance.toLocaleString(
          'id-ID'
        )}).`
      );
      return;
    }
    setIsConfirmModalOpen(true);
  };

  const handleFinalConfirm = () => {
    if (onExchangeSuccess && toAccount) {
      onExchangeSuccess(
        activeAccount,
        toAccount,
        fromAmount,
        calculatedToAmount
      );
    }
    setFromAmount(0); // Reset input state back to 0
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between gap-2">
        <div className="flex items-center justify-between">
          <h4 className="font-headline text-xl font-bold flex items-center gap-2 text-slate-900">
            <Icon name="swap_horiz" className="text-purple-600 dark:text-purple-400 text-2xl" />
            Currency Exchange
          </h4>
          <span className="text-[11px] font-bold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            Live Market Rate
          </span>
        </div>

        <div className="space-y-2 relative min-w-0">
          {/* FROM Selector & Input */}
          <div className="min-w-0">
            <div className="flex items-center justify-between mb-1 px-1">
              <label className="text-[11px] font-bold text-black uppercase block">
                From Currency (Wallet Aktif)
              </label>
              <span className={`text-[11px] font-bold transition-colors ${
                isExceedingBalance ? 'text-rose-600' : 'text-black'
              }`}>
                Tersedia: {activeAccount.currencySymbol} {activeAccount.availableBalance.toLocaleString('id-ID')}
              </span>
            </div>
            <div
              className={`flex items-center justify-between gap-2 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all min-w-0 overflow-hidden ${
                isExceedingBalance
                  ? 'border-rose-500 dark:border-rose-600 bg-rose-50/50 dark:bg-rose-950/30 focus-within:border-rose-500 ring-2 ring-rose-500/20'
                  : 'bg-black border-slate-200/60'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0 shrink">
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    {activeAccount.currencyCode}
                  </p>
                  <p className="text-[11px] text-slate-400 truncate font-medium">
                    {activeAccount.countryName}
                  </p>
                </div>
              </div>
              <input
                className={`w-24 xs:w-32 sm:w-36 text-right bg-transparent border-none outline-none focus:ring-0 font-headline text-lg sm:text-2xl font-bold shrink-0 min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                  isExceedingBalance ? 'text-rose-600' : 'text-white'
                }`}
                type="number"
                value={fromAmount}
                onChange={(e) => {
                  setValidationError(null);
                  setFromAmount(Math.max(0, Number(e.target.value) || 0));
                }}
              />
            </div>
            {isExceedingBalance && (
              <p className="text-[11px] font-semibold text-rose-600 mt-1.5 px-1 flex items-center gap-1.5 animate-fadeIn">
                <Icon name="error" className="text-xs shrink-0" />
                <span>Input melebihi batas saldo tersedia! (Maks: {activeAccount.currencySymbol} {activeAccount.availableBalance.toLocaleString('id-ID')})</span>
              </p>
            )}
          </div>

          <div className="flex justify-center relative z-10">
            <button
              onClick={handleSwap}
              type="button"
              title="Tukar Wallet Asal dan Tujuan"
              className="bg-[#1b0942] hover:bg-purple-900 text-white h-10 w-10 flex justify-center items-center rounded-full shadow-lg hover:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
            >
              <Icon name="swap_vert" className="text-xl" />
            </button>
          </div>

          <div className="min-w-0">
            <label className="text-[11px] font-bold text-black uppercase mb-1 block px-1">
              To Currency (Wallet Tempat Pernah Bekerja)
            </label>
            <div className="flex items-center justify-between gap-2 sm:gap-4 bg-black p-3.5 sm:p-4 rounded-2xl border border-slate-200/60  min-w-0 overflow-hidden">
              <div className="flex items-center gap-2 min-w-0 shrink">
                <select
                  value={toAccountId}
                  onChange={(e) => {
                    setValidationError(null);
                    setToAccountId(e.target.value);
                  }}
                  className="bg-transparent text-sm sm:text-base font-bold text-white border-none outline-none cursor-pointer focus:ring-0 max-w-[140px] xs:max-w-[180px] sm:max-w-[210px] truncate min-w-0"
                >
                  {availableToAccounts.map((acc) => (
                    <option key={acc.id} value={acc.id} className="bg-slate-900 text-white">
                      {acc.currencyCode} ({acc.countryName})
                    </option>
                  ))}
                </select>
              </div>
              <span className="font-headline text-lg sm:text-2xl font-bold text-slate-200 text-right min-w-0 truncate">
                {isLoadingRate
                  ? '...'
                  : calculatedToAmount >= 1000
                  ? calculatedToAmount.toLocaleString('id-ID', { maximumFractionDigits: 2 })
                  : calculatedToAmount.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-600 text-xs font-semibold flex items-center gap-2">
            <Icon name="error_outline" className="text-base shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Live Rate Display */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 px-4 py-3.5 bg-purple-950 rounded-2xl text-xs sm:text-sm font-semibold min-w-0">
          <span className="text-slate-300">Live Rate</span>
          <span className="text-purple-300 font-bold flex items-center gap-1 min-w-0 truncate">
            {isLoadingRate ? (
              <span className="text-xs italic">Updating...</span>
            ) : (
              `1 ${fromCurrencyCode} = ${
                liveRate >= 1000 ? liveRate.toLocaleString('id-ID', { maximumFractionDigits: 2 }) : liveRate.toFixed(4)
              } ${toCurrencyCode}`
            )}
          </span>
        </div>

        {/* Confirm Action */}
        <button
          type="button"
          disabled={isExceedingBalance || !fromAmount || fromAmount <= 0}
          onClick={handleInitiateConfirm}
          className={`w-full py-4 font-bold rounded-2xl shadow-lg transition-all text-base text-center ${
            isExceedingBalance || !fromAmount || fromAmount <= 0
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white hover:shadow-purple-500/25 hover:opacity-95 active:scale-[0.99] cursor-pointer'
          }`}
        >
          Confirm Exchange
        </button>
      </div>

      {/* Confirmation Modal Popup */}
      {isConfirmModalOpen && toAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 relative overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex justify-center items-center bg-purple-950/80 rounded-2xl text-purple-300">
                  <Icon name="swap_horizontal_circle" className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-white">
                    Konfirmasi Penukaran Saldo
                  </h3>
                  <p className="text-slate-400 text-xs">
                    Periksa rincian pemindahan saldo antar wallet
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="text-slate-400 hover:text-slate-200 h-10 w-10 flex items-center justify-center rounded-full transition-colors"
              >
                <Icon name="close" className="text-xl" />
              </button>
            </div>

            {/* Exchange Breakdown Cards */}
            <div className="space-y-3">
              {/* From Wallet Card */}
              <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Wallet Asal
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-sm text-white">
                      {activeAccount.countryName} ({activeAccount.currencyCode})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-headline font-black text-rose-400 text-base block">
                    - {activeAccount.currencySymbol} {fromAmount.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Dipotong</span>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center">
                <div className="bg-purple-900/60 text-purple-300 h-10 w-10 flex items-center justify-center rounded-full">
                  <Icon name="arrow_downward" className="text-base" />
                </div>
              </div>

              {/* To Wallet Card */}
              <div className="p-4 bg-purple-950/40 rounded-2xl border border-purple-900/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                    Wallet Tujuan
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-sm text-white">
                      {toAccount.countryName} ({toAccount.currencyCode})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-headline font-black text-emerald-400 text-lg block">
                    + {toAccount.currencySymbol}{' '}
                    {calculatedToAmount >= 1000
                      ? calculatedToAmount.toLocaleString('id-ID', { maximumFractionDigits: 2 })
                      : calculatedToAmount.toFixed(4)}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    Total Diterima
                  </span>
                </div>
              </div>
            </div>

            {/* Live Rate Summary */}
            <div className="p-3 bg-slate-800/80 rounded-xl text-xs flex justify-between items-center text-slate-600 dark:text-slate-300 font-medium">
              <span>Kurs Pertukaran:</span>
              <span className="font-bold text-white">
                1 {fromCurrencyCode} = {liveRate >= 1000 ? liveRate.toLocaleString('id-ID', { maximumFractionDigits: 2 }) : liveRate.toFixed(4)} {toCurrencyCode}
              </span>
            </div>

            {/* Important Info Note */}
            <p className="text-xs text-slate-400 leading-relaxed bg-amber-950/40 border border-amber-900/40 p-3 rounded-xl">
              Saldo sebesar <strong className="text-slate-200">{fromAmount.toLocaleString('id-ID')} {fromCurrencyCode}</strong> akan dipindahkan dari wallet {activeAccount.countryName} ke wallet {toAccount.countryName} sebesar <strong className="text-emerald-400">{calculatedToAmount.toLocaleString('id-ID', { maximumFractionDigits: 2 })} {toCurrencyCode}</strong>.
            </p>

            {/* Modal Actions: Cancel and Confirm */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmModalOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-700 text-slate-300 font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleFinalConfirm}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 transition-all cursor-pointer"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
