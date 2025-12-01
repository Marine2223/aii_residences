// src/pages/Home.tsx (ou .jsx)

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // On garde motion car il est utilisé dans les autres sections
import ImageCarousel from "../components/ImageCarousel"; 
import HeroCarousel from "../components/HeroCarousel"; // <-- NOUVEL IMPORT

// --- Importations d'images (Gardons seulement celles utilisées DANS ce fichier) ---

import espace1 from "../assets/espace1.jpg";
import chambre2 from "../assets/chambre2.jpg";
import vue from "../assets/jardin1.jpg";

import chambre from "../assets/jardin2.jpg";
import espace from "../assets/jardin3.jpg";
import jardin from "../assets/jardin4.jpg";


// --- Définition des animations Framer Motion (pour les sections ci-dessous) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Composant principal ---
export default function Home() {
  const navigate = useNavigate();

  // Liste des images pour le carrousel de la Galerie (Section 4)
  const carouselImages = [chambre, chambre2, espace1, vue, jardin, espace];

  return (
    <div className="overflow-hidden">
      
      {/*-- SECTION 1 : Bannière principale (CARROUSEL) ---
        (Utilise le composant HeroCarousel importé)
      */}
      <HeroCarousel /> 
      
      {/*---SECTION 2 : Nos Offres (Services) ---*/}
      <section className="py-20 lg:py-28 bg-gray-50 text-gray-800">
        <h2 className="text-4xl font-bold text-marine text-center mb-16 px-4">
          Services de Prestige
        </h2>

        {/* Grille de cartes responsive et centrée */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          
          {/* Carte 1 - Résidences de Luxe (Suites VIP) */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 group flex flex-col"
          >
            <div className="h-64 overflow-hidden">
                <img
                    src={chambre2}
                    alt="Suite VIP"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-marine mb-3 group-hover:text-lightorange transition">
                Suite VIP
              </h3>
              <p className="text-gray-600 mb-6 flex-1">
                Des Suites VIP et Premium pensées comme votre adresse privée. Profitez d'un confort absolu et d'un service cinq étoiles après vos explorations.
              </p>
              <button 
                onClick={() => navigate("/Residences")} 
                className="self-start text-lightorange font-semibold flex items-center group-hover:text-marine transition"
              >
                Découvrir les Suites →
              </button>
            </div>
          </motion.div>

          {/* Carte 2 - Espace événementiel */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 group flex flex-col"
          >
               <div className="h-64 overflow-hidden">
                <img
                    src={espace1}
                    alt="Espace événementiel"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-marine mb-3 group-hover:text-lightorange transition">
                Événements sur Mesure
              </h3>
              <p className="text-gray-600 mb-6 flex-1">
                Orchestrez vos réunions, réceptions ou mariages dans nos lieux d'exception. Une exécution sans faille garantie par notre équipe.
              </p>
              <button 
                onClick={() => navigate("/Evenements")} // Assurez-vous d'avoir cette route
                className="self-start text-lightorange font-semibold flex items-center group-hover:text-marine transition"
              >
                Organiser votre Événement →
              </button>
            </div>
          </motion.div>

          {/* Carte 3 - Conciergerie Premium (Remplacer "Service de décoration") */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 group flex flex-col"
          >
               <div className="h-64 overflow-hidden">
                <img
                    src={vue} // Image pour un service ou une vue
                    alt="Conciergerie Premium"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-marine mb-3 group-hover:text-lightorange transition">
                Suite prenium
              </h3>
              <p className="text-gray-600 mb-6 flex-1">
                Notre équipe multilingue est à votre disposition pour toute demande : transferts, excursions privées ou réservations exclusives.
              </p>
              <button 
                onClick={() => navigate("/Services")} // Assurez-vous d'avoir cette route
                className="self-start text-lightorange font-semibold flex items-center group-hover:text-marine transition"
              >
                Découvrir le Service →
              </button>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 
        --- SECTION 3 : Pourquoi nous choisir ? (Valeurs) ---
      */}
      <section className="py-20 lg:py-28 bg-white text-center px-4">
        <h2 className="text-4xl font-bold text-marine mb-8">
          Votre Confiance, Notre Engagement
        </h2>

        {/* Texte d’introduction plus professionnel */}
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-16">
          En tant qu'Africaine des Infrastructures et des Investisseurs, nous sommes le partenaire
          privilégié des voyageurs internationaux exigeants. Nous vous offrons non seulement
          un hébergement, mais un cadre sécurisé et raffiné, pour une immersion totale dans l'excellence.
        </p>

        {/* Cartes des valeurs plus aérées et dynamiques */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          
          {/* Valeur 1 : Qualité Supérieure */}
          <motion.div 
            variants={itemVariants} 
            className="bg-marine/5 shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-500 border-t-4 border-marine"
          >
            <span className="text-4xl text-marine mb-3 inline-block">⭐</span>
            <h4 className="text-xl font-bold text-marine mb-2">
              Qualité Supérieure
            </h4>
            <p className="text-gray-700">
              Des infrastructures modernes respectant les standards internationaux, synonymes de confort durable et de propreté.
            </p>
          </motion.div>

          {/* Valeur 2 : Service Personnalisé */}
          <motion.div 
            variants={itemVariants} 
            className="bg-marine/5 shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-500 border-t-4 border-lightorange"
          >
            <span className="text-4xl text-lightorange mb-3 inline-block">🛎️</span>
            <h4 className="text-xl font-bold text-marine mb-2">
              Service Personnalisé
            </h4>
            <p className="text-gray-700">
              Une équipe multilingue dédiée, anticipant vos besoins pour une expérience fluide et sans effort.
            </p>
          </motion.div>

          {/* Valeur 3 : Localisation Stratégique */}
          <motion.div 
            variants={itemVariants} 
            className="bg-marine/5 shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-500 border-t-4 border-marine"
          >
            <span className="text-4xl text-marine mb-3 inline-block">🗺️</span>
            <h4 className="text-xl font-bold text-marine mb-2">
              Localisation Stratégique
            </h4>
            <p className="text-gray-700">
              Proximité des centres d'affaires et des sites touristiques majeurs, optimisant votre temps de découverte.
            </p>
          </motion.div>

          {/* Valeur 4 : Sécurité Optimale */}
          <motion.div 
            variants={itemVariants} 
            className="bg-marine/5 shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-500 border-t-4 border-lightorange"
          >
            <span className="text-4xl text-lightorange mb-3 inline-block">🔒</span>
            <h4 className="text-xl font-bold text-marine mb-2">
              Sécurité Optimale
            </h4>
            <p className="text-gray-700">
              Systèmes de sécurité avancés et surveillance 24h/24 pour une tranquillité d’esprit totale.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 4 : Galerie (Carrousel) ---*/}
      <section className="py-20 lg:py-28 bg-gray-100">
        <h2 className="text-4xl font-bold text-marine mb-12 text-center">
          Notre Galerie Privée
        </h2>
        {/* Le carrousel doit être importé et bien conçu pour le responsive */}
        <div className="max-w-screen-2xl mx-auto">
              <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* --- SECTION 5 : Appel à l'action final ---*/}
      <section className="bg-marine py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Prêt pour l'Expérience de Luxe ?
          </h3>
          <p className="text-white/80 text-lg mb-8">
              Laissez-nous orchestrer votre prochain séjour ou événement sans faute.
          </p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-lightorange hover:bg-white text-white hover:text-marine transition duration-300 transform hover:scale-105 font-bold text-lg px-12 py-4 rounded-full shadow-xl uppercase tracking-wider border-2 border-lightorange hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez notre Conciergerie
          </motion.button>
      </section>
    </div>
  );
}