import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/products/${product.id}`}>
        <div className="relative pb-[100%]">
          <img
            src={product.image}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full object-contain p-4"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            {formatCurrency(product.price)}
          </span>
          <Button onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;