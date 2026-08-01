import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const STATS = [
{
  label: 'Komoditas Tersedia',
  value: '31+',
  accent: true
},
{
  label: 'Kategori Ekspor',
  value: '6',
  accent: false
},
{
  label: 'Legalitas Terdaftar',
  value: '100%',
  accent: false
},
{
  label: 'Respon Inquiry',
  value: '<24 Jam',
  accent: true
}];


const PILLARS = [
{
  icon: 'DocumentCheckIcon',
  title: 'Legalitas Lengkap',
  desc: 'SIUP, NPWP, NIB, dan dokumen ekspor resmi tersedia. Kami transparan dalam setiap tahap proses.'
},
{
  icon: 'TruckIcon',
  title: 'Direct Supplier',
  desc: 'Langsung dari sumber — petani dan produsen mitra terpilih di seluruh Kalimantan dan Sumatera.'
},
{
  icon: 'GlobeAltIcon',
  title: 'FOB & CIF Ready',
  desc: 'Penawaran harga tersedia dalam format FOB dan CIF sesuai kebutuhan importir internasional.'
},
{
  icon: 'ShieldCheckIcon',
  title: 'Kualitas Terjamin',
  desc: 'Setiap komoditas melalui proses seleksi ketat sebelum dikemas dan dikirim ke pasar global.'
}];


export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Ghost text */}
      <span className="ghost-text !text-primary-foreground/5 select-none" aria-hidden="true">
        KUALITAS
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                Mengapa Alra Berjaya?
              </p>
              <h2 className="text-section-title text-primary-foreground">
                Mitra Ekspor
                <br />
                yang Anda
                <br />
                Percaya.
              </h2>
              <p className="text-primary-foreground/70 text-base leading-relaxed font-medium max-w-md">
                Kami hadir sebagai pemasok langsung yang gesit dan transparan — bukan perantara. Setiap pesanan ditangani dengan komitmen penuh terhadap kualitas dan ketepatan waktu.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              {PILLARS.map((p) =>
              <div
                key={p.title}
                className="p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300">
                
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <Icon name={p.icon as any} size={20} variant="outline" className="text-accent" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Stats + Image */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) =>
              <div
                key={s.label}
                className={`p-6 rounded-2xl border ${
                s.accent ?
                'bg-accent/20 border-accent/30' : 'bg-primary-foreground/5 border-primary-foreground/10'}`
                }>
                
                  <p className={`text-3xl font-black tracking-tighter ${s.accent ? 'text-accent' : 'text-primary-foreground'}`}>
                    {s.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/50 mt-1">
                    {s.label}
                  </p>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative rounded-[28px] overflow-hidden group">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1169bc7f6-1766524049314.png"
                alt="Professional business team reviewing export documents in bright modern office, warm natural light, confident expressions"
                width={700}
                height={320}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground/80 text-[10px] font-black uppercase tracking-widest">
                  Tim Kami
                </p>
                <p className="text-primary-foreground text-sm font-bold mt-1 leading-snug">
                  Profesional muda yang berdedikasi melayani kebutuhan ekspor Anda
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {['SIUP', 'NPWP', 'NIB', 'Halal Ready'].map((cert) =>
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-[10px] font-black uppercase tracking-widest text-primary-foreground/70">
                
                  <Icon name="CheckCircleIcon" size={12} variant="solid" className="text-accent" />
                  {cert}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}