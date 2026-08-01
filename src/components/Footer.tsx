import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <AppLogo size={32} />
          <span className="text-sm font-black uppercase tracking-widest text-foreground">
            CV. Alra Berjaya Abadi
          </span>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] font-semibold text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/catalog" className="hover:text-foreground transition-colors">
            Catalog
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About Us
          </Link>
          <a
            href="mailto:info@alraberjaya.co.id"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[13px] font-medium text-muted-foreground">
          © 2026 CV. Alra Berjaya Abadi
        </p>
      </div>
    </footer>
  );
}