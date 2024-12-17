import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">{formatCurrency(item.price)}</p>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 text-red-500 hover:bg-red-50 rounded-md ml-4"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-lg font-semibold">
        {formatCurrency(item.price * item.quantity)}
      </div>
    </div>
  );
}

export default CartItem;