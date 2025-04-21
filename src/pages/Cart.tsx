
import React from 'react';
import Layout from '@/components/layout/Layout';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-heading font-bold mb-6">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-block p-6 rounded-full bg-gray-100 mb-4">
              <ShoppingCart className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-2">Your Cart</h1>
        <Link to="/products" className="inline-flex items-center text-accent mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center border-b pb-4 mb-2">
                <h2 className="text-xl font-medium">Cart Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearCart}
                  className="text-gray-500 hover:text-red-500"
                >
                  Clear All
                </Button>
              </div>

              <div className="divide-y">
                {cart.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <CartSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
