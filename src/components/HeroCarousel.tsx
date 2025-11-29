// src/components/HeroCarousel.jsx (ou .tsx)

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

// --- Importations d'images ---
// (Ces imports doivent correspondre à vos chemins réels)
import bgImage from "../assets/chambre2.jpg"; 
import espace1 from "../assets/espace1.jpg";
import vue from "../assets/jardin1.jpg";

// Définir les données du carrousel : image, titre, sous-titre, et le lien du bouton.
const SLIDE_DATA = [
  {
    imageName: 'bgImage', 
    title: "L'Art de l'Accueil Redéfini",
    subtitle: "Vivez l'immersion sans compromis. Nos résidences de prestige sont le sanctuaire de confort parfait pour explorer notre pays.",
    buttonText: "Planifiez votre Voyage d'Exception",
    link: "/contact",
  },
  {
    imageName: 'espace1', 
    title: "Magnifiez Vos Événements",
    subtitle: "Du lancement exclusif au mariage de rêve : des espaces orchestrés avec une précision et un raffinement internationaux.",
    buttonText: "Organiser un Événement",
    link: "/evenements",
  },
  {
    imageName: 'vue', 
    title: "Votre Porte d'Entrée sur l'Afrique",
    subtitle: "Découvrez l'authenticité et la richesse culturelle en toute sérénité, supporté par notre conciergerie haut de gamme.",
    buttonText: "Découvrir Nos Services",
    link: "/services",
  },
];

// Mapping des noms d'images vers les variables importées
const IMAGE_MAP = {
    bgImage: bgImage,
    espace1: espace1,
    vue: vue,
};


// Variants pour l'animation du texte (disparition/apparition rapide)
const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: { 
    opacity: 1, 
    y: 0, 
    transition: { 
        delay: 0.5, 
        duration: 0.8, 
        ease: "easeOut" 
    } 
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

// Composant HeroCarousel
export default function HeroCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gérer le défilement automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
    }, 7000); // Change toutes les 7 secondes

    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDE_DATA[currentIndex];
  const currentImageUrl = IMAGE_MAP[currentSlide.imageName] || bgImage;

  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center text-white -mt-16 overflow-hidden"
    >
        {/* AnimatePresence gère la transition des éléments qui montent/descendent du DOM */}
        <AnimatePresence initial={false} mode="wait">
            {/* Image de fond avec transition */}
            <motion.div
                key={currentIndex}
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${currentImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", 
                }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.5 } }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Superposition marine */}
            <div className="absolute inset-0 bg-marine/60 backdrop-blur-[1px]"></div> 

            {/* Contenu principal du texte */}
            <div className="relative z-10 px-4 md:px-8 text-center max-w-5xl mx-auto">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.title} // La clé change pour déclencher l'animation
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={textVariants}
                    >
                        {/* Titre */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                            {currentSlide.title}
                        </h1>

                        {/* Paragraphe */}
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light">
                            {currentSlide.subtitle}
                        </p>

                        {/* Bouton d'action */}
                        <motion.button
                            onClick={() => navigate(currentSlide.link)}
                            className="bg-lightorange hover:bg-orange-500 transition duration-300 transform hover:scale-[1.03] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-2xl uppercase tracking-wider"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {currentSlide.buttonText}
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </AnimatePresence>
    </section>
  );
}