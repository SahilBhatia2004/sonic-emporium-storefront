
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { cartTotal } = useCart();
  // Ensure cartTotal is treated as a number
  const numericCartTotal: number = cartTotal;
  const shipping = 0; // Free shipping
  const tax = numericCartTotal * 0.08; // 8% tax rate
  const total = numericCartTotal + shipping + tax;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="font-heading text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${numericCartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <Link to="/checkout">
        <Button className="w-full bg-accent hover:bg-accent/90 text-white">
          Proceed to Checkout
        </Button>
      </Link>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        We accept all major credit cards and PayPal
      </p>
      
      <div className="flex justify-center space-x-2 mt-3">
        <span className="text-gray-400 text-2xl">💳</span>
        <span className="text-gray-400 text-2xl">💳</span>
        <span className="text-gray-400 text-2xl">💳</span>
        <span className="text-gray-400 text-2xl">💳</span>
      </div>
    </div>
  );
};

export default CartSummary;
