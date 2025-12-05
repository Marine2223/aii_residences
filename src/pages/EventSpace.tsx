// src/pages/EventSpace.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Briefcase, Heart, Utensils, Zap } from 'lucide-react';
import bgImage from "../assets/espace.jpg";

import espace2 from "../assets/espace2.jpg";
import espace3 from "../assets/espace3.jpg";
import espace4 from "../assets/espace4.jpg";

// --- Typage pour Framer Motion Variants ---
type VariantsType = {
  offscreen: { y: number; opacity: number };
  onscreen: { y: number; opacity: number; transition: any };
};

const cardVariants: VariantsType = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

// --- Données ---
const EVENT_SPACES = [
  {
    icon: Users,
    title: "Le Grand Salon Vénus",
    description: "Parfait pour les cocktails de haut niveau ou les galas intimes. Capacité de 150 personnes debout.",
    features: ["Éclairage personnalisable", "Accès privé", "Sonorisation intégrée"],
    imagePath: espace2,
  },
  {
    icon: Briefcase,
    title: "Salle de Conférence Jupiter",
    description: "Un espace modulable pour vos séminaires, workshops ou réunions de direction. Équipement technologique de pointe.",
    features: ["Vidéoprojecteur 4K", "Internet très haut débit", "Configuration en U ou Théâtre"],
    imagePath: espace3,
  },
  {
    icon: Heart,
    title: "Terrasse Océanique (Mariages)",
    description: "L'endroit idéal pour célébrer un mariage de rêve au coucher du soleil avec vue imprenable.",
    features: ["Cadre extérieur paysager", "Espace traiteur dédié", "Piste de danse"],
    imagePath: espace4,
  },
];

export default function EventSpace() {
  // Lightbox pour agrandir les images
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(null);

  return (
    <div className="pb-12 bg-gray-50 min-h-screen">
      
      {/* HERO */}
      <div className="relative h-[100vh] md:h-[100vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="absolute inset-0 bg-marine/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            Vos Événements, Notre Scène de Prestige
          </h1>
          <p className="text-xl font-light text-gray-200">
            Des conférences d'élite aux célébrations les plus mémorables, nous offrons l'écrin parfait pour chaque occasion.
          </p>
          <Link
            to="/reservation"
            onClick={() => localStorage.setItem('reservationType', 'Espace événementiel')}
            className="mt-6 inline-block bg-lightorange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Demander un Devis Personnalisé
          </Link>
        </motion.div>
      </div>

      <hr className="my-10 border-lightorange/50" />

      {/* CARDS */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-marine text-center mb-10">
          Découvrez la Polyvalence de Nos Espaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_SPACES.map((space) => {
            const Icon = space.icon;
            return (
              <motion.div
                key={space.title}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 cursor-pointer group"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={space.imagePath}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                    onClick={() => setLightbox({ src: space.imagePath, alt: space.title })}
                  />
                  <div className="absolute inset-0 bg-marine/10 group-hover:bg-marine/0 transition-colors duration-500"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <Icon className="w-8 h-8 text-lightorange mb-2" />
                  <h3 className="text-xl font-bold text-marine mb-3">{space.title}</h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>

                  <ul className="space-y-2 mt-4 text-sm border-t pt-4">
                    {space.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-800">
                        <Zap className="w-4 h-4 text-lightorange mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <hr className="my-10 border-lightorange/50" />

      {/* SERVICES */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-marine mb-6">
          Un Service Hôtelier 5 Étoiles pour Vos Invités
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          Nous proposons une gamme complète de services pour garantir le succès et le confort de votre événement.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <ServicePill icon={Utensils} title="Restauration & Traiteur Gourmet" />
          <ServicePill icon={Briefcase} title="Assistance Logistique Dédiée" />
          <ServicePill icon={Users} title="Hébergement de Luxe sur Site" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/reservation"
            className="mt-12 inline-block bg-marine hover:bg-lightorange text-white font-bold text-xl px-10 py-4 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03]"
          >
            Réserver Votre Espace Maintenant
          </Link>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // empêche la fermeture en cliquant sur l'image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Composant utilitaire pour les "pills" services
const ServicePill = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center bg-white/50 border border-marine/20 px-4 py-2 rounded-full shadow-md text-marine font-medium">
    <Icon className="w-5 h-5 text-lightorange mr-2" />
    {title}
  </div>
);
