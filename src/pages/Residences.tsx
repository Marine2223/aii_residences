import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const residences: Residence[] = [
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/suitep1.jpg", caption: "" },
      { image: "../src/assets/suitep2.jpg", caption: "" },
      { image: "../src/assets/suitep3.jpg", caption: "" },
      { image: "../src/assets/suitep4.jpg", caption: "" },
      { image: "../src/assets/suitep5.jpg", caption: "" },
      { image: "../src/assets/suitep6.jpg", caption: "" },
      { image: "../src/assets/suitep7.jpg", caption: "" },
    ],
  },
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/salon1.jpeg", caption: "" },
      { image: "../src/assets/salon2.jpeg", caption: "" },
      { image: "../src/assets/salon3.jpeg", caption: "" },
      { image: "../src/assets/salleB1.jpeg", caption: "" },
      { image: "../src/assets/salleB2.jpeg", caption: "" },
    ],
  },
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/suitp.jpg", caption: "" },
      { image: "../src/assets/suitP1.jpg", caption: "" },
      { image: "../src/assets/suitP2.jpg", caption: "" },
      { image: "../src/assets/suitP3.jpg", caption: "" },
      { image: "../src/assets/suitP4.jpg", caption: "" },
      { image: "../src/assets/suitP5.jpg", caption: "" },
      { image: "../src/assets/suitP6.jpg", caption: "" },
    ],
  },
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/suit1.jpg", caption: "" },
      { image: "../src/assets/suite.jpg", caption: "" },
      { image: "../src/assets/suit2.jpg", caption: "" },
      { image: "../src/assets/suit3.jpg", caption: "" },
      { image: "../src/assets/suit4.jpg", caption: "" },
      { image: "../src/assets/suit6.jpg", caption: "" },
      { image: "../src/assets/suit7.jpg", caption: "" },
      { image: "../src/assets/suit8.jpg", caption: "" },
    ],
  },
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/prenium.jpeg", caption: "" },
      { image: "../src/assets/prenium2.jpeg", caption: "" },
      { image: "../src/assets/prenium3.jpeg", caption: "" },
      { image: "../src/assets/prenium1.jpeg", caption: "" },
      { image: "../src/assets/prenium4.jpeg", caption: "" },
    ],
  },
  {
    id: 1,
    name: "Appartement luxieux ",
    description:
      "Cet appartement meublé offre tout le confort nécessaire pour un séjour agréable. La chambre principale est élégamment décorée...",
    Prix: "Prix promotionnel : 10.000f / nuitée",
    slides: [
      { image: "../src/assets/prenium11.jpeg", caption: "" },
      { image: "../src/assets/prenium22.jpeg", caption: "" },
      { image: "../src/assets/prenium33.jpeg", caption: "" },
      { image: "../src/assets/prenium44.jpeg", caption: "" },
      { image: "../src/assets/prenium55.jpeg", caption: "" },
    ],
  },
  // Tu peux garder les autres résidences identiques...
];

export default function Residences() {
  const [lightbox, setLightbox] = useState<{
    slides: { image: string; caption: string }[];
    index: number;
  } | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      {/* ==== Titre principal ==== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold text-center text-marine mb-12"
      >
        Nos Résidences spéciales pour vos séjours en Afrique
      </motion.h1>

      {/* ==== Grille des résidences ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {residences.map((res) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: res.id * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <ImageSlider slides={res.slides} onImageClick={(index) => setLightbox({ slides: res.slides, index })} />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-marine mb-2">{res.name}</h2>
              <p className="text-gray-600 mb-4">{res.description}</p>
              <p className="text-gray-600 mb-4">{res.Prix}</p>
              <button
                onClick={() => navigate("/Reservation")}
                className="bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition"
              >
                Réserver maintenant
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ==== Lightbox (image plein écran) ==== */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={lightbox.index}
              src={lightbox.slides[lightbox.index].image}
              alt="slide"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Caption */}
            <div className="absolute bottom-10 text-white text-center text-lg">
              {lightbox.slides[lightbox.index].caption}
            </div>

            {/* Bouton Fermer */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            {/* Flèche précédente */}
            <button
              onClick={() =>
                setLightbox({
                  ...lightbox,
                  index: (lightbox.index - 1 + lightbox.slides.length) % lightbox.slides.length,
                })
              }
              className="absolute left-5 text-white text-5xl font-bold hover:text-lightorange"
            >
              ‹
            </button>

            {/* Flèche suivante */}
            <button
              onClick={() =>
                setLightbox({
                  ...lightbox,
                  index: (lightbox.index + 1) % lightbox.slides.length,
                })
              }
              className="absolute right-5 text-white text-5xl font-bold hover:text-lightorange"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==== Composant ImageSlider ==== */
function ImageSlider({
  slides,
  onImageClick,
}: {
  slides: { image: string; caption: string }[];
  onImageClick: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // défilement automatique
  useEffect(() => {
    if (!isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  return (
    <div
      className="relative w-full h-56 md:h-64 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick(index)}
    >
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: i === index ? 1 : 0,
            x: i === index ? 0 : -50,
          }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slide.image}
            alt={`slide-${i}`}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3">
            {slide.caption}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
