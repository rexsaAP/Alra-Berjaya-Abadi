'use client';

import React, { useState, useMemo } from 'react';
import Icon from '@/components/ui/AppIcon';
import { PRODUCTS, CATEGORIES, searchProducts } from '@/lib/products';
import type { Category } from '@/lib/products';
import ProductCard from './ProductCard';

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(
    () => searchProducts(searchQuery, activeCategory),
    [searchQuery, activeCategory]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="mb-12 space-y-4">
        <div className="relative">
          <span className="ghost-text !static !transform-none !text-foreground/[0.03] text-display block leading-none" aria-hidden="true">
            KATALOG
          </span>
          <div className="absolute inset-0 flex flex-col justify-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-3">
              Katalog Lengkap
            </p>
            <h1 className="text-display text-foreground">
              Komoditas
              <br />
              <span className="text-primary">Ekspor.</span>
            </h1>
          </div>
          <div className="h-24 sm:h-32" aria-hidden="true" />
        </div>
        <p className="text-muted-foreground text-base leading-relaxed font-medium max-w-2xl">
          {PRODUCTS.length} komoditas unggulan Indonesia, siap ekspor ke seluruh dunia. Setiap produk dilengkapi informasi MOQ dan satuan untuk kemudahan inquiry Anda.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-xl py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 border-b border-border/60 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true">
              <Icon name="MagnifyingGlassIcon" size={16} variant="outline" />
            </div>
            <input
              type="search"
              placeholder="Cari komoditas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-card text-foreground text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters — horizontal scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide flex-nowrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground border border-border/60'
                }`}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-medium">
          <span className="font-black text-foreground">{filtered.length}</span> komoditas ditemukan
          {activeCategory !== 'All' && (
            <span> dalam <span className="font-bold text-primary">{activeCategory}</span></span>
          )}
        </p>
        {(searchQuery || activeCategory !== 'All') && (
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Icon name="XMarkIcon" size={12} variant="outline" />
            Reset Filter
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 space-y-4">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <Icon name="ArchiveBoxXMarkIcon" size={32} variant="outline" className="text-muted-foreground" />
          </div>
          <p className="font-bold text-foreground">Produk tidak ditemukan</p>
          <p className="text-sm text-muted-foreground">Coba kata kunci atau kategori lain</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="btn-primary mx-auto"
          >
            Lihat Semua Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}