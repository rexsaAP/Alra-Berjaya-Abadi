import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const CATEGORY_CARDS = [
{
  title: 'Agriculture & Plantation',
  description: '10 komoditas unggulan — Sawit, Kelapa, Buah Naga, Kunyit, dan lebih banyak lagi.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14cf4ac4f-1768162626969.png",
  alt: 'Lush tropical farm with rows of green plants, bright morning sunlight, airy open sky, warm earthy tones',
  count: 10,
  span: 'col-span-2 row-span-2',
  height: 'h-[420px]'
},
{
  title: 'Spices & Herbs',
  description: 'Kayu Manis, Vanili, Rempah Campur.',
  image: "https://images.unsplash.com/photo-1707627598616-86a2da5119df",
  alt: 'Colorful dried spices in wooden bowls, warm amber and red tones, soft natural light on rustic surface',
  count: 3,
  span: 'col-span-1 row-span-1',
  height: 'h-[200px]'
},
{
  title: 'Industrial & Biomass',
  description: 'Arang Briket, Minyak Nilam, Kayu Kopi.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd482cea-1766019840787.png",
  alt: 'Dark charcoal briquettes stacked in industrial setting, dim warehouse lighting, deep shadows, textured black surfaces',
  count: 5,
  span: 'col-span-1 row-span-1',
  height: 'h-[200px]'
},
{
  title: 'Processed & Food Products',
  description: 'Kopi Aming, Gula Aren, Tepung Sagu, Indomie, dan lebih banyak.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17a7f7959-1775570243970.png",
  alt: 'Assorted Indonesian processed food products on wooden table, warm indoor lighting, rich browns and natural tones',
  count: 8,
  span: 'col-span-2 row-span-1',
  height: 'h-[200px]'
},
{
  title: 'Leaves & Botanicals',
  description: 'Daun Pisang, Daun Kelor, Daun Ketapang, Kratom.',
  image: "https://images.unsplash.com/photo-1692674388043-fc07f4daa1a0",
  alt: 'Large tropical leaves in deep green, dappled sunlight through forest canopy, lush botanical atmosphere',
  count: 4,
  span: 'col-span-1 row-span-1',
  height: 'h-[200px]'
},
{
  title: 'Apparel',
  description: 'Batik, Tenun Tradisional, Pakaian Kasual Ekspor.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_117f7c7f6-1772687280880.png",
  alt: 'Vibrant Indonesian batik fabric patterns in blue and brown, bright studio lighting, clean white background',
  count: 1,
  span: 'col-span-1 row-span-1',
  height: 'h-[200px]'
}];


export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">
              Kategori Komoditas
            </p>
            <h2 className="text-section-title text-foreground">
              Kekayaan Alam
              <br />
              <span className="text-primary">Indonesia.</span>
            </h2>
          </div>
          <Link
            href="/catalog"
            className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group flex-shrink-0">
            
            Lihat Semua Katalog
            <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        {/* BENTO AUDIT:
             Cards: Agriculture(cs2 rs2), Spices(cs1 rs1), Industrial(cs1 rs1), Processed(cs2 rs1), Leaves(cs1 rs1), Apparel(cs1 rs1)
             Row 1: [col1-2: Agriculture cs2 rs2] [col3: Spices cs1] [col4: Industrial cs1]
             Row 2: [col1-2: Agriculture CONT] [col3-4: Processed cs2]
             Row 3: [col1: Leaves cs1] [col2: Apparel cs1] [col3-4: empty — expand Apparel to cs2]
             Fix: Row3 → Leaves cs1, Apparel cs3 (col2-4) OR add filler. Use Apparel cs3 fill.
             Placed 6/6 ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORY_CARDS?.map((cat, idx) =>
          <Link
            key={cat?.title}
            href={`/catalog?category=${encodeURIComponent(cat?.title)}`}
            className={`group relative rounded-[28px] overflow-hidden bg-card border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl cursor-pointer
                ${idx === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                ${idx === 3 ? 'sm:col-span-2 lg:col-span-2' : ''}
                ${idx === 5 ? 'sm:col-span-2 lg:col-span-2' : ''}
              `}
            aria-label={`View ${cat?.title} category`}>
            
              {/* Image */}
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-[300px] sm:h-[420px]' : 'h-[200px]'}`}>
                <AppImage
                src={cat?.image}
                alt={cat?.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700" />
              
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" aria-hidden="true" />

                {/* Count badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {cat?.count} produk
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-black text-base uppercase tracking-tight leading-tight">
                    {cat?.title}
                  </h3>
                  <p className="text-white/70 text-xs mt-1 leading-relaxed font-medium">
                    {cat?.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-accent text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lihat Produk
                    <Icon name="ArrowRightIcon" size={12} variant="outline" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}