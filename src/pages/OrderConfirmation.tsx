
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-heading font-bold mb-4">Order Confirmed!</h1>
          <p className="text-lg mb-2">Thank you for your purchase</p>
          <p className="text-gray-500 mb-6">
            Your order #{orderNumber} has been placed successfully.
            We've sent you an email confirmation with all the details.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h2 className="font-bold mb-4">What happens next?</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Our team will process your order within 24 hours.</li>
              <li>You'll receive a shipping confirmation with tracking details.</li>
              <li>Your premium headphones will be on their way to you!</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                Return to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
