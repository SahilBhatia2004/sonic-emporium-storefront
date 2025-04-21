
import React from 'react';
import { CartItem as CartItemType } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row py-6 border-b">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-1 px-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 className="font-medium text-lg hover:text-accent transition-colors">{product.name}</h3>
            </Link>
            <p className="text-gray-500">{product.brand}</p>
          </div>
          <div className="flex flex-col mt-2 sm:mt-0 sm:items-end">
            <span className="font-bold">${(product.price * quantity).toFixed(2)}</span>
            {quantity > 1 && (
              <span className="text-sm text-gray-500">(${product.price.toFixed(2)} each)</span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="h-8 w-8"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="h-8 w-8"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Remove Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-gray-500 hover:text-red-500"
          >
            <Trash className="h-4 w-4 mr-1" />
            <span>Remove</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
