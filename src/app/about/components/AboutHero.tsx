import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AboutHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden grid-dot-pattern">
      <span className="ghost-text select-none" aria-hidden="true">ALRA</span>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                Tentang Kami
              </p>
              <h1 className="text-display text-foreground">
                Pemasok Langsung
                <br />
                <span className="text-primary">dari Sumber.</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed font-medium max-w-lg">
              CV. Alra Berjaya Abadi lahir dari keyakinan bahwa Indonesia memiliki kekayaan komoditas yang luar biasa — dan dunia berhak mendapatkannya langsung dari sumbernya, tanpa rantai perantara yang panjang.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed font-medium max-w-lg">
              Kami adalah tim profesional muda yang gesit, berdedikasi, dan berkomitmen untuk menjadi mitra ekspor yang transparan dan terpercaya. Setiap produk kami pilih dengan cermat, setiap transaksi kami tangani dengan integritas penuh.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
              { label: 'Didirikan', value: '2025' },
              { label: 'Domisili', value: 'Kalimantan Barat' },
              { label: 'Fokus', value: 'Ekspor Langsung' },
              { label: 'Respon', value: '< 24 Jam' }]?.
              map((fact) =>
              <div key={fact?.label} className="p-4 rounded-2xl bg-muted border border-border/60">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                    {fact?.label}
                  </p>
                  <p className="text-sm font-black text-foreground mt-1">{fact?.value}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="corner-tl" aria-hidden="true" />
            <div className="corner-br" aria-hidden="true" />

            <div className="rounded-[32px] overflow-hidden relative group">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1c5ea3072-1778240142085.png"
                alt="Young Indonesian professionals in bright modern office collaborating over export documents, warm natural daylight, confident and focused"
                width={700}
                height={500}
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" aria-hidden="true" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-5 border border-border/60">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="BuildingOffice2Icon" size={22} variant="outline" className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground uppercase tracking-tight">
                      CV. Alra Berjaya Abadi
                    </p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      Eksportir Komoditas Langsung · Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}