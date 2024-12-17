import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function CartItemQuantity({ itemId, quantity }) {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => updateQuantity(itemId, quantity - 1)}
        className="p-1 rounded-md hover:bg-gray-100"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="px-2">{quantity}</span>
      <button
        onClick={() => updateQuantity(itemId, quantity + 1)}
        className="p-1 rounded-md hover:bg-gray-100"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}