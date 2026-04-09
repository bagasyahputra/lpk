import Link from "next/link";
import { Icon } from "../../atoms/icon";

export function StickyActionCard() {
  return (
    <div className="space-y-6">
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-surface-variant/50">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2 block">
            Salary
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-primary">
              Rp12.000.000
            </span>
            <span className="text-on-surface-variant">/bulan</span>
          </div>
        </div>

        <div className="space-y-3">
          <Link href="/apply" className="block cursor-pointer">
            <button className="w-full cursor-pointer py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-container/20 transition-all scale-95 active:scale-90 flex items-center justify-center gap-2">
              <Icon name="send" />
              Lamar Sekarang
            </button>
          </Link>

          {/* <button className="w-full py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-secondary/20 transition-all scale-95 active:scale-90 flex items-center justify-center gap-2">
            <Icon name="model_training" />
            Mulai Program Pelatihan
          </button> */}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-4 font-medium">
          94 pelamar sudah dalam antrean
        </p>
      </div>
    </div>
  );
}
