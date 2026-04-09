import { Icon } from '../atoms/icon';

export function PromoCard() {
  return (
    <div className="relative overflow-hidden bg-primary-container rounded-3xl p-6 text-on-primary shadow-xl">
      <div className="relative z-10">
        <h4 className="font-headline font-extrabold text-xl mb-2">Tingkatkan ke Pro</h4>
        <p className="text-sm text-blue-200 mb-4 leading-relaxed">Dapatkan prioritas pemrosesan visa dan modul pelatihan premium.</p>
        <button className="w-full bg-surface-bright text-primary font-bold py-3 rounded-xl hover:bg-white transition-colors">
          Tingkatkan Sekarang
        </button>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10 scale-150">
        <Icon name="stars" filled className="text-9xl" />
      </div>
    </div>
  );
}
