'use client';
import React from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/StateContext';
import { client } from '@/lib/client';

// Reusable input component to reduce repetition
const FormInput = ({ name, type, placeholder, value, onChange }) => (
  <div className="w-full mb-3">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3.5 rounded-lg bg-gray-200 border border-black
                 outline-none transition duration-300 ease-in-out
                 hover:shadow-md focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

// Reusable select component
const FormSelect = ({ name, value,onChange, options }) => (
  <div className="w-full mb-3">
    <select
      name={name}
      value={value}
      onChange={onChange}

      className="w-full px-4 py-3.5 rounded-lg bg-gray-200 border border-black
                 outline-none transition duration-300 ease-in-out
                 hover:shadow-md focus:ring-2 focus:ring-orange-500"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const Cashondelivaryc = () => {
  const { totalPrice, cartItems } = useStateContext();
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    address: '',
    phonenumber: '',
    whatsapp: '',
    city: '',
    country: 'Pakistan', // Default value for the select field
  });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        phonenumber: formData.phonenumber,
        whatsapp: formData.whatsapp,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        cartItems: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          subtotal: totalPrice,
          image: item.image?.map((img) => ({ url: img.url })) || [],
        })),
      };

      await client.create(contact);
      setIsFormSubmitted(true);
    } catch (err) {
      console.error('Order submission failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { name: 'username', type: 'text', placeholder: 'Your Name' },
    { name: 'email', type: 'email', placeholder: 'Your Email' },
    { name: 'phonenumber', type: 'tel', placeholder: 'Phone Number' },
    { name: 'whatsapp', type: 'tel', placeholder: 'WhatsApp' },
    { name: 'address', type: 'text', placeholder: 'Your Address' },
    { name: 'city', type: 'text', placeholder: 'City' },
  ];

  if (isFormSubmitted) {
    return (
      <div className="min-h-[60vh] bg-white">
        <div
          className="max-w-[1000px] mx-auto mt-40 bg-gray-200 p-12 rounded-2xl
                      flex flex-col items-center justify-center
                      md:p-8 sm:w-[370px] sm:mt-24 sm:p-5 sm:h-[350px]"
        >
          <span className="text-green-600 text-4xl mb-4">
            <BsBagCheckFill />
          </span>

          <h2
            className="text-[#324d67] text-4xl font-black capitalize mb-4
                         sm:text-lg"
          >
            Thank you for your order!
          </h2>

          <p className="text-base font-semibold text-center mb-4">
            Check your email inbox for the receipt.
          </p>

          <p className="text-base font-semibold text-center mb-8">
            If you have any questions, please email
            <a
              href="mailto:bunnytota3@gmail.com"
              className="ml-1.5 text-orange-500 hover:underline"
            >
              bunnytota3@gmail.com
            </a>
          </p>

          <Link
            href="/"
            className="w-full max-w-md px-3 py-2.5 rounded-2xl bg-orange-500 
                         text-white text-xl uppercase text-center
                         transform transition duration-500 hover:scale-110
                         sm:ml-4"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mx-auto justify-center items-center mt-36">
      <div className="w-3/5 flex flex-col mx-8 my-4 md:w-full md:mx-0">
        <div className="w-full space-y-3">
          {/* Country Selector */}
          <FormSelect
            name="country"
            value={formData.country}
            onChange={handleChangeInput}
            options={['Pakistan']} // Only one option
          />
          {/* Other form fields */}
          {formFields.map((field) => (
            <FormInput
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChangeInput}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="px-8 py-4 mt-8 rounded-lg bg-gray-200 text-gray-700
                   font-medium transition-all duration-300 ease-in-out
                   hover:bg-orange-500 hover:text-white transform
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Cashondelivaryc;
