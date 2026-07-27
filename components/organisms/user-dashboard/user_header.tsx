'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '../../atoms/icon';

interface UserHeaderProps {
  userName: string;
  avatarSrc: string;
  progressPercentage: number;
  highlightCountry: string;
}

export function UserHeader({ userName, avatarSrc, progressPercentage, highlightCountry }: UserHeaderProps) {
  const pathname = usePathname();
  const isWalletActive = pathname?.startsWith('/user-dashboard/wallet');

  return (
    <header className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
      <div>
        <h2 className="text-4xl lg:text-[44px] font-manrope font-extrabold tracking-tight text-primary mb-2 leading-tight">
          Selamat datang kembali, {userName}
        </h2>
        <p className="text-on-surface-variant font-medium text-lg">
          Perjalanan Anda ke <span className="text-secondary font-bold">{highlightCountry}</span> sudah <span className="font-bold text-primary">{progressPercentage}%</span> selesai.
        </p>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
        <Link 
          href="/user-dashboard/wallet"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-manrope font-bold text-sm transition-all shadow-sm ${
            isWalletActive 
              ? 'bg-secondary text-white shadow-purple-500/20 shadow-md ring-2 ring-purple-400/30' 
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
          }`}
        >
          <Icon name="account_balance_wallet" filled={isWalletActive} className="text-lg" />
          <span>Wallet</span>
        </Link>

        <button className="h-10 w-10 flex justify-center items-center rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 transition-colors shadow-sm">
          <Icon name="notifications" />
        </button>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0">
          <img 
            alt={`Avatar of ${userName}`} 
            src={avatarSrc} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
}
