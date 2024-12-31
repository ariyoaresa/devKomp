import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: Image[];
  initialIndex?: number;
}

export function ImageLightbox({ images, initialIndex = 0 }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90"
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
            onClick={handlePrevious}
          >
            <ChevronLeft size={36} />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
            onClick={handleNext}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}