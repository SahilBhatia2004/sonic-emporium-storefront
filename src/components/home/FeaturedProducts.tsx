
import React from 'react';
import ProductGrid from '../products/ProductGrid';
import { products } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium headphones that deliver exceptional sound quality and comfort.
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
