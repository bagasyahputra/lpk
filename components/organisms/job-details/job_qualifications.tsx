import { Icon } from "../../atoms/icon";

export function JobQualifications() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
        <span className="w-8 h-1 bg-secondary rounded-full"></span>
        Kualifikasi Utama
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
              <Icon name="translate" />
            </div>
            <h3 className="font-bold text-primary">Penguasaan Bahasa</h3>
          </div>
          <p className="text-sm text-on-surface-variant">
            Ujian Kemampuan Bahasa Jepang (JLPT) <strong>Tingkat N4</strong>{" "}
            atau lebih tinggi diwajibkan untuk keselamatan operasional dan
            komunikasi.
          </p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center text-white">
              <Icon name="school" />
            </div>
            <h3 className="font-bold text-secondary">Sertifikasi</h3>
          </div>
          <p className="text-sm text-on-surface-variant">
            <strong>Sertifikasi Hospitalitas</strong> Global atau gelar dalam
            Manajemen Pariwisata dari institusi yang diakui.
          </p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-tertiary-container rounded-lg flex items-center justify-center text-tertiary-fixed">
              <Icon name="history_edu" />
            </div>
            <h3 className="font-bold text-tertiary">Kompetensi Budaya</h3>
          </div>
          <p className="text-sm text-on-surface-variant">
            Pengalaman yang terbukti dalam lingkungan layanan kelas atas.
            Pemahaman tentang etiket dan protokol bisnis Jepang.
          </p>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-outline">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-outline rounded-lg flex items-center justify-center text-white">
              <Icon name="badge" />
            </div>
            <h3 className="font-bold text-on-surface">Pengalaman</h3>
          </div>
          <p className="text-sm text-on-surface-variant">
            Minimal 3 tahun dalam peran yang berhadapan langsung dengan tamu di
            sektor hospitalitas bintang 4 atau bintang 5.
          </p>
        </div>
      </div>
    </section>
  );
}
