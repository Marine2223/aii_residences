
/*import { useNavigate } from "react-router-dom";*/
import bgImage from "../assets/chambre2.jpg"; // image principale
import espace1 from "../assets/espace1.jpg";
import chambre2 from "../assets/chambre2.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import vue from "../assets/jardin1.jpg";
import chambre from "../assets/jardin2.jpg";
import espace from "../assets/jardin3.jpg";
import jardin from "../assets/jardin4.jpg";
import jardine from "../assets/jardin3.jpg";
import jardie from "../assets/jardin6.jpg";
import ImageCarousel from "../components/ImageCarousel";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* --- SECTION 1 : Bannière principale --- */}
      <section
        className="relative h-[100vh] flex flex-col items-center justify-center text-white -mt-16"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Superposition marine */}
        <div className="absolute inset-0 bg-marine/40"></div>

        {/* Contenu principal */}
        <div className="relative z-10 px-4 text-center">
          {/* Animation du titre */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Rester avec le confort <br />
            <span className="text-lightorange">Perfection de l'événement</span>
          </motion.h1>

          {/* Animation du paragraphe */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base max-w-2xl mx-auto mb-6"
          >
            Vivez des séjours chaleureux et des événements sans faille avec nous !
          </motion.p>

          {/* Animation du bouton */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            onClick={() => navigate("/contact")}
            className="bg-lightorange text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-500 transition"
          >
            Contactez-nous
          </motion.button>
        </div>
      </section>

      {/* --- SECTION 2 : Nos Offres --- */}
      <section className="py-16 bg-gray-50 text-gray-800 text-center md:px-20">
        <h2 className="text-3xl font-bold text-marine mb-10 mr-48">Nos Offres</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  md:px-20">
          {/* Carte 1 - Location d’appartement */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col w-96">
            <div className="p- flex-1">
              <img
                src={chambre2}
                alt="Appartement"
                className="w-full h-96 object-cover"
              />
              <h3 className="text-2xl font-semibold text-marine mb-3">
                Suite VIP
              </h3>
              <p className="text-gray-600 mb-4">
                Profitez de maisons confortables et élégantes, idéales pour vos aventures en Afrique. Votre escapade de rêve vous attend !
              </p>

            </div>
            <button onClick={() => navigate("/Residences")} className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Explorez
            </button>
          </div>

          {/* Carte 2 - Espace événementiel */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col w-96 ">
            <img
              src={espace1}
              alt="Espace événementiel"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-semibold text-marine mb-3">
                Espace Événementiel
              </h3>
              <p className="text-gray-600 mb-4">
                Organisez des événements inoubliables dans nos espaces joliment décorés, conçus pour rendre vos moments spéciaux !
              </p>
            </div>
            <button className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Explorez
            </button>
          </div>

          {/* Carte 3 - Service de décoration */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col w-96">
            <img
              src={vue}
              alt="Espace événementiel"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-semibold text-marine mb-3">
                Suite Prenium
              </h3>
              <p className="text-gray-600 mb-4">
                Organisez des événements inoubliables dans nos espaces joliment décorés, conçus pour rendre vos moments spéciaux !
              </p>
            </div>
            <button onClick={() => navigate("/Residences")} className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Explorez
            </button>
          </div>

        </div>
      </section>

      {/* --- SECTION 3 : Pourquoi nous choisir ? --- */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-marine mb-8">
          Pourquoi nous choisir ?
        </h2>

        {/* Texte d’introduction centré et responsive */}
        <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed mb-12 px-4">
          Chez <span className="font-semibold text-marine">Africaine des Infrastructures et des Investisseurs</span>,
          nous croyons en la création d'expériences inoubliables. Notre passion pour
          l'hospitalité nous pousse à offrir un service exceptionnel, un hébergement
          de qualité et des espaces événementiels remarquables. Nous accordons une
          grande importance à chaque client et mettons tout en œuvre pour rendre votre
          séjour ou votre célébration inoubliable, en garantissant joie et confort à tous !
        </p>

        {/* Cartes des valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-marine mb-2">
              Qualité garantie
            </h4>
            <p className="text-gray-600">
              Des infrastructures modernes, propres et bien entretenues pour
              garantir votre confort.
            </p>
          </div>

          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-marine mb-2">
              Service professionnel
            </h4>
            <p className="text-gray-600">
              Une équipe réactive et expérimentée à votre écoute pour répondre à
              tous vos besoins.
            </p>
          </div>

          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-marine mb-2">
              Tarifs abordables
            </h4>
            <p className="text-gray-600">
              Des prix compétitifs pour un service haut de gamme, accessible à
              tous.
            </p>
          </div>

          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-marine mb-2">
              Sécurité assurée
            </h4>
            <p className="text-gray-600">
              Nos résidences et espaces sont sécurisés 24h/24 pour votre
              tranquillité d’esprit.
            </p>
          </div>
        </div>
      </section>


      <section className="h-full">
        <h1 className="text-3xl font-bold text-marine mb-8 text-center pb-8">Galerie</h1>
        <ImageCarousel
          images={[
            chambre,
            chambre2,
            espace,
            vue,
            jardin,
            jardine,
            jardie,

          ]}
        />
      </section>



    </div>
  );
}
