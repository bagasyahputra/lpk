import { Icon } from "../../atoms/icon";

export function ApplyProgressTracker() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-2">
            Verifikasi Dokumen
          </h1>
          <p className="text-on-surface-variant font-body">
            Unggah kredensial Anda dengan aman untuk membuka peluang
            hospitalitas internasional.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="bg-secondary-container text-white px-4 py-2 rounded-full text-sm font-semibold">
            Progres Verifikasi: 70%
          </span>
        </div>
      </div>

      {/* Sophisticated Progress Roadmap */}
      <div className="relative w-full h-1.5 bg-surface-container-high rounded-full flex items-center justify-between px-2">
        <div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-primary to-primary-container rounded-full"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center group">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] z-10">
            <Icon name="check" className="text-sm" filled />
          </div>
          <span className="absolute top-8 text-xs font-bold text-primary whitespace-nowrap">
            Info Profil
          </span>
        </div>
        <div className="relative flex flex-col items-center group">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px] z-10">
            <Icon name="check" className="text-sm" filled />
          </div>
          <span className="absolute top-8 text-xs font-bold text-primary whitespace-nowrap">
            Seleksi LPK
          </span>
        </div>

        <div className="relative flex flex-col items-center group">
          <div className="w-8 h-8 rounded-full bg-surface-container-lowest border-2 border-primary shadow-lg flex items-center justify-center text-primary z-10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
          <span className="absolute top-10 text-xs font-bold text-on-surface whitespace-nowrap">
            Dokumen
          </span>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center group">
          <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant z-10"></div>
          <span className="absolute top-8 text-xs font-medium text-on-surface-variant whitespace-nowrap">
            Interview
          </span>
        </div>
      </div>
    </section>
  );
}
