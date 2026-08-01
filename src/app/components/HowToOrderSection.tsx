import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const STEPS = [
  {
    number: '01',
    icon: 'ArchiveBoxIcon',
    title: 'Pilih Komoditas',
    desc: 'Jelajahi katalog lengkap kami dan tambahkan komoditas pilihan Anda ke keranjang. Kuantitas minimum sesuai MOQ masing-masing produk.',
    cta: { label: 'Buka Katalog', href: '/catalog' },
  },
  {
    number: '02',
    icon: 'ShoppingCartIcon',
    title: 'Atur Kuantitas',
    desc: 'Sesuaikan jumlah pesanan di keranjang. Sistem kami akan memastikan kuantitas tidak kurang dari MOQ yang ditetapkan.',
    cta: null,
  },
  {
    number: '03',
    icon: 'PaperAirplaneIcon',
    title: 'Kirim Inquiry via WhatsApp',
    desc: 'Tekan tombol "Kirim via WhatsApp" dan ringkasan pesanan Anda otomatis terformat rapi dan dikirim ke tim kami.',
    cta: null,
  },
  {
    number: '04',
    icon: 'DocumentTextIcon',
    title: 'Terima Penawaran Resmi',
    desc: 'Tim kami merespons dalam <24 jam dengan penawaran harga FOB/CIF, ketersediaan stok, dan prosedur pengiriman lengkap.',
    cta: null,
  },
];

export default function HowToOrderSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
            Cara Pemesanan
          </p>
          <h2 className="text-section-title text-foreground">
            Proses Sederhana,
            <br />
            <span className="text-primary">Hasil Nyata.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed font-medium">
            Dari pilih produk hingga terima penawaran resmi — semua bisa dilakukan dalam hitungan menit melalui WhatsApp.
          </p>
        </div>

        {/* Steps — Asymmetric horizontal flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {idx < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0 -translate-y-1/2"
                  style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 p-6 rounded-[24px] border border-border/60 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-black tracking-tighter text-primary/10 leading-none">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={step.icon as any} size={18} variant="outline" className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium flex-1">
                  {step.desc}
                </p>

                {step.cta && (
                  <Link
                    href={step.cta.href}
                    className="mt-4 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    {step.cta.label}
                    <Icon name="ArrowRightIcon" size={12} variant="outline" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}