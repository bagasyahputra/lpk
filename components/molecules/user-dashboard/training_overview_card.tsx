import { Icon } from '../../atoms/icon';

export function TrainingOverviewCard() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-teal-50 text-tertiary rounded-lg flex items-center justify-center">
          <Icon name="menu_book" filled />
        </div>
        <span className="text-xs font-medium text-on-tertiary-container">2 dari 5 modul</span>
      </div>
      
      <h3 className="font-manrope font-bold text-lg mb-2">Bahasa Jepang N4</h3>
      <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-tertiary rounded-full shadow-[0_0_8px_rgba(0,49,44,0.3)]" style={{ width: '40%' }}></div>
      </div>
      <p className="text-xs text-on-surface-variant">
        Saat ini: <span className="font-bold text-on-surface">Tata Bahasa & Partikel</span>
      </p>
      
      <button className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
        Lanjutkan Belajar <Icon name="arrow_forward" className="text-sm" />
      </button>
    </div>
  );
}
