'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Agriculture & Plantation': 'bg-green-100 text-green-800',
  'Spices & Herbs': 'bg-orange-100 text-orange-800',
  'Processed & Food Products': 'bg-amber-100 text-amber-800',
  'Industrial & Biomass': 'bg-stone-100 text-stone-800',
  'Leaves & Botanicals': 'bg-emerald-100 text-emerald-800',
  'Apparel': 'bg-rose-100 text-rose-800',
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.product.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="card-commodity flex flex-col group opacity-100 animate-fade-in-up"
      style={{ animationDelay: `${(index % 8) * 60}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <AppImage
          src={product.image_url}
          alt={`${product.name} — Indonesian export commodity, natural product photography`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${CATEGORY_COLORS[product.category] || 'bg-muted text-muted-foreground'}`}>
            {product.category.split(' ')[0]}
          </span>
        </div>
        {/* In-cart indicator */}
        {inCart && (
          <div className="absolute top-3 right-3 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-sm">
            <Icon name="CheckIcon" size={14} variant="solid" className="text-primary-foreground" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1 space-y-2 mb-4">
          <h3 className="text-sm font-black uppercase tracking-tight text-foreground leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* MOQ Info */}
        <div className="flex items-center justify-between mb-4 py-3 border-t border-border/60">
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
              Min. Order (MOQ)
            </p>
            <p className="text-sm font-black text-foreground mt-0.5">
              {product.moq.toLocaleString('id-ID')}{' '}
              <span className="text-muted-foreground font-bold">{product.unit}</span>
            </p>
          </div>
          <span className="moq-badge">
            {product.unit}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className={`w-full py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
            added
              ? 'bg-green-600 text-white'
              : inCart
              ? 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground'
              : 'bg-primary text-primary-foreground hover:bg-secondary'
          }`}
        >
          {added ? (
            <>
              <Icon name="CheckIcon" size={14} variant="solid" />
              Ditambahkan!
            </>
          ) : inCart ? (
            <>
              <Icon name="PlusIcon" size={14} variant="outline" />
              Tambah Lagi
            </>
          ) : (
            <>
              <Icon name="ShoppingCartIcon" size={14} variant="outline" />
              Tambah ke Keranjang
            </>
          )}
        </button>
      </div>
    </div>
  );
}