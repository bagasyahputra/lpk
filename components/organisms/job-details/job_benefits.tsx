import { Icon } from "../../atoms/icon";

export function JobBenefits() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-primary">
          Manfaat & Penghargaan
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-on-surface-variant">
            <Icon name="check_circle" filled className="text-green-600" />
            Gaji Kyoto yang Kompetitif (Rp12.000.000 - Rp15.000.000/bln)
          </li>
          <li className="flex items-center gap-3 text-on-surface-variant">
            <Icon name="check_circle" filled className="text-green-600" />
            Subsidi Perumahan Premium (Ditanggung 80%)
          </li>
          <li className="flex items-center gap-3 text-on-surface-variant">
            <Icon name="check_circle" filled className="text-green-600" />
            Pendaftaran Kesehatan & Pensiun Nasional
          </li>
          <li className="flex items-center gap-3 text-on-surface-variant">
            <Icon name="check_circle" filled className="text-green-600" />
            Penggantian Penerbangan Pulang Pergi Dua Tahunan
          </li>
        </ul>
      </div>

      <div className="bg-tertiary-container text-on-surface-variant p-6 rounded-xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-2">Kehidupan di Kyoto</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Rasakan kota tempat kuil kuno bertemu dengan inovasi modern. Peran
            Anda menawarkan pertukaran budaya yang mendalam dan gaya hidup
            berkualitas tinggi yang aman.
          </p>
        </div>
        <Icon
          name="temple_buddhist"
          className="absolute -bottom-6 -right-6 text-9xl opacity-10"
        />
      </div>
    </section>
  );
}
