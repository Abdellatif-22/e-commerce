import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';

function CartSummary({ onCheckout }) {
  const { getCartTotal } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-4">
        <span>Subtotal</span>
        <span>{formatCurrency(getCartTotal())}</span>
      </div>
      <Button onClick={onCheckout} className="w-full">
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default CartSummary;