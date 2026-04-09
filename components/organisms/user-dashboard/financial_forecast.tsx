import { Icon } from "../../atoms/icon";

export function FinancialForecast() {
  return (
    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="font-manrope text-2xl font-extrabold text-primary">
            Keuangan Anda
          </h3>
          <p className="text-on-surface-variant">
            Ringkasan uang masuk & penggunaan bulan ini
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* REAL INCOME */}
        <div>
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                Bulan Ini
              </p>
              <p className="text-lg font-bold">Total Penghasilan</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary">
                Rp 34.500.000
                <span className="text-xs font-normal text-on-surface-variant">
                  {" "}
                  /bln
                </span>
              </p>
              <p className="text-xs font-medium text-green-600">
                Termasuk bonus & lembur Rp 2.100.000
              </p>
            </div>
          </div>

          {/* Bar */}
          <div className="relative h-12 w-full bg-surface-container-low rounded-xl overflow-hidden flex">
            <div
              className="h-full bg-primary flex items-center px-4"
              style={{ width: "60%" }}
            >
              <span className="text-[10px] text-white font-bold truncate">
                💰 TERSISA Rp 20.700.000
              </span>
            </div>
            <div
              className="h-full bg-secondary-fixed-dim border-l-2 border-white/20 flex items-center px-4"
              style={{ width: "40%" }}
            >
              <span className="text-[10px] text-on-secondary-fixed font-bold truncate">
                💸 DIPAKAI Rp 13.800.000
              </span>
            </div>
          </div>

          {/* Kurs Info */}
          <p className="text-xs text-on-surface-variant mt-2">
            Kurs saat ini: ¥1 = Rp 105 • Update otomatis
          </p>
        </div>

        {/* HISTORY GAJI */}
        <div>
          <p className="text-sm font-bold mb-3 text-primary">
            Riwayat Penghasilan
          </p>

          <div className="space-y-2">
            {[
              { bulan: "Februari", gaji: "Rp 31.800.000" },
              { bulan: "Maret", gaji: "Rp 32.100.000" },
              { bulan: "April", gaji: "Rp 34.500.000" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm bg-surface-container-low px-4 py-2 rounded-lg"
              >
                <span className="text-on-surface-variant">{item.bulan}</span>
                <span className="font-bold text-primary">{item.gaji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INSIGHT */}
      <div className="mt-10 p-6 bg-surface-container-low rounded-2xl flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/40 to-white/10 border border-white/40 shadow shadow-black/5 flex items-center justify-center text-primary shrink-0">
          <Icon name="trending_up" className="text-3xl" />
        </div>
        <div>
          <p className="font-manrope font-bold text-lg text-primary">
            Anda Menyisihkan Lebih Banyak Bulan Ini
          </p>
          <p className="text-sm text-on-surface-variant mt-1">
            60% dari penghasilan Anda berhasil disimpan. Ini sangat baik untuk
            mempercepat target finansial Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
