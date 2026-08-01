'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

export default function HeroSection() {
  const scanRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useCart();

  useEffect(() => {
    const el = scanRef?.current;
    if (!el) return;
    el.style.animation = 'scan-line 10s linear infinite';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-dot-pattern">
      {/* Ghost background text */}
      <span className="ghost-text select-none" aria-hidden="true">EKSPOR</span>

      {/* Atmospheric blob */}
      <div
        className="blob-primary absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true" />
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
        {/* Left: Content */}
        <div className="space-y-8 opacity-100 animate-fade-in-up stagger-1">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full ping-slow" aria-hidden="true" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              Ekspor Langsung · Direct Supplier Indonesia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-hero-xl text-foreground">
            Komoditas
            <br />
            <span className="text-primary">Unggulan</span>
            <br />
            Indonesia.
          </h1>

          {/* Subheadline */}
          <p className="text-base text-muted-foreground max-w-md leading-relaxed font-medium">
            CV. Alra Berjaya Abadi — pemasok langsung komoditas ekspor pilihan Indonesia. Pertanian, rempah, biomassa, dan produk olahan berkualitas tinggi, siap dikirim ke seluruh dunia.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 pt-2">
            <div>
              <p className="text-2xl font-black tracking-tighter text-foreground">31+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Komoditas
              </p>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div>
              <p className="text-2xl font-black tracking-tighter text-foreground">6</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Kategori
              </p>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div>
              <p className="text-2xl font-black tracking-tighter text-foreground">FOB/CIF</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Harga Tersedia
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/catalog" className="btn-primary">
              <Icon name="ArchiveBoxIcon" size={16} variant="outline" />
              Lihat Katalog
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline">
              
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Right: Cinematic Image */}
        <div className="relative opacity-100 animate-fade-in-up stagger-3">
          {/* Corner brackets */}
          <div className="corner-tl" aria-hidden="true" />
          <div className="corner-br" aria-hidden="true" />

          {/* Scan overlay */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none z-20">
            <div
              ref={scanRef}
              className="hero-scan w-full h-20 absolute top-0 left-0 opacity-60"
              aria-hidden="true" />
            
            <div className="absolute inset-0 border border-white/10 rounded-[32px]" aria-hidden="true" />
          </div>

          <div className="relative rounded-[32px] overflow-hidden product-glow">
            <AppImage
              src="https://images.unsplash.com/photo-1557818472-ba9f8eb4e883"
              alt="Fresh tropical produce and spices in a vibrant outdoor market, warm golden morning light, rich earthy tones, lush green leaves"
              width={700}
              height={600}
              priority
              className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover" />
            
            {/* Dark scrim for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" aria-hidden="true" />
          </div>

          {/* Floating badge — bottom left */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-card border border-border shadow-2xl p-4 rounded-2xl z-30 float-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground">
                  Legalitas Lengkap
                </p>
                <p className="text-[9px] text-muted-foreground font-bold mt-0.5">
                  SIUP · NPWP · NIB
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge — top right */}
          <div className="absolute -top-4 -right-4 sm:-right-8 bg-primary text-primary-foreground p-4 rounded-2xl z-30 shadow-2xl float-slow" style={{ animationDelay: '2s' }}>
            <p className="text-[9px] font-black uppercase tracking-widest opacity-70">
              Tersedia
            </p>
            <p className="text-xl font-black tracking-tighter leading-none mt-1">
              31+
            </p>
            <p className="text-[9px] font-black uppercase tracking-widest opacity-70 mt-0.5">
              Komoditas
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" aria-hidden="true" />
      </div>
    </section>);

}