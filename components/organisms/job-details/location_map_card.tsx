import { Icon } from '../../atoms/icon';

export function LocationMapCard() {
  return (
    <div className="rounded-2xl overflow-hidden h-48 bg-surface-container-high relative mt-8">
      <div className="absolute inset-0 bg-slate-300 opacity-20 pointer-events-none"></div>
      
      <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center z-10">
        <Icon name="map" className="text-primary text-4xl mb-2" />
        <p className="font-bold text-primary">Prefektur Kyoto</p>
        <p className="text-xs text-on-surface-variant">Hoshinoya Kyoto, Arashiyama</p>
        <button className="mt-3 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-primary shadow-sm hover:bg-slate-50 transition-colors">
          Jelajahi Lingkungan
        </button>
      </div>
      
      <img 
        className="w-full h-full object-cover opacity-30 grayscale" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJeazvUgC8ai7MLtgVfH0RYtfdzkhvfJb3752UJ0H2alRXCilMbe3ni4q7hEV4g-z4bHGvVays73Gglp74-a9w_5zzprDOlvStbCl7GKcDjNeXGqZwGFATs3WNyxy5Pxx05DtNN1xIlyOKN3tVNjVXP22d2TnVl67hywBDG7xi4NVkx9fz7AwlI9h3gfVbJ-sIOpK9u6a-2IUZThQDABrg1xxVg8sqr-PMHdEqAO1NUPGf415h4Vq-nsx9aN-m7sAGI_C-ZWE1bUq"
        alt="Kyoto Map"
      />
    </div>
  );
}
