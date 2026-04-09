import { Icon } from '../atoms/icon';

export function TrainingPromoCard() {
  return (
    <div className="bg-secondary rounded-[2rem] p-8 text-on-secondary flex flex-col justify-between relative overflow-hidden group">
      <div className="relative z-10">
        <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Direkomendasikan untuk Anda
        </span>
        <h3 className="text-2xl font-headline font-extrabold leading-tight mb-4">
          Esensi Bahasa & Hospitalitas Jepang
        </h3>
        <p className="text-sm text-secondary-fixed/80 max-w-[200px] mb-6">
          Kuasai standar layanan Omotenashi sebelum Anda tiba.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img 
              alt="Kandidat" 
              className="h-8 w-8 rounded-full border-2 border-secondary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynlKeLmwvvL_uToC2uT-2g_3jL9i4tckR4Vvg5ZFq0EFJQMNeydUZneisVOufqSPtctz52vrY3Z5XUorXRYiFGHbiLHp8W8OWJJL-llaOxjz4Eqhyk2MQCdZi3pzDe6CSGXSt43pSLsCchgsohuXv2Ssp8AvN_0fJG5JJaWaiQR2uaEdi0LqkEMe7r2MgovLjKVNSv_oc7zl1Rrh3FAelV9NUGLSoWTIhgpc62oCkgAHChlw2sm-kPtF-N1OlnT6M6K1aZxPMuQJA"
            />
            <img 
              alt="Kandidat" 
              className="h-8 w-8 rounded-full border-2 border-secondary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGuYGCynbnSwyneqjcbFDkhX1qDrtNsYS8svmNYftcJ12BRxFboRq_g7qUiJqi-YwDjmSOioZ0doedB9Vs8_AI5MPZMYDsoRZsSRRY3CvyO0-YWbJb3PET9B_NSDcJaLtdXxKKwJ5PAfu8OV-JxWo2wPmPV9csm638OQjkUpod5owx6-sZgqMS87zLud9n0TzWiztSVRAf2Og3DJCQW-_LiPLWxMJ68YEeX2WGhK-KEBk7_XHZdp5huOrIq18JzxeLWtUPfyc61cLM"
            />
            <div className="h-8 w-8 rounded-full bg-secondary-container border-2 border-secondary flex items-center justify-center text-[10px] font-bold">
              +12
            </div>
          </div>
          <span className="text-xs font-bold">Diikuti oleh kandidat lokal</span>
        </div>
      </div>
      
      <button className="relative z-10 mt-8 bg-white text-secondary font-black py-3 rounded-xl hover:bg-secondary-fixed transition-colors">
        Mulai Belajar
      </button>
      
      <div className="absolute -right-12 -top-12 opacity-20 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
        <Icon name="school" filled className="text-[180px]" />
      </div>
    </div>
  );
}
