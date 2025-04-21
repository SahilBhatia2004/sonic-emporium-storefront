
import React from 'react';
import { Input } from '@/components/ui/input';

export interface PaymentFields {
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

interface PaymentFormProps {
  values: PaymentFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ values, onChange }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-heading font-bold mb-4">Payment Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label htmlFor="cardName" className="block text-sm font-medium mb-1">Name on Card</label>
        <Input id="cardName" name="cardName" value={values.cardName} onChange={onChange} required />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={values.cardNumber}
          onChange={onChange}
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
      </div>
      <div>
        <label htmlFor="cardExpiry" className="block text-sm font-medium mb-1">Expiration Date</label>
        <Input
          id="cardExpiry"
          name="cardExpiry"
          value={values.cardExpiry}
          onChange={onChange}
          placeholder="MM/YY"
          required
        />
      </div>
      <div>
        <label htmlFor="cardCvc" className="block text-sm font-medium mb-1">CVC</label>
        <Input
          id="cardCvc"
          name="cardCvc"
          value={values.cardCvc}
          onChange={onChange}
          placeholder="CVC"
          required
        />
      </div>
    </div>
  </div>
);

export default PaymentForm;

