
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategorySection from '@/components/home/CategorySection';
import FeatureHighlights from '@/components/home/FeatureHighlights';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <FeatureHighlights />
      
      {/* Testimonials or brand partners section could be added here */}
    </Layout>
  );
};

export default Index;
