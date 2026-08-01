import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import CompanyValues from './components/CompanyValues';
import LegalSection from './components/LegalSection';
import AboutCTA from './components/AboutCTA';

export const metadata = {
  title: 'Tentang Kami — CV. Alra Berjaya Abadi',
  description: 'CV. Alra Berjaya Abadi adalah eksportir komoditas langsung asal Indonesia. Transparan, gesit, dan berdedikasi menyediakan komoditas berkualitas tinggi untuk pasar global.',
};

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <AboutHero />
          <CompanyValues />
          <LegalSection />
          <AboutCTA />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}