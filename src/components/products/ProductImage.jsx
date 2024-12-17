import React from 'react';

function ProductImage({ image, title }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-contain"
      />
    </div>
  );
}

export default ProductImage;