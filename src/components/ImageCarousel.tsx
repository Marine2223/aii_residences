import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4;

  const handleNext = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full mx-auto mt-5">

      {/* --- Filtres flous gauche et droite --- */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/70  z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70  z-20" />

      {/* --- Bouton précédent --- */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-marine text-white p-3 rounded-full shadow hover:bg-opacity-80"
      >
        <FiChevronLeft size={26} />
      </button>

      {/* --- Zone des images --- */}
      <div className="overflow-hidden w-full ">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(images.length * 100) / visibleCount}%`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full p-2 "
              style={{ width: `${100 / visibleCount}%` }}
            >
              <img
                src={img}
                className="w-full h-64 object-cover  shadow"
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Bouton suivant --- */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-marine text-white p-3 rounded-full shadow hover:bg-opacity-80"
      >
        <FiChevronRight size={26} />
      </button>

    </div>
  );
}
