import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const TEAM_MEMBERS = [
  {
    name: 'Rizky Alfarizi',
    role: 'Direktur Utama',
    initials: 'RA',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Manajer Ekspor',
    initials: 'SN',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Budi Santoso',
    role: 'Koordinator Logistik',
    initials: 'BS',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function AboutCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Team */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Tim Kami
            </p>
            <h2 className="text-section-title text-foreground">
              Orang-Orang di
              <br />
              <span className="text-primary">Balik Alra Berjaya.</span>
            </h2>
            <p className="text-muted-foreground text-base font-medium max-w-xl mx-auto leading-relaxed">
              Tim profesional muda kami siap mendampingi setiap tahap proses ekspor Anda — dari inquiry hingga barang tiba di tujuan.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM_MEMBERS?.map((member) => (
              <div
                key={member?.name}
                className="text-center group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-background shadow-lg group-hover:border-accent/40 transition-colors duration-300">
                  <img
                    src={member?.image}
                    alt={`${member?.name}, ${member?.role} at CV. Alra Berjaya Abadi`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="font-black text-sm uppercase tracking-tight text-foreground">
                  {member?.name}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                  {member?.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Black card */}
          <div className="bg-foreground text-background rounded-[32px] p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
                Hubungi Kami
              </p>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                Siap Berdiskusi
                <br />
                tentang Kebutuhan
                <br />
                Ekspor Anda?
              </h3>
              <p className="text-background/60 text-sm font-medium leading-relaxed">
                Kami merespons setiap inquiry dalam waktu kurang dari 24 jam kerja. Tidak ada pertanyaan yang terlalu kecil atau terlalu besar.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-background/10">
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-sm font-bold text-background/70 hover:text-background transition-colors"
              >
                <Icon name="PhoneIcon" size={16} variant="outline" />
                +62 812 3456 7890
              </a>
              <a
                href="mailto:info@alraberjaya.co.id"
                className="flex items-center gap-3 text-sm font-bold text-background/70 hover:text-background transition-colors"
              >
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                info@alraberjaya.co.id
              </a>
              <span className="flex items-center gap-3 text-sm font-bold text-background/70">
                <Icon name="MapPinIcon" size={16} variant="outline" />
                Pontianak, Kalimantan Barat, Indonesia
              </span>
            </div>
          </div>

          {/* Right: WhatsApp + Catalog */}
          <div className="space-y-4 flex flex-col">
            <a
              href="https://wa.me/6281234567890?text=Halo%20CV.%20ALRA%20BERJAYA%20ABADI%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20komoditas%20ekspor%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-4 p-10 rounded-[32px] bg-[#25D366] hover:bg-[#20b958] text-white transition-colors duration-300 text-center group"
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current opacity-90 group-hover:scale-110 transition-transform" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">
                  Chat Langsung
                </p>
                <p className="text-xl font-black uppercase tracking-tight mt-1">
                  WhatsApp Kami
                </p>
              </div>
            </a>

            <Link
              href="/catalog"
              className="flex items-center justify-between gap-4 p-6 rounded-[24px] border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
                  Eksplorasi Produk
                </p>
                <p className="text-lg font-black uppercase tracking-tight mt-0.5">
                  Lihat Katalog
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary group-hover:border-primary-foreground transition-all">
                <Icon name="ArrowRightIcon" size={18} variant="outline" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}