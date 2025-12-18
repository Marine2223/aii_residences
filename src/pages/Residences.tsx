import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ==== Import des images ====
import suitep1 from "../assets/suitep1.jpg";
import suitep2 from "../assets/suitep2.jpg";
import suitep3 from "../assets/suitep3.jpg";
import suitep4 from "../assets/suitep4.jpg";
import suitep5 from "../assets/suitep5.jpg";
import suitep6 from "../assets/suitep6.jpg";
import suitep7 from "../assets/suitep7.jpg";

import salon1 from "../assets/salon1.jpeg";
import salon2 from "../assets/salon2.jpeg";
import salon3 from "../assets/salon3.jpeg";
import salleB1 from "../assets/salleB1.jpeg";
import salleB2 from "../assets/salleB2.jpeg";

import suitp from "../assets/suitp.jpg";
import suitP1 from "../assets/suitP1.jpg";
import suitP2 from "../assets/suitP2.jpg";
import suitP3 from "../assets/suitP3.jpg";
import suitP4 from "../assets/suitP4.jpg";
import suitP5 from "../assets/suitP5.jpg";
import suitP6 from "../assets/suitP6.jpg";

import suit1 from "../assets/suit1.jpg";
import suite from "../assets/suite.jpg";
import suit2 from "../assets/suit2.jpg";
import suit3 from "../assets/suit3.jpg";
import suit4 from "../assets/suit4.jpg";
import suit6 from "../assets/suit6.jpg";
import suit7 from "../assets/suit7.jpg";
import suit8 from "../assets/suit8.jpg";

import ife2 from "../assets/ife2.jpeg";
import ife3 from "../assets/ife3.jpeg";
import ife4 from "../assets/ife4.jpeg";
import ife5 from "../assets/ife5.jpeg";
import ife6 from "../assets/ife6.jpeg";

import prenium11 from "../assets/prenium11.jpeg";
import prenium22 from "../assets/prenium22.jpeg";
import prenium33 from "../assets/prenium33.jpeg";
import prenium44 from "../assets/prenium44.jpeg";
import prenium55 from "../assets/prenium55.jpeg";



// ==== Interface ====
interface Residence {
  Prix: ReactNode;
  id: number;
  name: string;
  slides: {
    image: string;
    caption: string;
  }[];
  description: string;
}

// ==== Données résidences avec images importées ====
const residences: Residence[] = [
  {
    id: 1,
    name: "Chambre Prestige Sika",
    description: "Le sommet du luxe. Cette suite offre un salon privé, une cuisine équipée et une vue panoramique, idéale pour les longs séjours.",
    Prix: <span className="font-bold text-red-500 text-lg">À partir de 15.000 F CFA / nuit</span>,
    slides: [
      { image: suitep1, caption: "" },
      { image: suitep2, caption: "" },
      { image: suitep3, caption: "" },
      { image: suitep4, caption: "" },
      { image: suitep5, caption: "" },
      { image: suitep6, caption: "" },
      { image: suitep7, caption: "" },
    ],
  },
  {
    id: 2,
    name: "Suite Prestige Dessi",
    description: "Un confort optimal pour le professionnel exigeant. Espace de travail dédié, accès haut débit et service de conciergerie 24/7.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 20.000 F CFA / nuit</span>,
    slides: [
      { image: salon1, caption: "" },
      { image: salon2, caption: "" },
      { image: salon3, caption: "" },
      { image: salleB1, caption: "" },
      { image: salleB2, caption: "" },
    ],
  },
  {
    id: 3,
    name: "Chambre Exécutive Kaya",
    description: "Parfait pour les escapades en solo ou en couple. Intimité et design se rencontrent dans ce studio entièrement optimisé.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 12.000 F CFA / nuit</span>,
    slides: [
      { image: suitp, caption: "" },
      { image: suitP1, caption: "" },
      { image: suitP2, caption: "" },
      { image: suitP3, caption: "" },
      { image: suitP4, caption: "" },
      { image: suitP5, caption: "" },
      { image: suitP6, caption: "" },
    ],
  },
  {
    id: 4,
    name: "Suite Premium Marrakech",
    description: "Deux chambres séparées pour un séjour en famille sans compromis. Espace, sécurité et ambiance chaleureuse garantis.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 18.000 F CFA / nuit</span>,
    slides: [
      { image: suit1, caption: "" },
      { image: suite, caption: "" },
      { image: suit2, caption: "" },
      { image: suit3, caption: "" },
      { image: suit4, caption: "" },
      { image: suit6, caption: "" },
      { image: suit7, caption: "" },
      { image: suit8, caption: "" },
    ],
  },
  {
    id: 5,
    name: "Suite Prestige Ifè",
    description: "Un espace moderne avec un design industriel chic et une vue imprenable sur la côte. Idéal pour l'inspiration et la sérénité.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 20.000 F CFA / nuit</span>,
    slides: [
      { image: ife2, caption: "" },
      { image: ife3, caption: "" },
      { image: ife4, caption: "" },
      { image: ife5, caption: "" },
      { image: ife6, caption: "" },
    ],
  },
  {
    id: 6,
    name: "Chambre Prestige Nala",
    description: "L'option idéale combinant prix abordable et standards de qualité. Deux chambres séparées, salon et commodités complètes.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 12.000 F CFA / nuit</span>,
    slides: [
      { image: prenium11, caption: "" },
      { image: prenium22, caption: "" },
      { image: prenium33, caption: "" },
      { image: prenium44, caption: "" },
      { image: prenium55, caption: "" },
    ],
  },
];

// ==== Composant Lightbox ====
interface LightboxProps {
  slides: { image: string; caption: string }[];
  index: number;
  setLightbox: React.Dispatch<
    React.SetStateAction<{ slides: { image: string; caption: string }[]; index: number } | null>
  >;
}

const Lightbox = ({ slides, index, setLightbox }: LightboxProps) => {
  const navigateSlide = (direction: 1 | -1) => {
    const newIndex = (index + direction + slides.length) % slides.length;
    setLightbox({ slides, index: newIndex });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      else if (event.key === "ArrowRight") navigateSlide(1);
      else if (event.key === "ArrowLeft") navigateSlide(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, slides.length, setLightbox]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setLightbox(null)}
    >
      <motion.img
        key={index}
        src={slides[index].image}
        alt={`slide-${index}`}
        className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain cursor-default"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-10 text-white text-center text-lg bg-black/50 p-2 rounded">
        {slides[index].caption}
      </div>
      <button
        onClick={() => setLightbox(null)}
        className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition"
        aria-label="Fermer"
      >
        ✕
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateSlide(-1);
        }}
        className="absolute left-5 text-white text-5xl font-bold hover:text-lightorange transition"
        aria-label="Image précédente"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateSlide(1);
        }}
        className="absolute right-5 text-white text-5xl font-bold hover:text-lightorange transition"
        aria-label="Image suivante"
      >
        ›
      </button>
    </motion.div>
  );
};

// ==== Composant ImageSlider ====
function ImageSlider({
  slides,
  onImageClick,
}: {
  slides: { image: string; caption: string }[];
  onImageClick: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 2500);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const goToSlide = (slideIndex: number) => setIndex(slideIndex);

  return (
    <div
      className="relative w-full h-56 md:h-64 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full cursor-pointer" onClick={() => onImageClick(index)}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={slides[index].caption || `slide-${index}`}
            className="w-full h-full object-cover rounded-t-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 font-medium">
          {slides[index].caption}
        </div>
      </div>

      {isHovered && (
        <motion.div
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(i);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Aller à l'image ${i + 1}`}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ==== Composant principal Residences ====
export default function Residences() {
  const [lightbox, setLightbox] = useState<{
    slides: { image: string; caption: string }[];
    index: number;
  } | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center text-marine mb-12"
      >
        Nos Résidences <span className="text-lightorange">Exclusives</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {residences.map((res) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: res.id * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <ImageSlider slides={res.slides} onImageClick={(index) => setLightbox({ slides: res.slides, index })} />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-marine mb-3">{res.name}</h2>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{res.description}</p>

              <div className="mb-6 border-t pt-4 border-gray-100">{res.Prix}</div>

              <motion.button
                onClick={() => navigate("/Reservation")}
                className="w-full bg-marine text-white py-3 px-4 rounded-lg font-semibold hover:bg-lightorange transition shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver maintenant →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox slides={lightbox.slides} index={lightbox.index} setLightbox={setLightbox} />}
      </AnimatePresence>
    </div>
  );
}
