
import React from 'react';
import { useCart } from '@/context/CartContext';

interface OrderSummaryProps {
  cartTotal: number;
  cart: {
    product: {
      id: string;
      name: string;
      image: string;
      price: number;
    };
    quantity: number;
  }[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartTotal, cart }) => {
  // Prevent type issues: ensure cartTotal is always a number
  const numericCartTotal: number = typeof cartTotal === 'number' ? cartTotal : 0;
  const shipping = 0;
  const tax = numericCartTotal * 0.08;
  const total = numericCartTotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-heading font-bold mb-4">Order Summary</h2>
      <div className="border-b pb-4 mb-4">
        {cart.map(item => (
          <div key={item.product.id} className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${numericCartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 mt-2 font-bold text-lg">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

