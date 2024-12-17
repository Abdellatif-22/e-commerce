import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Welcome to ShopHub
          </h1>
          <p className="text-xl text-gray-900 mb-12 max-w-2xl mx-auto">
            Discover our curated collection of premium products at amazing prices.
            Start shopping today and experience the difference.
          </p>
          <Link to="/products">
            <Button className="text-xl mb-12 mx-auto">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;