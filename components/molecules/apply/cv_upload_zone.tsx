'use client';

import { useState, useRef } from 'react';
import { Icon } from '../../atoms/icon';

export function CvUploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="md:col-span-6 bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 hover:shadow-md transition-all flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-secondary/5 rounded-2xl text-secondary shrink-0">
            <Icon name="description" className="text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold">Curriculum Vitae</h3>
            <p className="text-sm text-on-surface-variant">Lebih disukai CV yang difokuskan pada hospitalitas.</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 ${file ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'}`}>
          {file ? 'Terunggah' : 'Tertunda'}
        </span>
      </div>
      
      <input 
        type="file" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
      />

      <div className="mt-auto">
        {file ? (
          <div className="bg-surface-container p-4 rounded-xl flex items-center justify-between border border-secondary/20">
            <div className="flex items-center gap-3 overflow-hidden mr-4">
              <Icon name="picture_as_pdf" className="text-secondary text-2xl shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-on-surface truncate">{file.name}</p>
                <p className="text-[10px] text-on-surface-variant uppercase mt-0.5">Baru Saja Diunggah</p>
              </div>
            </div>
            <button 
              onClick={removeFile}
              className="text-on-surface-variant hover:text-error transition-colors p-2 shrink-0 bg-surface rounded-lg"
            >
              <Icon name="delete" />
            </button>
          </div>
        ) : (
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 border-2 border-dashed border-outline-variant/30 rounded-xl flex items-center justify-center gap-2 text-secondary font-bold hover:bg-secondary/5 hover:border-secondary/30 transition-colors"
          >
            <Icon name="upload" />
            Unggah CV Anda
          </button>
        )}
      </div>
    </div>
  );
}
