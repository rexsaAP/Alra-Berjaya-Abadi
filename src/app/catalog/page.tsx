import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogClient from '@/app/catalog/components/CatalogClient';

export const metadata = {
  title: 'Katalog Komoditas — CV. Alra Berjaya Abadi',
  description: 'Jelajahi 31+ komoditas ekspor unggulan Indonesia: pertanian, rempah, produk olahan, biomassa, dan lebih banyak lagi.',
};

export default function CatalogPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <CatalogClient />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}