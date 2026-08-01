'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeDrawer,
    increment,
    decrement,
    removeItem,
    clearCart,
    buildWhatsAppMessage,
  } = useCart();

  // Close on scroll
  useEffect(() => {
    if (!isOpen) return;
    const onScroll = () => closeDrawer();
    window.addEventListener('scroll', onScroll, { passive: true, once: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen, closeDrawer]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleWhatsApp = () => {
    const url = buildWhatsAppMessage();
    if (url) window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 drawer-overlay"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-card shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="text-lg font-black uppercase tracking-widest text-foreground">
              Keranjang
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {items?.length === 0
                ? 'Belum ada produk'
                : `${items?.length} produk dipilih`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {items?.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border/60 hover:border-border"
              >
                Clear All
              </button>
            )}
            <button
              onClick={closeDrawer}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close cart"
            >
              <Icon name="XMarkIcon" size={18} variant="outline" />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 py-16">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <Icon name="ShoppingCartIcon" size={32} variant="outline" className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">Keranjang kosong</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Tambahkan komoditas dari katalog
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="btn-primary"
              >
                Lihat Katalog
              </button>
            </div>
          ) : (
            items?.map((item) => (
              <div
                key={item?.product?.id}
                className="flex gap-4 p-4 rounded-2xl border border-border/60 bg-background hover:border-accent/30 transition-colors"
              >
                {/* Product Image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                  <AppImage
                    src={item?.product?.image_url}
                    alt={`${item?.product?.name} product image`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">
                    {item?.product?.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-0.5">
                    {item?.product?.category}
                  </p>
                  {/* MOQ notice */}
                  <p className="text-[9px] text-accent font-bold uppercase tracking-widest mt-1">
                    MOQ: {item?.product?.moq} {item?.product?.unit}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decrement(item?.product?.id)}
                      disabled={item?.quantity <= item?.product?.moq}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      aria-label={`Decrease quantity of ${item?.product?.name}`}
                    >
                      <Icon name="MinusIcon" size={12} variant="outline" />
                    </button>
                    <span className="text-sm font-black text-foreground min-w-[3rem] text-center">
                      {item?.quantity}
                      <span className="text-[9px] text-muted-foreground font-bold ml-1">
                        {item?.product?.unit}
                      </span>
                    </span>
                    <button
                      onClick={() => increment(item?.product?.id)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-all"
                      aria-label={`Increase quantity of ${item?.product?.name}`}
                    >
                      <Icon name="PlusIcon" size={12} variant="outline" />
                    </button>
                    <button
                      onClick={() => removeItem(item?.product?.id)}
                      className="ml-auto w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-all"
                      aria-label={`Remove ${item?.product?.name} from cart`}
                    >
                      <Icon name="TrashIcon" size={12} variant="outline" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer — WhatsApp CTA */}
        {items?.length > 0 && (
          <div className="px-6 py-5 border-t border-border space-y-3">
            {/* Order Summary */}
            <div className="bg-muted rounded-2xl p-4 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Ringkasan Pesanan
              </p>
              {items?.map((item) => (
                <div key={item?.product?.id} className="flex justify-between text-xs">
                  <span className="text-foreground font-medium truncate max-w-[60%]">
                    {item?.product?.name}
                  </span>
                  <span className="text-muted-foreground font-bold flex-shrink-0 ml-2">
                    {item?.quantity} {item?.product?.unit}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b958] text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Kirim via WhatsApp
            </button>
            <p className="text-[9px] text-center text-muted-foreground">
              Anda akan diarahkan ke WhatsApp dengan pesan otomatis
            </p>
          </div>
        )}
      </div>
    </>
  );
}