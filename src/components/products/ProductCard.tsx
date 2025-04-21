
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, brand, price, originalPrice, rating, image, isNew, isOnSale } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="product-card group rounded-lg overflow-hidden bg-white h-full flex flex-col shadow-sm hover:shadow-lg"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{brand}</div>
        <h3 className="font-medium text-lg mb-1 group-hover:text-accent transition-colors">{name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center mb-2">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-gray-400 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full add-to-cart-btn bg-accent hover:bg-accent/90 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
