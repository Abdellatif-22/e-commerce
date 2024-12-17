import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';

function ProductInfo({ product, onAddToCart }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-indigo-600">
          {formatCurrency(product.price)}
        </span>
        <Button onClick={onAddToCart}>
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
      </div>
      
      <div className="border-t pt-6 mt-6">
        <h3 className="text-lg font-semibold mb-2">Product Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-600">Category:</span>
            <p className="font-medium capitalize">{product.category}</p>
          </div>
          <div>
            <span className="text-gray-600">Rating:</span>
            <p className="font-medium">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;