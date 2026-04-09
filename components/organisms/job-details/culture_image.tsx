export function CultureImage() {
  return (
    <div className="rounded-2xl overflow-hidden h-64 w-full relative">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx9TdptyyGt6bBivJ_ii1Mj7JOpfbX3_k0uk16Qa6HZ2ywjDwmdywPwGycM1RwB3vUy16ZtoWhZzJL5vQaA5eIfBrpaZMaHJSgnLQ9K6uBTrLKQ5ZR1pqkcnXeFTUPqfgCdg050_2Sqv23-2dhma1GAdoHh4DNilxiSrIsvN-GrlOYQA9NSX5tYCTxNUO3urf1IBeLZrVgvfCCN9HFrFJ7mSPJbpu8EVXrlrZSybru0KI4ow6IWtgLGglJ3Nx249dt-ZxIjL01ACFS"
        alt="Kyoto view"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
        <p className="text-white font-medium italic">
          "Kantor Anda terletak di jantung ibu kota budaya Jepang."
        </p>
      </div>
    </div>
  );
}
