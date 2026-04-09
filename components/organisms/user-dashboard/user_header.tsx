import { Icon } from '../../atoms/icon';

interface UserHeaderProps {
  userName: string;
  avatarSrc: string;
  progressPercentage: number;
  highlightCountry: string;
}

export function UserHeader({ userName, avatarSrc, progressPercentage, highlightCountry }: UserHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
      <div>
        <h2 className="text-4xl lg:text-[44px] font-manrope font-extrabold tracking-tight text-primary mb-2 leading-tight">
          Selamat datang kembali, {userName}
        </h2>
        <p className="text-on-surface-variant font-medium text-lg">
          Perjalanan Anda ke <span className="text-secondary font-bold">{highlightCountry}</span> sudah <span className="font-bold text-primary">{progressPercentage}%</span> selesai.
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
          <Icon name="notifications" />
        </button>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
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
