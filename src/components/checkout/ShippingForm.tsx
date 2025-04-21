
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export interface ShippingFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ShippingFormProps {
  values: ShippingFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ values, onChange }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-heading font-bold mb-4">Shipping Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
        <Input id="firstName" name="firstName" value={values.firstName} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
        <Input id="lastName" name="lastName" value={values.lastName} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
        <Input id="phone" name="phone" value={values.phone} onChange={onChange} required />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
        <Textarea id="address" name="address" value={values.address} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
        <Input id="city" name="city" value={values.city} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium mb-1">State/Province</label>
        <Input id="state" name="state" value={values.state} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP/Postal Code</label>
        <Input id="zip" name="zip" value={values.zip} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
        <Input id="country" name="country" value={values.country} onChange={onChange} required />
      </div>
    </div>
  </div>
);

export default ShippingForm;

