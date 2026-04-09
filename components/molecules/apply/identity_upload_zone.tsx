"use client";

import { useState, useRef } from "react";
import { Icon } from "../../atoms/icon";

export function IdentityUploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 group hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/5 rounded-2xl text-primary shrink-0">
            <Icon name="badge" className="text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold">KTP / Paspor</h3>
            <p className="text-sm text-on-surface-variant">
              Sisi depan dan halaman biodata terlihat jelas.
            </p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 ${file ? "bg-primary-container text-on-primary-container" : "bg-surface-variant text-on-surface-variant"}`}
        >
          {file ? "Terunggah" : "Tertunda"}
        </span>
      </div>

      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.pdf"
      />

      <div
        onClick={() => !file && fileInputRef.current?.click()}
        className={`border-2 rounded-xl p-12 flex flex-col items-center justify-center transition-colors ${
          file
            ? "border-primary/30 bg-primary/5"
            : "border-dashed border-outline-variant/30 bg-surface-container-low/30 hover:bg-surface-container-low cursor-pointer group-hover:border-primary/50"
        }`}
      >
        {file ? (
          <div className="flex flex-col items-center text-center">
            <Icon
              name="check_circle"
              className="text-5xl text-primary mb-4"
              filled
            />
            <p className="text-on-surface font-semibold mb-1 truncate max-w-xs">
              {file.name}
            </p>
            <p className="text-xs text-on-surface-variant mb-4">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <button
              onClick={clearFile}
              className="px-4 py-2 bg-error-container text-on-error-container rounded-lg text-sm font-bold hover:bg-error hover:text-white transition-colors"
            >
              Hapus File
            </button>
          </div>
        ) : (
          <>
            <Icon
              name="cloud_upload"
              className="text-5xl text-outline-variant mb-4 group-hover:text-primary transition-colors"
            />
            <p className="text-on-surface font-semibold mb-1">
              Klik atau seret untuk mengunggah
            </p>
            <p className="text-xs text-on-surface-variant">
              JPG, PNG, atau PDF (Maks 5MB)
            </p>
          </>
        )}
      </div>
    </div>
  );
}
