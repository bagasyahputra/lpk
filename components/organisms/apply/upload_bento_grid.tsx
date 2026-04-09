import { Icon } from "../../atoms/icon";
import { IdentityUploadZone } from "../../molecules/apply/identity_upload_zone";
import { CvUploadZone } from "../../molecules/apply/cv_upload_zone";
import { CertificationUploadZone } from "../../molecules/apply/certification_upload_zone";

export function UploadBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Interactive Identity Upload Section */}
      <IdentityUploadZone />

      {/* Profile Completion Card (Side) */}
      <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container p-8 rounded-lg text-white flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-headline font-bold mb-2">
            Verifikasi Aman
          </h3>
          <p className="text-blue-100 text-sm leading-relaxed">
            Data Anda dienkripsi dan dilindungi dengan standar keamanan tinggi.
            Hanya mitra LPK terverifikasi yang dapat mengakses dokumen ini
            setelah Anda melamar.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/10 p-3 rounded-xl backdrop-blur-sm w-fit">
          <Icon name="verified_user" filled className="text-sm" />
          Enkripsi End-to-End
        </div>
      </div>

      {/* Interactive CV Upload Section */}
      <CvUploadZone />

      {/* Interactive Certifications Upload Section */}
      <CertificationUploadZone />
    </div>
  );
}
