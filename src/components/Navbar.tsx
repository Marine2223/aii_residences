// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import de Framer Motion
import { Menu, X } from 'lucide-react'; // Icônes professionnelles (vous aurez besoin d'installer lucide-react)

// Si vous n'utilisez pas lucide-react, vous pouvez utiliser react-icons ou simplement l'animation JSX.

// Variants pour l'animation du menu mobile (glissement vers le bas)
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Variants pour l'animation des éléments de la liste
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Composant pour l'icône de la barre de navigation animée (pour un look professionnel)
  const AnimatedMenuIcon = ({ isOpen, onClick }) => (
    <motion.button
      className="md:hidden text-blanc text-3xl z-50 p-2"
      onClick={onClick}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div key="x" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
            <X className="w-8 h-8 text-lightorange" />
          </motion.div>
        ) : (
          <motion.div key="menu" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
            <Menu className="w-8 h-8 text-blanc" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <nav className="bg-marine fixed w-full top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-24">

        {/* --- LOGOS + NOM --- */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex items-center gap-2">
            <img
              src="/logo_AII.png"
              className="w-14 h-14 object-cover transition-transform duration-300 group-hover:scale-105"
              alt="logo AII"
            />
          </div>

          <div className="hidden lg:block text-white font-bold text-base leading-snug tracking-wider">
            AFRICAINE DES INFRASTRUCTURES <br /> ET DES INVESTISSEMENTS & ACC's RESIDENCE
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/logo_acc.jpg"
              className="w-14 h-14 object-cover transition-transform duration-300 group-hover:scale-105"
              alt="logo ACC"
            />
          </div>
        </Link>


        {/* --- MENU DESKTOP --- */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 bg-white text-marine px-6 py-3 rounded-full shadow-lg border border-gray-100">
          <li className="font-semibold"><Link to="/" className="hover:text-lightorange transition-colors duration-200">Accueil</Link></li>
          <li className="font-semibold"><Link to="/Residences" className="hover:text-lightorange transition-colors duration-200">Résidences</Link></li>
          <li className="font-semibold"><Link to="/apropos" className="hover:text-lightorange transition-colors duration-200">À Propos</Link></li>
          <li className="font-semibold">
             <Link 
                to="/reservation" 
                className="bg-lightorange text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
             >
                Réservations
             </Link>
          </li>
          <li className="font-semibold"><Link to="/contact" className="hover:text-lightorange transition-colors duration-200">Contact</Link></li>
        </ul>

        {/* --- HAMBURGER --- */}
        <AnimatedMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        
      </div>

      {/* --- MENU MOBILE (Animé avec Framer Motion) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-marine/95 text-blanc flex flex-col space-y-2 px-4 py-4 border-t border-white/20 overflow-hidden"
          >
            {/* Répétez Link et utilisez itemVariants pour chaque élément */}
            <motion.li variants={itemVariants} className="px-4 py-2 text-lg border-b border-white/10 hover:bg-white/10">
              <Link to="/" onClick={handleLinkClick}>Accueil</Link>
            </motion.li>
            <motion.li variants={itemVariants} className="px-4 py-2 text-lg border-b border-white/10 hover:bg-white/10">
              <Link to="/Residences" onClick={handleLinkClick}>Résidences</Link>
            </motion.li>
            <motion.li variants={itemVariants} className="px-4 py-2 text-lg border-b border-white/10 hover:bg-white/10">
              <Link to="/apropos" onClick={handleLinkClick}>À Propos</Link>
            </motion.li>
            <motion.li variants={itemVariants} className="px-4 py-2 text-lg border-b border-white/10 hover:bg-white/10">
              <Link to="/reservation" onClick={handleLinkClick}>Réservations</Link>
            </motion.li>
            <motion.li variants={itemVariants} className="px-4 py-2 text-lg hover:bg-white/10">
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}