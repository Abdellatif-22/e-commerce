import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProduct } from '../hooks/useProduct';
import BackButton from '../components/ui/BackButton';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ProductImage from '../components/products/ProductImage';
import ProductInfo from '../components/products/ProductInfo';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error loading product
        </h2>
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImage image={product.image} title={product.title} />
        <ProductInfo 
          product={product} 
          onAddToCart={() => addToCart(product)} 
        />
      </div>
    </div>
  );
}

export default ProductDetails;