'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'About Us', href: '/about' },
];

export default function Header() {
  const { totalItems, toggleDrawer, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo
              size={40}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="block text-sm font-black uppercase tracking-widest text-foreground leading-none">
                Alra Berjaya
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground leading-none mt-0.5">
                Abadi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={openDrawer}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-200"
              aria-label={`Shopping cart, ${totalItems} items`}
            >
              <Icon name="ShoppingCartIcon" size={20} variant="outline" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-accent text-accent-foreground text-[9px] font-black rounded-full flex items-center justify-center px-1 leading-none">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-border/60 text-foreground hover:bg-muted transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon
                name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={20}
                variant="outline"
              />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 drawer-overlay md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-20 left-0 right-0 bg-card border-b border-border shadow-2xl p-6 space-y-2"
            onClick={(e) => e?.stopPropagation()}
          >
            {NAV_LINKS?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between w-full py-4 px-4 rounded-2xl text-sm font-bold uppercase tracking-widest text-foreground hover:bg-muted transition-colors"
              >
                {link?.label}
                <Icon name="ChevronRightIcon" size={16} variant="outline" className="text-muted-foreground" />
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => { setMobileOpen(false); openDrawer(); }}
                className="btn-primary w-full justify-center"
              >
                <Icon name="ShoppingCartIcon" size={16} variant="outline" />
                View Cart
                {totalItems > 0 && (
                  <span className="bg-accent text-accent-foreground text-[9px] font-black rounded-full px-1.5 py-0.5 ml-1">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}