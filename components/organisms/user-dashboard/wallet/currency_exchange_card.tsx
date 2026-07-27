'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '../../../atoms/icon';
import { CurrencyOption } from './wallet_types';

const CURRENCIES: CurrencyOption[] = [
  { code: 'JPY', name: 'Japanese Yen', country: 'Japan', flag: '🇯🇵', symbol: '¥' },
  { code: 'IDR', name: 'Indonesian Rupiah', country: 'Indonesia', flag: '🇮🇩', symbol: 'Rp' },
  { code: 'USD', name: 'US Dollar', country: 'United States', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: 'Euro', country: 'European Union', flag: '🇪🇺', symbol: '€' },
  { code: 'KRW', name: 'South Korean Won', country: 'South Korea', flag: '🇰🇷', symbol: '₩' },
  { code: 'TWD', name: 'New Taiwan Dollar', country: 'Taiwan', flag: '🇹🇼', symbol: 'NT$' },
  { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore', flag: '🇸🇬', symbol: 'S$' },
  { code: 'MYR', name: 'Malaysian Ringgit', country: 'Malaysia', flag: '🇲🇾', symbol: 'RM' },
];

interface CurrencyExchangeCardProps {
  onExchangeSuccess?: (fromCode: string, toCode: string, fromAmt: number, toAmt: number) => void;
}

export function CurrencyExchangeCard({ onExchangeSuccess }: CurrencyExchangeCardProps) {
  const [fromCurrency, setFromCurrency] = useState<CurrencyOption>(CURRENCIES[0]); // JPY
  const [toCurrency, setToCurrency] = useState<CurrencyOption>(CURRENCIES[1]); // IDR
  const [fromAmount, setFromAmount] = useState<number>(1000);
  const [liveRate, setLiveRate] = useState<number>(110.42);
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);
  const [rateError, setRateError] = useState<string | null>(null);

  // Fetch real-time exchange rates from open public API
  useEffect(() => {
    let isMounted = true;
    async function fetchRate() {
      if (fromCurrency.code === toCurrency.code) {
        setLiveRate(1);
        return;
      }
      setIsLoadingRate(true);
      setRateError(null);
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency.code}`);
        if (!res.ok) throw new Error('Network response failed');
        const data = await res.json();
        if (data && data.rates && data.rates[toCurrency.code]) {
          if (isMounted) {
            setLiveRate(data.rates[toCurrency.code]);
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
        };
        const rate = fallbackRates[fromCurrency.code]?.[toCurrency.code] || 1;
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
  }, [fromCurrency.code, toCurrency.code]);

  const calculatedToAmount = fromAmount * liveRate;

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleConfirm = () => {
    if (onExchangeSuccess) {
      onExchangeSuccess(
        fromCurrency.code,
        toCurrency.code,
        fromAmount,
        calculatedToAmount
      );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between gap-6">
      <div className="flex items-center justify-between">
        <h4 className="font-headline text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          <Icon name="swap_horiz" className="text-purple-600 dark:text-purple-400 text-2xl" />
          Currency Exchange
        </h4>
        <span className="text-[11px] font-bold px-2.5 py-1 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          Live Market Rate
        </span>
      </div>

      <div className="space-y-4 relative">
        {/* FROM Selector & Input */}
        <div>
          <label className="text-[11px] font-bold text-slate-400 uppercase mb-1 block px-1">
            From Currency
          </label>
          <div className="flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 focus-within:border-purple-500 transition-all">
            <div className="flex items-center gap-2.5">
              <select
                value={fromCurrency.code}
                onChange={(e) => {
                  const sel = CURRENCIES.find((c) => c.code === e.target.value);
                  if (sel) setFromCurrency(sel);
                }}
                className="bg-transparent text-base font-bold text-slate-900 dark:text-white border-none outline-none cursor-pointer focus:ring-0"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {c.flag} {c.code} ({c.name})
                  </option>
                ))}
              </select>
            </div>
            <input
              className="w-36 text-right bg-transparent border-none outline-none focus:ring-0 font-headline text-2xl font-bold text-slate-900 dark:text-white"
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(Math.max(0, Number(e.target.value) || 0))}
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-3 relative z-10">
          <button
            onClick={handleSwap}
            title="Tukar Mata Uang"
            className="bg-[#1b0942] hover:bg-purple-900 text-white h-10 w-10 flex justify-center items-center rounded-full shadow-lg hover:rotate-180 transition-all duration-300 cursor-pointer"
          >
            <Icon name="expand_more" className="text-xl" />
          </button>
        </div>

        {/* TO Selector & Result */}
        <div>
          <label className="text-[11px] font-bold text-slate-400 uppercase mb-1 block px-1">
            To Currency
          </label>
          <div className="flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center gap-2.5">
              <select
                value={toCurrency.code}
                onChange={(e) => {
                  const sel = CURRENCIES.find((c) => c.code === e.target.value);
                  if (sel) setToCurrency(sel);
                }}
                className="bg-transparent text-base font-bold text-slate-900 dark:text-white border-none outline-none cursor-pointer focus:ring-0"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {c.flag} {c.code} ({c.name})
                  </option>
                ))}
              </select>
            </div>
            <span className="font-headline text-2xl font-bold text-slate-400 dark:text-slate-500">
              {isLoadingRate
                ? '...'
                : calculatedToAmount >= 1000
                ? calculatedToAmount.toLocaleString('id-ID', { maximumFractionDigits: 2 })
                : calculatedToAmount.toFixed(4)}
            </span>
          </div>
        </div>
      </div>

      {/* Live Rate Display */}
      <div className="flex justify-between items-center px-4 py-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-2xl text-sm font-semibold">
        <span className="text-slate-600 dark:text-slate-300">Live Rate</span>
        <span className="text-purple-700 dark:text-purple-300 font-bold flex items-center gap-1">
          {isLoadingRate ? (
            <span className="text-xs italic">Updating...</span>
          ) : (
            `1 ${fromCurrency.code} = ${
              liveRate >= 1000 ? liveRate.toLocaleString('id-ID', { maximumFractionDigits: 2 }) : liveRate.toFixed(4)
            } ${toCurrency.code}`
          )}
        </span>
      </div>

      {/* Confirm Action */}
      <button
        onClick={handleConfirm}
        className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-purple-500/25 hover:opacity-95 transition-all active:scale-[0.99] text-base cursor-pointer text-center"
      >
        Confirm Exchange
      </button>
    </div>
  );
}
