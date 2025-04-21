
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate('/order-confirmation');
      setIsLoading(false);
    }, 1500);
  };

  // Calculate order summary
  const shipping = 0; // Free shipping
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + shipping + tax;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-heading font-bold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">State/Province</label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP/Postal Code</label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-heading font-bold mb-4">Payment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card</label>
            <Input
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
            <Input
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </div>
          <div>
            <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Expiration Date</label>
            <Input
              id="cardExpiry"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cardCvc" className="block text-sm font-medium mb-1">CVC</label>
            <Input
              id="cardCvc"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleChange}
              placeholder="CVC"
              required
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
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
            <span>${cartTotal.toFixed(2)}</span>
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
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
};

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

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
        <CheckoutForm />
      </div>
    </Layout>
  );
};

export default Checkout;
