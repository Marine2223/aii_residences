// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

// ========== ANIMATIONS ==========
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// ========== TYPES ==========
type AnimatedMenuIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

// ========== NAVBAR ==========
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleLinkClick = () => setIsOpen(false);

  const AnimatedMenuIcon = ({ isOpen, onClick }: AnimatedMenuIconProps) => (
    <motion.button
      className="md:hidden text-blanc text-3xl z-50 p-2"
      onClick={onClick}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      initial={false}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="x"
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: -90 }}
          >
            <X className="w-8 h-8 text-lightorange" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 90 }}
          >
            <Menu className="w-8 h-8 text-blanc" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="bg-marine fixed w-full top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-24">

          {/* --- LOGOS + NOM --- */}
          <div className="flex items-center gap-4">
            <img
              src="/3.png"
              className="w-16 h-14 cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
              alt="logo AII"
              onClick={() => setPreviewImage("/logo_AII.png")}
            />

            <div className="hidden lg:block text-white font-bold text-base leading-snug tracking-wider">
              ACC'S RESIDENCE
            </div>

            <img
              src="/logo_acc.jpg"
              className="w-16 h-14 cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
              alt="logo ACC"
              onClick={() => setPreviewImage("/logo_acc.jpg")}
            />
          </div>

          {/* --- MENU DESKTOP --- */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 bg-white text-marine px-6 py-3 rounded-full shadow-lg border border-gray-100">
            <li className="font-semibold"><Link to="/" className="hover:text-lightorange">Accueil</Link></li>
            <li className="font-semibold"><Link to="/Residences" className="hover:text-lightorange">Résidences</Link></li>
            <li className="font-semibold"><Link to="/apropos" className="hover:text-lightorange">À Propos</Link></li>
            <li className="font-semibold">
              <Link
                to="/reservation"
                className="bg-lightorange text-white px-4 py-1.5 rounded-full hover:bg-orange-600 shadow-md"
              >
                Réservations
              </Link>
            </li>
            <li className="font-semibold"><Link to="/contact" className="hover:text-lightorange">Contact</Link></li>
          </ul>

          {/* --- HAMBURGER --- */}
          <AnimatedMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* --- MENU MOBILE --- */}
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
              <motion.li variants={itemVariants} className="py-2 border-b border-white/10">
                <Link to="/" onClick={handleLinkClick}>Accueil</Link>
              </motion.li>

              <motion.li variants={itemVariants} className="py-2 border-b border-white/10">
                <Link to="/Residences" onClick={handleLinkClick}>Résidences</Link>
              </motion.li>

              <motion.li variants={itemVariants} className="py-2 border-b border-white/10">
                <Link to="/apropos" onClick={handleLinkClick}>À Propos</Link>
              </motion.li>

              <motion.li variants={itemVariants} className="py-2 border-b border-white/10">
                <Link to="/reservation" onClick={handleLinkClick}>Réservations</Link>
              </motion.li>

              <motion.li variants={itemVariants} className="py-2">
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[999]"
            onClick={() => setPreviewImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={previewImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
