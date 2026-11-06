import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-80 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col items-center justify-center text-gray-400">
        <ImageIcon size={48} className="mb-2 opacity-50" />
        <p className="text-sm">No preview images available</p>
      </div>
    );
  }

  const hasMultiple = images.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Main Image Frame */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100/60 overflow-hidden flex items-center justify-center p-3 sm:p-6 shadow-sm">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} mockup screen ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-md transition-opacity duration-300"
          onError={(e) => {
            // Elegant placeholder if custom image is missing
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%23e8eeff" width="600" height="400"/><text fill="%232563eb" font-family="sans-serif" font-size="24" font-weight="bold" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Project Preview</text></svg>';
          }}
        />

        {/* Carousel Arrow Controls */}
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-navy-800 shadow-md flex items-center justify-center hover:bg-white hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-navy-800 shadow-md flex items-center justify-center hover:bg-white hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Pagination Indicators */}
      {hasMultiple && (
        <div className="flex items-center space-x-2 mt-4" role="tablist">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-blue-200 hover:bg-blue-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={currentIndex === idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};