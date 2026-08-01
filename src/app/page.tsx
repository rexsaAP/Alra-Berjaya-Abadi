import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import CategoriesSection from '@/app/components/CategoriesSection';
import WhyUsSection from '@/app/components/WhyUsSection';
import HowToOrderSection from '@/app/components/HowToOrderSection';
import CTASection from '@/app/components/CTASection';

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CategoriesSection />
          <WhyUsSection />
          <HowToOrderSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}