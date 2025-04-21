
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

// Import extracted components
import ShippingForm, { ShippingFields } from '@/components/checkout/ShippingForm';
import PaymentForm, { PaymentFields } from '@/components/checkout/PaymentForm';
import OrderSummary from '@/components/checkout/OrderSummary';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Split form state
  const [shipping, setShipping] = useState<ShippingFields>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
  });

  const [payment, setPayment] = useState<PaymentFields>({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShipping(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayment(prev => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate('/order-confirmation');
      setIsLoading(false);
    }, 1500);
  };

  // Redirect to cart if cart is empty
  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  if (cart.length === 0) {
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <ShippingForm values={shipping} onChange={handleShippingChange} />
          <PaymentForm values={payment} onChange={handlePaymentChange} />
          <OrderSummary cartTotal={typeof cartTotal === 'number' ? cartTotal : 0} cart={cart} />
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Place Order"}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;

