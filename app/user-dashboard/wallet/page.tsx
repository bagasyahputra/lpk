'use client';

import React, { useState } from 'react';
import { UserHeader } from '../../../components/organisms/user-dashboard/user_header';
import { CountryAccount, Transaction, WithdrawPayload } from '../../../components/organisms/user-dashboard/wallet/wallet_types';
import { WalletCountrySwitcher } from '../../../components/organisms/user-dashboard/wallet/wallet_country_switcher';
import { WalletHeroSection } from '../../../components/organisms/user-dashboard/wallet/wallet_hero_section';
import { WalletProfileBreakdown } from '../../../components/organisms/user-dashboard/wallet/wallet_profile_breakdown';
import { CurrencyExchangeCard } from '../../../components/organisms/user-dashboard/wallet/currency_exchange_card';
import { EcosystemConnectivityCard } from '../../../components/organisms/user-dashboard/wallet/ecosystem_connectivity_card';
import { WithdrawModal } from '../../../components/organisms/user-dashboard/wallet/withdraw_modal';
import { OfflineWithdrawModal } from '../../../components/organisms/user-dashboard/wallet/offline_withdraw_modal';
import { WalletRecentActivity } from '../../../components/organisms/user-dashboard/wallet/wallet_recent_activity';

// Initial Worker Accounts Data across different placement countries
const INITIAL_ACCOUNTS: CountryAccount[] = [
  {
    id: 'jp',
    countryName: 'Japan',
    flagCode: 'JP',
    flagSymbol: '🇯🇵',
    currencyCode: 'JPY',
    currencySymbol: '¥',
    accountTitle: 'JPY Wallet',
    totalBalance: 500000,
    lockedBalance: 45000,
    availableBalance: 455000,
    totalTransactions: 128,
    exchangeVolume: '¥2.4M',
    destination: 'Japan',
    employmentStatus: 'Aktif Bekerja',
    isActivePlacement: true,
    colorGradient: 'from-[#1e0a4f] via-[#2d126b] to-[#431f99]',
  },
  {
    id: 'kr',
    countryName: 'South Korea',
    flagCode: 'KR',
    flagSymbol: '🇰🇷',
    currencyCode: 'KRW',
    currencySymbol: '₩',
    accountTitle: 'KRW Wallet',
    totalBalance: 2400000,
    lockedBalance: 200000,
    availableBalance: 2200000,
    totalTransactions: 64,
    exchangeVolume: '₩8.5M',
    destination: 'South Korea',
    employmentStatus: 'Kontrak Selesai',
    isActivePlacement: false,
    colorGradient: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
  },
  {
    id: 'tw',
    countryName: 'Taiwan',
    flagCode: 'TW',
    flagSymbol: '🇹🇼',
    currencyCode: 'TWD',
    currencySymbol: 'NT$',
    accountTitle: 'TWD Wallet',
    totalBalance: 65000,
    lockedBalance: 5000,
    availableBalance: 60000,
    totalTransactions: 42,
    exchangeVolume: 'NT$220k',
    destination: 'Taiwan',
    employmentStatus: 'Kontrak Selesai',
    isActivePlacement: false,
    colorGradient: 'from-[#0284c7] via-[#0369a1] to-[#075985]',
  },
  {
    id: 'de',
    countryName: 'Germany',
    flagCode: 'DE',
    flagSymbol: '🇩🇪',
    currencyCode: 'EUR',
    currencySymbol: '€',
    accountTitle: 'EUR Wallet',
    totalBalance: 1800,
    lockedBalance: 200,
    availableBalance: 1600,
    totalTransactions: 19,
    exchangeVolume: '€6.2k',
    destination: 'Germany',
    employmentStatus: 'Kontrak Selesai',
    isActivePlacement: false,
    colorGradient: 'from-[#854d0e] via-[#713f12] to-[#451a03]',
  },
];

// Initial Recent Transactions
const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    title: 'Monthly Salary - June',
    date: 'Jun 24, 2024 • 09:12 AM',
    category: 'Salary',
    currency: 'JPY',
    amount: 320000,
    formattedAmount: '+ 320,000',
    status: 'Completed',
    icon: 'work',
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    iconColor: 'text-indigo-600 dark:text-indigo-300',
  },
  {
    id: 'tx-2',
    title: 'Currency Exchange',
    date: 'Jun 22, 2024 • 14:45 PM',
    category: 'Exchange',
    currency: 'JPY → IDR',
    amount: -50000,
    formattedAmount: '- 50,000',
    status: 'Completed',
    icon: 'currency_exchange',
    iconBg: 'bg-purple-50 dark:bg-purple-950/60',
    iconColor: 'text-purple-600 dark:text-purple-300',
  },
  {
    id: 'tx-3',
    title: 'External Withdrawal to BCA',
    date: 'Jun 20, 2024 • 11:20 AM',
    category: 'Withdrawal',
    currency: 'IDR',
    amount: -5500000,
    formattedAmount: '- 5,500,000',
    status: 'Pending',
    icon: 'outbox',
    iconBg: 'bg-slate-100 dark:bg-slate-800',
    iconColor: 'text-slate-600 dark:text-slate-400',
  },
];

export default function UserWalletPage() {
  const [accounts, setAccounts] = useState<CountryAccount[]>(INITIAL_ACCOUNTS);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('jp');
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState<boolean>(false);
  const [isOfflineWithdrawModalOpen, setIsOfflineWithdrawModalOpen] = useState<boolean>(false);

  const activeAccount = accounts.find((a) => a.id === selectedAccountId) || accounts[0];

  // Handle Withdrawal Submission
  const handleWithdrawSubmit = (payload: WithdrawPayload) => {
    // 1. Deduct from available & total balance
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === payload.countryId) {
          const newAvail = Math.max(0, acc.availableBalance - payload.amount);
          return {
            ...acc,
            availableBalance: newAvail,
            totalBalance: acc.lockedBalance + newAvail,
            totalTransactions: acc.totalTransactions + 1,
          };
        }
        return acc;
      })
    );

    // 2. Add new transaction to recent activity table
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      title: `Withdrawal to ${payload.bankName}`,
      date: 'Just Now',
      category: 'Withdrawal',
      currency: payload.currencyCode,
      amount: -payload.amount,
      formattedAmount: `- ${payload.amount.toLocaleString('id-ID')}`,
      status: 'Pending',
      icon: 'payments',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60',
      iconColor: 'text-emerald-600 dark:text-emerald-300',
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle Exchange Success callback (Balance transfer between wallets)
  const handleExchangeSuccess = (
    fromAccount: CountryAccount,
    toAccount: CountryAccount,
    fromAmt: number,
    toAmt: number
  ) => {
    // 1. Deduct from source wallet & Add to target wallet
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === fromAccount.id) {
          const newAvail = Math.max(0, acc.availableBalance - fromAmt);
          return {
            ...acc,
            availableBalance: newAvail,
            totalBalance: acc.lockedBalance + newAvail,
            totalTransactions: acc.totalTransactions + 1,
          };
        }
        if (acc.id === toAccount.id) {
          const newAvail = acc.availableBalance + toAmt;
          return {
            ...acc,
            availableBalance: newAvail,
            totalBalance: acc.lockedBalance + newAvail,
            totalTransactions: acc.totalTransactions + 1,
          };
        }
        return acc;
      })
    );

    // 2. Add transaction history record
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      title: `Exchange ${fromAccount.currencyCode} ke ${toAccount.currencyCode}`,
      date: 'Baru Saja',
      category: 'Exchange',
      currency: `${fromAccount.currencyCode} → ${toAccount.currencyCode}`,
      amount: -fromAmt,
      formattedAmount: `- ${fromAmt.toLocaleString('id-ID')} ${fromAccount.currencyCode}`,
      status: 'Completed',
      icon: 'currency_exchange',
      iconBg: 'bg-purple-50 dark:bg-purple-950/60',
      iconColor: 'text-purple-600 dark:text-purple-300',
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  // Handle Offline Withdrawal Submission
  const handleOfflineWithdrawSubmit = (
    account: CountryAccount,
    amount: number,
  ) => {
    // 1. Deduct from available & total balance
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === account.id) {
          const newAvail = Math.max(0, acc.availableBalance - amount);
          return {
            ...acc,
            availableBalance: newAvail,
            totalBalance: acc.lockedBalance + newAvail,
            totalTransactions: acc.totalTransactions + 1,
          };
        }
        return acc;
      })
    );

    // 2. Add transaction history record
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      title: `Penarikan Offline - Kantor Vallas (${account.countryName})`,
      date: 'Baru Saja',
      category: 'Withdrawal',
      currency: account.currencyCode,
      amount: -amount,
      formattedAmount: `- ${amount.toLocaleString('id-ID')} ${account.currencyCode}`,
      status: 'Pending',
      icon: 'storefront',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <div className="space-y-8">
      <UserHeader
        userName="Adrian"
        avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDolXBatDsRXnGOsW0IC3QaLo2SLJx1BoYwjEw9YnT8PuMBPJf9NEwXi8hJmIf96lDYPe2MgOTYFhx-Z2oynkgjZ5AhPAnk6VLo5MPvop_XK0vJOoBCNI1VySdWUpMIZSX7wVpywvqkFcCDgdxQ8IlDMFDw_NjDkwzWqDxrS0iVEs5GaFL8eOI7pygIMez8cYQkC5hZNv-4fSbXpJV03iTtfL4AzEJEvmQ7bKRKrHLbNMTetCiGUPPLICiGq9DNKmWqzM-_Ckz6uPF9"
        progressPercentage={65}
        highlightCountry={activeAccount.countryName}
      />

      <WalletCountrySwitcher
        accounts={accounts}
        selectedAccountId={selectedAccountId}
        onSelectAccount={(acc) => setSelectedAccountId(acc.id)}
      />

      <WalletHeroSection account={activeAccount} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CurrencyExchangeCard
          activeAccount={activeAccount}
          accounts={accounts}
          onSelectAccount={(acc) => setSelectedAccountId(acc.id)}
          onExchangeSuccess={handleExchangeSuccess}
        />

        <div className="grid grid-cols-1 gap-6">
          <WalletProfileBreakdown
            account={activeAccount}
            onOpenWithdrawModal={() => setIsWithdrawModalOpen(true)}
            onOpenOfflineWithdrawModal={() => setIsOfflineWithdrawModalOpen(true)}
          />
          {/* <EcosystemConnectivityCard /> */}
        </div>
      </section>

      <WalletRecentActivity transactions={transactions} />

      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        account={activeAccount}
        onSubmitWithdraw={handleWithdrawSubmit}
      />

      <OfflineWithdrawModal
        isOpen={isOfflineWithdrawModalOpen}
        onClose={() => setIsOfflineWithdrawModalOpen(false)}
        accounts={accounts}
        activeAccount={activeAccount}
        onSubmitOfflineWithdraw={handleOfflineWithdrawSubmit}
      />
    </div>
  );
}
