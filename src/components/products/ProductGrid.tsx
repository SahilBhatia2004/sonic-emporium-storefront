
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="py-10 text-center">
        <h3 className="text-xl font-medium">No products found.</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && <h2 className="text-2xl font-heading font-bold mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
