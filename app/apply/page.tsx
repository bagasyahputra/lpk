import { TopNavBar } from "../../components/organisms/top_nav_bar";
import { Footer } from "../../components/organisms/footer";
import { ApplyProgressTracker } from "../../components/organisms/apply/apply_progress_tracker";
import { UploadBentoGrid } from "../../components/organisms/apply/upload_bento_grid";
import { Icon } from "../../components/atoms/icon";

export default function ApplyPage() {
  return (
    <>
      <TopNavBar showSearch={false} />

      <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl mt-24">
        <ApplyProgressTracker />

        <UploadBentoGrid />

        {/* Action Button */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-sm max-w-md text-center md:text-left">
            Dengan mengklik <strong>Daftar Sekarang</strong>, Anda mengonfirmasi
            bahwa dokumen yang diberikan adalah otentik dan milik Anda.
          </p>
          <button className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
            Daftar Sekarang
            <Icon name="arrow_forward" />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
