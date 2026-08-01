import React from 'react';
import Icon from '@/components/ui/AppIcon';

const DOCS = [
  {
    icon: 'DocumentCheckIcon',
    title: 'SIUP',
    desc: 'Surat Izin Usaha Perdagangan resmi, terdaftar di instansi berwenang.',
  },
  {
    icon: 'IdentificationIcon',
    title: 'NPWP',
    desc: 'Nomor Pokok Wajib Pajak aktif, kewajiban perpajakan terpenuhi.',
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'NIB',
    desc: 'Nomor Induk Berusaha melalui OSS, legalitas usaha terverifikasi.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Angka Pengenal Ekspor',
    desc: 'APE aktif untuk kegiatan ekspor komoditas secara resmi.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Rekening Perusahaan',
    desc: 'Rekening bank atas nama CV, transaksi bisnis transparan dan terlacak.',
  },
  {
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Dokumen Ekspor',
    desc: 'Packing list, invoice, CoO, dan dokumen pendukung lainnya tersedia.',
  },
];

export default function LegalSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <span className="ghost-text !text-primary-foreground/5 select-none" aria-hidden="true">
        LEGAL
      </span>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Legalitas & Dokumen
            </p>
            <h2 className="text-section-title text-primary-foreground">
              Legalitas Lengkap,
              <br />
              Bisnis Aman.
            </h2>
          </div>
          <p className="text-primary-foreground/70 text-base leading-relaxed font-medium">
            Kami memahami bahwa kepercayaan dibangun dari kelengkapan dokumen. Semua legalitas perusahaan dan dokumen ekspor kami siapkan dengan teliti untuk memastikan setiap transaksi berjalan lancar.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOCS.map((doc) => (
            <div
              key={doc.title}
              className="p-6 rounded-[24px] bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={doc.icon as any} size={18} variant="outline" className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary-foreground mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed font-medium">
                    {doc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-6 rounded-[24px] bg-primary-foreground/5 border border-primary-foreground/10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon name="InformationCircleIcon" size={18} variant="outline" className="text-accent" />
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed font-medium">
            Salinan dokumen legalitas dapat disediakan atas permintaan untuk keperluan verifikasi mitra bisnis. Hubungi kami melalui WhatsApp atau email untuk informasi lebih lanjut.
          </p>
        </div>
      </div>
    </section>
  );
}