// src/components/HeroCarousel.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import espace1 from "../assets/espace1.jpg";
import chambre2 from "../assets/chambre2.jpg";
import vue from "../assets/jardin1.jpg";
import { Link } from "react-router-dom";

const images = [espace1, chambre2, vue];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto défilement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- Effet parallax sur le texte ---
  const { scrollY } = useScroll();

  // Le texte monte légèrement quand on scrolle
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  // Le texte devient un tout petit peu plus transparent
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
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

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Texte animé au scroll */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
      >

        <div className="marquee text-5xl md:text-7xl font-extrabold text-white mb-4">
          <span>Le luxe du "chez-soi" sans les contraintes.</span>
        </div>
        <p className="text-xl text-gray-200 max-w-2xl">
          Plus qu'un lieu, une atmosphère. Découvrez des cocons chaleureux pour vos séjours en au Bénin.
        </p>
        <Link
            to="/contact"
            onClick={() => localStorage.setItem('reservationType', 'Espace événementiel')}
            className="mt-6 inline-block bg-lightorange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Contactez-nous maintenant
          </Link>
      </motion.div>

    </div>
  );
}
