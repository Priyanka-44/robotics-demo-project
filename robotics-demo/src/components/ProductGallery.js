'use client';

import { useState } from 'react';

export default function ProductGallery({ images, name }) {

  const [selectedImage, setSelectedImage] = useState(0);

  return (

    <div className="bg-white p-6 rounded-3xl shadow-xl">

      {/* MAIN IMAGE */}
      <div className="w-full h-[550px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">

        <img
          src={images?.[selectedImage]?.asset?.url}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />

      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-4 gap-4 mt-6">

        {images?.map((img, index) => (

          <img
            key={index}
            src={img.asset?.url}
            alt="product"
            onClick={() => setSelectedImage(index)}
            className={`h-28 w-full object-contain bg-white rounded-xl border-2 cursor-pointer p-2 ${selectedImage === index
                ? 'border-blue-700'
                : 'border-gray-200'
              }`}
          />

        ))}

      </div>

    </div>

  );
}