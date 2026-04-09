import { Icon } from '../../atoms/icon';

export function LpkTrainingInfo() {
  return (
    <div className="bg-blue-50 dark:bg-slate-900 p-8 rounded-2xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
          <Icon name="verified" className="text-3xl" />
        </div>
        <div>
          <h3 className="font-bold text-primary">Akademi LPK InginKerja</h3>
          <p className="text-xs text-blue-800/70 font-semibold uppercase">Mitra Pelatihan Resmi</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-white/80 rounded-xl border border-blue-100">
          <h4 className="font-bold text-sm text-primary mb-1">Program Intensif N4</h4>
          <p className="text-xs text-on-surface-variant">
            Pemerolehan bahasa cepat selama 3 bulan dan pelatihan etiket budaya.
          </p>
          <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-secondary uppercase">
            <Icon name="local_fire_department" className="text-xs" />
            Paling Direkomendasikan
          </div>
        </div>
        
        <div className="p-4 bg-white/80 rounded-xl border border-blue-100">
          <h4 className="font-bold text-sm text-primary mb-1">Hospitality Pro Pack</h4>
          <p className="text-xs text-on-surface-variant">
            Standar sertifikasi global untuk manajemen resor mewah.
          </p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-blue-200">
        <a className="text-sm font-bold text-primary flex items-center justify-between group" href="#">
          Lihat Jalur Pelatihan
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
