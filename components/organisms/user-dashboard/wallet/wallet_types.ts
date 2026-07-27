export interface CountryAccount {
  id: string;
  countryName: string;
  flagCode: string;
  flagSymbol: string;
  currencyCode: string;
  currencySymbol: string;
  accountTitle: string;
  totalBalance: number;
  lockedBalance: number;
  availableBalance: number;
  totalTransactions: number;
  exchangeVolume: string;
  destination: string;
  employmentStatus: 'Aktif Bekerja' | 'Kontrak Selesai';
  isActivePlacement: boolean;
  colorGradient: string;
}

export interface CurrencyOption {
  code: string;
  name: string;
  country: string;
  flag: string;
  symbol: string;
}

export interface Transaction {
  id: string;
  title: string;
  date: string;
  category: 'Salary' | 'Exchange' | 'Withdrawal' | 'Refund' | 'Bonus';
  currency: string;
  amount: number;
  formattedAmount: string;
  status: 'Completed' | 'Pending' | 'Failed';
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface WithdrawPayload {
  countryId: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  amount: number;
  currencyCode: string;
  calculatedIdr: number;
}
