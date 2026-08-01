import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden bg-primary p-10 sm:p-16 text-center">
          {/* Ghost text */}
          <span className="ghost-text !text-primary-foreground/5 select-none" aria-hidden="true">RFQ</span>

          <div className="relative z-10 space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Mulai Ekspor Sekarang
            </p>
            <h2 className="text-display text-primary-foreground">
              Siap Memulai
              <br />
              Kerja Sama?
            </h2>
            <p className="text-primary-foreground/70 text-base leading-relaxed font-medium max-w-lg mx-auto">
              Kirimkan inquiry Anda hari ini. Tim kami siap memberikan penawaran harga FOB/CIF, informasi ketersediaan stok, dan panduan prosedur ekspor lengkap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/catalog" className="btn-accent w-full sm:w-auto justify-center">
                <Icon name="ArchiveBoxIcon" size={16} variant="outline" />
                Lihat Katalog Lengkap
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Halo%20CV.%20ALRA%20BERJAYA%20ABADI%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20komoditas%20ekspor%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-foreground/10 transition-all duration-300 w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Contact info row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-primary-foreground/10">
              <a
                href="mailto:info@alraberjaya.co.id"
                className="flex items-center gap-2 text-[11px] font-bold text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Icon name="EnvelopeIcon" size={14} variant="outline" />
                info@alraberjaya.co.id
              </a>
              <span className="hidden sm:block w-px h-4 bg-primary-foreground/20" aria-hidden="true" />
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2 text-[11px] font-bold text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Icon name="PhoneIcon" size={14} variant="outline" />
                +62 812 3456 7890
              </a>
              <span className="hidden sm:block w-px h-4 bg-primary-foreground/20" aria-hidden="true" />
              <span className="flex items-center gap-2 text-[11px] font-bold text-primary-foreground/60">
                <Icon name="MapPinIcon" size={14} variant="outline" />
                Kalimantan Barat, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}