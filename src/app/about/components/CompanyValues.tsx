import React from 'react';
import Icon from '@/components/ui/AppIcon';

const VALUES = [
  {
    icon: 'EyeIcon',
    title: 'Transparansi',
    desc: 'Kami percaya pada komunikasi yang terbuka. Setiap informasi produk, harga, dan proses pengiriman kami sampaikan dengan jelas dan jujur kepada setiap mitra.',
  },
  {
    icon: 'BoltIcon',
    title: 'Kecepatan & Ketangkasan',
    desc: 'Sebagai perusahaan yang gesit, kami mampu merespons inquiry, menyesuaikan kebutuhan, dan mengeksekusi pesanan dengan lebih cepat dari pemasok konvensional.',
  },
  {
    icon: 'StarIcon',
    title: 'Kualitas Tanpa Kompromi',
    desc: 'Setiap komoditas melalui seleksi ketat sebelum sampai ke tangan Anda. Kami membangun hubungan langsung dengan petani dan produsen terpercaya.',
  },
  {
    icon: 'UsersIcon',
    title: 'Kemitraan Jangka Panjang',
    desc: 'Kami tidak sekadar menjual komoditas — kami membangun hubungan bisnis yang saling menguntungkan dan berkelanjutan dengan setiap mitra ekspor kami.',
  },
  {
    icon: 'LeafIcon',
    title: 'Keberlanjutan',
    desc: 'Kami berkomitmen bermitra dengan sumber yang bertanggung jawab secara lingkungan dan sosial, mendukung petani lokal dan praktik pertanian berkelanjutan.',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Kepatuhan Regulasi',
    desc: 'Semua dokumen ekspor, sertifikasi produk, dan prosedur kepabeanan kami kelola dengan cermat sesuai regulasi nasional dan internasional.',
  },
];

export default function CompanyValues() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Nilai Perusahaan
            </p>
            <h2 className="text-section-title text-foreground">
              Dibangun di Atas
              <br />
              <span className="text-primary">Nilai yang Kuat.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed font-medium">
            Kami mungkin baru, tetapi fondasi kami kuat. Setiap keputusan bisnis kami didasarkan pada nilai-nilai yang kami pegang teguh sejak hari pertama.
          </p>
        </div>

        {/* Values Grid — asymmetric */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((val, idx) => (
            <div
              key={val.title}
              className={`p-6 rounded-[24px] border border-border/60 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 group ${
                idx === 0 ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon name={val.icon as any} size={22} variant="outline" className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-3">
                {val.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}