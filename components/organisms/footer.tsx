import { Icon } from "../atoms/icon";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t-0 tonal-shift bg-slate-100 dark:bg-slate-900 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-0">
          <span className="font-bold text-slate-900 dark:text-white text-xl font-manrope">
            InginKerja
          </span>
          <p className="text-slate-500 font-manrope text-xs uppercase tracking-widest mt-2">
            © 2026 InginKerja. Menyusun Masa Depan Global.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-slate-500 font-manrope text-xs uppercase tracking-widest hover:underline transition-all"
            href="#"
          >
            Kebijakan Privasi
          </a>
          <a
            className="text-slate-500 font-manrope text-xs uppercase tracking-widest hover:underline transition-all"
            href="#"
          >
            Ketentuan Layanan
          </a>
          <a
            className="text-slate-500 font-manrope text-xs uppercase tracking-widest hover:underline transition-all"
            href="#"
          >
            Kontak
          </a>
          <a
            className="text-slate-500 font-manrope text-xs uppercase tracking-widest hover:underline transition-all"
            href="#"
          >
            Karir
          </a>
        </div>
      </div>
    </footer>
  );
}
