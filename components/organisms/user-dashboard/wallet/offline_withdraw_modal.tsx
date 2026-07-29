'use client';

import React, { useState } from 'react';
import { Icon } from '../../../atoms/icon';
import { CountryAccount } from './wallet_types';

// Vallas Office data per country
interface VallasOffice {
  countryId: string;
  officeName: string;
  address: string;
  city: string;
  phone: string;
  operatingHours: string;
  googleMapsUrl: string;
}

const VALLAS_OFFICES: VallasOffice[] = [
  {
    countryId: 'jp',
    officeName: 'Vallas Japan Office',
    address: '〒160-0023 東京都新宿区西新宿1-26-2, Shinjuku Nomura Building 30F',
    city: 'Tokyo, Japan',
    phone: '+81 3-1234-5678',
    operatingHours: 'Senin - Jumat, 09:00 - 17:00 JST',
    googleMapsUrl: 'https://www.google.com/maps/search/Shinjuku+Nomura+Building+Tokyo',
  },
  {
    countryId: 'kr',
    officeName: 'Vallas South Korea Office',
    address: '서울특별시 강남구 테헤란로 152, Gangnam Finance Tower 18F',
    city: 'Seoul, South Korea',
    phone: '+82 2-555-1234',
    operatingHours: 'Senin - Jumat, 09:00 - 18:00 KST',
    googleMapsUrl: 'https://www.google.com/maps/search/Gangnam+Finance+Tower+Seoul',
  },
  {
    countryId: 'tw',
    officeName: 'Vallas Taiwan Office',
    address: '台北市信義區信義路五段7號, Taipei 101 Tower 35F',
    city: 'Taipei, Taiwan',
    phone: '+886 2-8101-1234',
    operatingHours: 'Senin - Jumat, 09:00 - 17:30 CST',
    googleMapsUrl: 'https://www.google.com/maps/search/Taipei+101+Tower',
  },
  {
    countryId: 'de',
    officeName: 'Vallas Germany Office',
    address: 'Friedrichstraße 76, 10117 Berlin, Germany',
    city: 'Berlin, Germany',
    phone: '+49 30-1234-5678',
    operatingHours: 'Senin - Jumat, 08:30 - 16:30 CET',
    googleMapsUrl: 'https://www.google.com/maps/search/Friedrichstraße+76+Berlin',
  },
];

// Required documents to bring for offline withdrawal
interface RequiredDocument {
  name: string;
  description: string;
  icon: string;
  mandatory: boolean;
}

const REQUIRED_DOCUMENTS: RequiredDocument[] = [
  {
    name: 'Paspor Asli',
    description: 'Paspor yang masih berlaku (ditunjukkan untuk verifikasi identitas)',
    icon: 'menu_book',
    mandatory: true,
  },
  {
    name: 'Surat Keterangan Kerja',
    description: 'Surat resmi dari perusahaan tempat bekerja yang menyatakan status kepegawaian',
    icon: 'description',
    mandatory: true,
  },
  {
    name: 'Residence Card / Kartu Izin Tinggal',
    description: 'Kartu izin tinggal yang dikeluarkan oleh negara penempatan (Zairyu Card, ARC, dll.)',
    icon: 'badge',
    mandatory: true,
  },
  {
    name: 'Fotokopi Kontrak Kerja',
    description: 'Salinan kontrak kerja yang masih berlaku',
    icon: 'handshake',
    mandatory: true,
  },
  {
    name: 'Bukti Alamat Tempat Tinggal',
    description: 'Tagihan utilitas atau surat keterangan domisili (boleh fotokopi, maks. 3 bulan terakhir)',
    icon: 'home',
    mandatory: false,
  },
  {
    name: 'Formulir Penarikan Offline',
    description: 'Akan disediakan di kantor Vallas, bisa juga diunduh di portal dan diisi terlebih dahulu',
    icon: 'edit_note',
    mandatory: false,
  },
];

interface OfflineWithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  accounts: CountryAccount[];
  activeAccount: CountryAccount;
  onSubmitOfflineWithdraw?: (
    account: CountryAccount,
    amount: number,
    office: VallasOffice
  ) => void;
}

export function OfflineWithdrawModal({
  isOpen,
  onClose,
  accounts,
  activeAccount,
  onSubmitOfflineWithdraw,
}: OfflineWithdrawModalProps) {
  // Only active placement countries can do offline withdraw
  const activePlacementAccounts = accounts.filter((acc) => acc.isActivePlacement);

  const [selectedCountryId, setSelectedCountryId] = useState<string>(
    activeAccount.isActivePlacement ? activeAccount.id : activePlacementAccounts[0]?.id || ''
  );
  const [amount, setAmount] = useState<number>(0);
  const [isConfirmStep, setIsConfirmStep] = useState(false);

  const selectedAccount =
    activePlacementAccounts.find((a) => a.id === selectedCountryId) ||
    activePlacementAccounts[0];

  const office = VALLAS_OFFICES.find((o) => o.countryId === selectedCountryId);

  const isExceedingBalance = amount > (selectedAccount?.availableBalance || 0);
  const isValidAmount = amount > 0 && !isExceedingBalance;

  const handleSubmit = () => {
    if (!isValidAmount || !selectedAccount || !office) return;
    setIsConfirmStep(true);
  };

  const handleFinalConfirm = () => {
    if (onSubmitOfflineWithdraw && selectedAccount && office) {
      onSubmitOfflineWithdraw(selectedAccount, amount, office);
    }
    setAmount(0);
    setIsConfirmStep(false);
    onClose();
  };

  const handleClose = () => {
    setAmount(0);
    setIsConfirmStep(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex justify-center items-center bg-amber-100 rounded-2xl text-amber-600">
              <Icon name="storefront" className="text-2xl" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-slate-900">
                {isConfirmStep ? 'Konfirmasi Penarikan Offline' : 'Tarik Saldo Offline'}
              </h3>
              <p className="text-slate-500 text-xs">
                {isConfirmStep
                  ? 'Periksa detail kunjungan Anda'
                  : 'Ambil dana tunai langsung di kantor Vallas'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 h-10 w-10 flex items-center justify-center rounded-full transition-colors"
          >
            <Icon name="close" className="text-xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-5">
          {isConfirmStep && selectedAccount && office ? (
            /* ========== CONFIRMATION STEP ========== */
            <>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-3">
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  Jumlah Penarikan
                </p>
                <p className="font-headline text-2xl font-black text-emerald-700">
                  {selectedAccount.currencySymbol} {amount.toLocaleString('id-ID')}{' '}
                  <span className="text-sm font-bold text-emerald-600">{selectedAccount.currencyCode}</span>
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Lokasi Pengambilan
                </p>
                <p className="font-bold text-sm text-slate-900">{office.officeName}</p>
                <p className="text-xs text-slate-600">{office.address}</p>
                <p className="text-xs text-slate-500">{office.operatingHours}</p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 space-y-2">
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                  Dokumen yang Wajib Dibawa
                </p>
                <ul className="space-y-1.5">
                  {REQUIRED_DOCUMENTS.filter((d) => d.mandatory).map((doc) => (
                    <li key={doc.name} className="flex items-center gap-2 text-xs text-slate-700">
                      <Icon name="check_circle" className="text-emerald-500 text-sm shrink-0" />
                      <span className="font-semibold">{doc.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed bg-blue-50 border border-blue-100 p-3 rounded-xl">
                Setelah pengajuan dikonfirmasi, silakan kunjungi kantor Vallas pada jam operasional dengan membawa semua dokumen yang diperlukan. Dana akan diberikan secara tunai setelah verifikasi berhasil.
              </p>
            </>
          ) : (
            /* ========== MAIN FORM ========== */
            <>
              {/* Country Selection */}
              <div>
                <label className="text-[11px] font-bold text-slate-900 uppercase block mb-2">
                  Pilih Negara Penempatan Aktif
                </label>
                {activePlacementAccounts.length === 0 ? (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <Icon name="info" className="text-slate-400 text-2xl mb-1" />
                    <p className="text-xs text-slate-500 font-medium">
                      Tidak ada penempatan aktif saat ini. Penarikan offline hanya tersedia di negara tempat Anda sedang aktif bekerja.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {activePlacementAccounts.map((acc) => (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => {
                          setSelectedCountryId(acc.id);
                          setAmount(0);
                        }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs transition-all cursor-pointer border ${
                          selectedCountryId === acc.id
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20 border-transparent'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/60'
                        }`}
                      >
                        <span className="text-base">{acc.flagSymbol}</span>
                        <span>{acc.countryName}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase ${
                          selectedCountryId === acc.id
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {acc.currencyCode}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Office Location */}
              {office && selectedAccount && (
                <>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="location_on" className="text-amber-600 text-lg" />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Kantor Vallas
                        </p>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                        Buka
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{office.officeName}</p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{office.address}</p>
                      <p className="text-xs text-slate-500 mt-1">{office.city}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Icon name="schedule" className="text-sm" />
                      <span>{office.operatingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Icon name="call" className="text-sm" />
                      <span>{office.phone}</span>
                    </div>
                    <a
                      href={office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      <Icon name="map" className="text-base text-blue-600" />
                      <span>Buka di Google Maps</span>
                      <Icon name="open_in_new" className="text-xs text-slate-400" />
                    </a>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 px-1">
                      <label className="text-[11px] font-bold text-slate-900 uppercase">
                        Jumlah Penarikan
                      </label>
                      <span className={`text-[11px] font-bold transition-colors ${
                        isExceedingBalance ? 'text-rose-600' : 'text-slate-400'
                      }`}>
                        Tersedia: {selectedAccount.currencySymbol} {selectedAccount.availableBalance.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                        isExceedingBalance
                          ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-500/20'
                          : 'bg-slate-50 border-slate-200/60 focus-within:border-amber-500'
                      }`}
                    >
                      <span className="text-sm font-bold text-slate-500 shrink-0">
                        {selectedAccount.currencySymbol}
                      </span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                        className={`flex-1 bg-transparent outline-none border-none font-headline text-lg font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                          isExceedingBalance ? 'text-rose-600' : 'text-slate-900'
                        }`}
                        placeholder="0"
                      />
                      <span className="text-xs font-bold text-slate-400 shrink-0">
                        {selectedAccount.currencyCode}
                      </span>
                    </div>
                    {isExceedingBalance && (
                      <p className="text-[11px] font-semibold text-rose-600 mt-1.5 px-1 flex items-center gap-1.5">
                        <Icon name="error" className="text-xs shrink-0" />
                        <span>Jumlah melebihi saldo tersedia! (Maks: {selectedAccount.currencySymbol} {selectedAccount.availableBalance.toLocaleString('id-ID')})</span>
                      </p>
                    )}
                  </div>

                  {/* Required Documents Checklist */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-900 uppercase block mb-2 px-1">
                      Berkas yang Perlu Dibawa
                    </label>
                    <div className="space-y-2">
                      {REQUIRED_DOCUMENTS.map((doc) => (
                        <div
                          key={doc.name}
                          className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3 hover:bg-slate-100/70 transition-colors"
                        >
                          <div className="h-9 w-9 min-w-[36px] flex items-center justify-center bg-white rounded-xl border border-slate-200/80 text-slate-600 shrink-0">
                            <Icon name={doc.icon} className="text-lg" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                              {doc.name}
                              {doc.mandatory ? (
                                <span className="text-[9px] px-1.5 py-0.5 bg-rose-100 text-rose-600 rounded-full font-black uppercase">
                                  Wajib
                                </span>
                              ) : (
                                <span className="text-[9px] px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded-full font-black uppercase">
                                  Opsional
                                </span>
                              )}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                              {doc.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {selectedAccount && office && (
          <div className="border-t border-slate-100 p-6 shrink-0">
            {isConfirmStep ? (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsConfirmStep(false)}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
                >
                  Kembali
                </button>
                <button
                  type="button"
                  onClick={handleFinalConfirm}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                >
                  Konfirmasi Pengajuan
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled={!isValidAmount}
                onClick={handleSubmit}
                className={`w-full py-3.5 font-bold rounded-2xl shadow-lg transition-all text-sm text-center flex items-center justify-center gap-2 ${
                  isValidAmount
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-500/20 cursor-pointer active:scale-[0.99]'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                <Icon name="storefront" className="text-lg" />
                <span>Ajukan Penarikan Offline</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
