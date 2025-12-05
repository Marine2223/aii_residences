// src/components/HeroCarousel.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import des images du carrousel
import espace1 from "../assets/espace1.jpg";
import chambre2 from "../assets/chambre2.jpg";
import vue from "../assets/jardin1.jpg";

const images = [espace1, chambre2, vue];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play du carrousel toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carrousel d'images */}
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Texte fixe au centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Vos Événements, Notre Scène de Prestige
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Des conférences d'élite aux célébrations les plus mémorables, nous offrons l'écrin parfait pour chaque occasion.
        </p>
      </div>
    </div>
  );
}
