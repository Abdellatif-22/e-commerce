import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      Back to Products
    </button>
  );
}

export default BackButton;