import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Définition de l'interface (laisser tel quel)
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

// Données des résidences (CORRIGÉES avec des IDs et des noms uniques)
const residences: Residence[] = [
  {
    id: 1,
    name: "Suite Présidentielle VIP",
    description: "Le sommet du luxe. Cette suite offre un salon privé, une cuisine équipée et une vue panoramique, idéale pour les longs séjours.",
    Prix: <span className="font-bold text-red-500 text-lg">À partir de 15.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/suitep1.jpg", caption: "Salon VIP spacieux" },
      { image: "../src/assets/suitep2.jpg", caption: "Chambre principale luxueuse" },
      { image: "../src/assets/suitep3.jpg", caption: "Cuisine américaine équipée" },
      { image: "../src/assets/suitep4.jpg", caption: "Vue panoramique" },
      { image: "../src/assets/suitep5.jpg", caption: "Détails raffinés" },
      { image: "../src/assets/suitep6.jpg", caption: "Salle de bain en marbre" },
      { image: "../src/assets/suitep7.jpg", caption: "Espace bureau" },
    ],
  },
  {
    id: 2,
    name: "Appartement d'Affaires Premium",
    description: "Un confort optimal pour le professionnel exigeant. Espace de travail dédié, accès haut débit et service de conciergerie 24/7.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 10.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/salon1.jpeg", caption: "Espace salon moderne" },
      { image: "../src/assets/salon2.jpeg", caption: "Coin repas élégant" },
      { image: "../src/assets/salon3.jpeg", caption: "Détail du mobilier" },
      { image: "../src/assets/salleB1.jpeg", caption: "Salle de bain design" },
      { image: "../src/assets/salleB2.jpeg", caption: "Douche italienne" },
    ],
  },
  {
    id: 3,
    name: "Studio Exécutif Luxe",
    description: "Parfait pour les escapades en solo ou en couple. Intimité et design se rencontrent dans ce studio entièrement optimisé.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 10.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/suitp.jpg", caption: "Lit King Size" },
      { image: "../src/assets/suitP1.jpg", caption: "Ambiance cosy" },
      { image: "../src/assets/suitP2.jpg", caption: "Coin lecture" },
      { image: "../src/assets/suitP3.jpg", caption: "Détail de la décoration" },
      { image: "../src/assets/suitP4.jpg", caption: "Luminosité naturelle" },
      { image: "../src/assets/suitP5.jpg", caption: "Rangements intégrés" },
      { image: "../src/assets/suitP6.jpg", caption: "Vue de la fenêtre" },
    ],
  },
  {
    id: 4,
    name: "Appartement Familial Confort",
    description: "Deux chambres séparées pour un séjour en famille sans compromis. Espace, sécurité et ambiance chaleureuse garantis.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 15.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/suit1.jpg", caption: "Grande chambre double" },
      { image: "../src/assets/suite.jpg", caption: "Chambre enfants" },
      { image: "../src/assets/suit2.jpg", caption: "Salon détente" },
      { image: "../src/assets/suit3.jpg", caption: "Salle de bain moderne" },
      { image: "../src/assets/suit4.jpg", caption: "Balcon privé" },
      { image: "../src/assets/suit6.jpg", caption: "Détail du mobilier" },
      { image: "../src/assets/suit7.jpg", caption: "Vue du balcon" },
      { image: "../src/assets/suit8.jpg", caption: "Coin repas familial" },
    ],
  },
  {
    id: 5,
    name: "Loft Design - Vue Mer",
    description: "Un espace moderne avec un design industriel chic et une vue imprenable sur la côte. Idéal pour l'inspiration et la sérénité.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 15.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/prenium.jpeg", caption: "Espace ouvert Loft" },
      { image: "../src/assets/prenium2.jpeg", caption: "Vue depuis le lit" },
      { image: "../src/assets/prenium3.jpeg", caption: "Détails architecturaux" },
      { image: "../src/assets/prenium1.jpeg", caption: "Coin salon design" },
      { image: "../src/assets/prenium4.jpeg", caption: "Espace de vie" },
    ],
  },
  {
    id: 6,
    name: "Appartement- Standard Élite",
    description: "L'option idéale combinant prix abordable et standards de qualité. Deux chambres séparées, salon et commodités complètes.",
    Prix: <span className="font-semibold text-marine text-lg">À partir de 15.000 F CFA / nuit</span>,
    slides: [
      { image: "../src/assets/prenium11.jpeg", caption: "Salon simple et élégant" },
      { image: "../src/assets/prenium22.jpeg", caption: "Chambre 1" },
      { image: "../src/assets/prenium33.jpeg", caption: "Chambre 2" },
      { image: "../src/assets/prenium44.jpeg", caption: "Cuisine fonctionnelle" },
      { image: "../src/assets/prenium55.jpeg", caption: "Détail de la décoration" },
    ],
  },
];



// ==== Composant Lightbox (Séparé pour plus de clarté) ====

interface LightboxProps {
    slides: { image: string; caption: string }[];
    index: number;
    setLightbox: React.Dispatch<React.SetStateAction<{ slides: { image: string; caption: string }[]; index: number } | null>>;
}

const Lightbox = ({ slides, index, setLightbox }: LightboxProps) => {
    
    // Fonction pour naviguer entre les images
    const navigateSlide = (direction: 1 | -1) => {
        const newIndex = (index + direction + slides.length) % slides.length;
        setLightbox({
            slides: slides,
            index: newIndex,
        });
    };

    // Gestion du clavier (ESC pour fermer, flèches pour naviguer)
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setLightbox(null);
            } else if (event.key === 'ArrowRight') {
                navigateSlide(1);
            } else if (event.key === 'ArrowLeft') {
                navigateSlide(-1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [index, slides.length, setLightbox]);
    
    return (
        <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)} // Fermer en cliquant en dehors de l'image
        >
            <motion.img
                key={index}
                src={slides[index].image}
                alt={`slide-${index}`}
                className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur l'image
            />

            {/* Caption */}
            <div className="absolute bottom-10 text-white text-center text-lg bg-black/50 p-2 rounded">
                {slides[index].caption}
            </div>

            {/* Bouton Fermer */}
            <button
                onClick={() => setLightbox(null)}
                className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition"
                aria-label="Fermer"
            >
                ✕
            </button>

            {/* Flèche précédente */}
            <button
                onClick={(e) => { e.stopPropagation(); navigateSlide(-1); }}
                className="absolute left-5 text-white text-5xl font-bold hover:text-lightorange transition"
                aria-label="Image précédente"
            >
                ‹
            </button>

            {/* Flèche suivante */}
            <button
                onClick={(e) => { e.stopPropagation(); navigateSlide(1); }}
                className="absolute right-5 text-white text-5xl font-bold hover:text-lightorange transition"
                aria-label="Image suivante"
            >
                ›
            </button>
        </motion.div>
    );
};


// ==========================================================
// ==== Composant ImageSlider (Amélioré) ====
// ==========================================================
function ImageSlider({
  slides,
  onImageClick,
}: {
  slides: { image: string; caption: string }[];
  onImageClick: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Défilement automatique uniquement au survol
  useEffect(() => {
    if (!isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500); // Temps légèrement augmenté pour plus de confort
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);
  
  // Fonction pour les boutons de navigation (points)
  const goToSlide = (slideIndex: number) => {
      setIndex(slideIndex);
      // Réinitialise le défilement automatique lors d'une navigation manuelle
  };

  return (
    <div
      className="relative w-full h-56 md:h-64 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div 
            className="w-full h-full cursor-pointer"
            onClick={() => onImageClick(index)} // Clic sur toute la zone pour Lightbox
        >
            <AnimatePresence initial={false} mode="wait">
                <motion.img
                    key={index} // La clé change pour déclencher l'animation
                    src={slides[index].image}
                    alt={slides[index].caption || `slide-${index}`}
                    className="w-full h-full object-cover rounded-t-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }} // Transition plus douce (fondu)
                />
            </AnimatePresence>

            {/* Légende (Caption) */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 font-medium">
                {slides[index].caption}
            </div>
        </div>

      {/* Indicateurs / Boutons de navigation (seulement si survolé) */}
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
              onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
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


// ==========================================================
// ==== Composant principal Residences ====
// ==========================================================
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
        Nos Résidences <span className="text-lightorange">Exclusives</span>
      </motion.h1>

      {/* ==== Grille des résidences ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {residences.map((res) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: res.id * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <ImageSlider 
                slides={res.slides} 
                onImageClick={(index) => setLightbox({ slides: res.slides, index })} 
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-marine mb-3">{res.name}</h2>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{res.description}</p>
              
              {/* Prix mis en évidence */}
              <div className="mb-6 border-t pt-4 border-gray-100">
                {res.Prix}
              </div>
              
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

      {/* ==== Lightbox (appel du composant séparé) ==== */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox 
            slides={lightbox.slides} 
            index={lightbox.index} 
            setLightbox={setLightbox} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}