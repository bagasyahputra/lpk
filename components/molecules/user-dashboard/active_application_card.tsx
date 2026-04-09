import { Icon } from '../../atoms/icon';

export function ActiveApplicationCard() {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-secondary flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-purple-50 text-secondary rounded-lg flex items-center justify-center">
          <Icon name="location_on" filled />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-tighter text-secondary px-2 py-1 bg-secondary-fixed rounded-md">
          Jadwal Wawancara
        </span>
      </div>
      
      <h3 className="font-manrope font-bold text-lg mb-1">Staf Hospitalitas</h3>
      <p className="text-sm text-on-surface-variant mb-4">Osaka, Jepang • $2,400/bln</p>
      
      <div className="bg-surface-container-low p-3 rounded-lg mt-auto">
        <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Langkah Berikutnya</p>
        <p className="text-xs font-semibold">Video Wawancara: 15 Maret, 10:00 Pagi</p>
      </div>
    </div>
  );
}
