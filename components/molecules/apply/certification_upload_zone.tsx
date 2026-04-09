'use client';

import { useState, useRef } from 'react';
import { Icon } from '../../atoms/icon';

interface Certificate {
  id: string;
  name: string;
  type: string;
}

export function CertificationUploadZone() {
  const [certs, setCerts] = useState<Certificate[]>([
    { id: '1', name: 'Barista Level 1', type: 'upload' },
    { id: '2', name: 'Latihan Keselamatan Dasar', type: 'upload' }
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Mimic extracting a short name from the uploaded file
      const shortName = file.name.split('.')[0].substring(0, 20) + (file.name.length > 20 ? '...' : '');
      
      setCerts(prev => [...prev, { 
        id: Date.now().toString(), 
        name: shortName, 
        type: 'new' 
      }]);
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeCert = (id: string) => {
    setCerts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="md:col-span-6 bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 hover:shadow-md transition-all flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-tertiary/5 rounded-2xl text-tertiary shrink-0">
            <Icon name="school" className="text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold">Sertifikasi</h3>
            <p className="text-sm text-on-surface-variant">Sertifikat pelatihan, penanganan makanan, dll.</p>
          </div>
        </div>
        <div className="flex -space-x-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-tertiary-container text-white flex items-center justify-center text-xs font-bold border-2 border-white">
            {certs.length}
          </div>
        </div>
      </div>
      
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleFileChange}
        accept=".pdf,.jpg,.png"
      />
      
      <div className="flex gap-3 mt-auto overflow-x-auto pb-2 scrollbar-hide pt-2">
        {certs.map(cert => (
          <div key={cert.id} className="relative min-w-[140px] flex-shrink-0 p-3 bg-surface rounded-xl border border-outline-variant/20 flex flex-col items-center group">
            <button 
              onClick={() => removeCert(cert.id)}
              className="absolute -top-2 -right-2 bg-error text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              title="Hapus"
            >
              <Icon name="close" className="text-[10px]" />
            </button>
            <Icon name="workspace_premium" className="text-tertiary mb-2 text-2xl" />
            <p className="text-[10px] font-bold text-center leading-tight">{cert.name}</p>
          </div>
        ))}
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="min-w-[100px] flex-shrink-0 border-2 border-dashed border-outline-variant/30 rounded-xl flex items-center justify-center text-on-surface-variant hover:border-tertiary/50 hover:text-tertiary transition-all h-auto py-4 bg-transparent cursor-pointer"
        >
          <Icon name="add_circle" />
        </button>
      </div>
    </div>
  );
}
