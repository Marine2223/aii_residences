// src/pages/About.tsx
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/chambre.jpg"; // image principale
// Importer les icônes nécessaires (Exemple avec react-icons)
import { FaBuilding, FaBullseye, FaLightbulb, FaHandsHelping, FaHome, FaCalendarAlt, FaPalette, FaMapMarkerAlt, FaUsers, FaArrowRight, FaChevronDown } from "react-icons/fa";


const fadeInClass = "opacity-0 transition-opacity duration-1000 ease-in-out"; // Classe de base
const hoverLiftShadow = "transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl"; // Effet de survol amélioré

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      {/* Section Héro (Bande Sous la Navbar) */}

      <section
        className="relative h-[80vh] flex flex-col items-center justify-center text-white -mt-16 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Propriétés CSS clés pour l'effet Parallax
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay pour le contraste */}
        <div className="absolute inset-0 bg-marine/70 animate-fade-in"></div>

        <div className="relative z-10 px-4 max-w-5xl mx-auto text">
          {/* Animation du texte de titre (simulée avec transition lente) */}
          <h1 className={`text-4xl md:text-6xl font-extrabold mb-4 leading-tight opacity-0 transition-opacity duration-1000 ease-in-out delay-300 opacity-100`}>
            Découvrez les Résidences ACC
          </h1>

          <p className={`text-base md:text-lg max-w-3xl mx-auto mb-8 font-light opacity-0 transition-opacity duration-1000 ease-in-out delay-500 opacity-100`}>
            Un cadre accueillant, pensé pour votre confort et votre tranquillité. 
            Nous mettons un point d’honneur à offrir des espaces modernes, propres et adaptés à tous vos besoins.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className={`bg-lightorange text-white font-bold text-lg px-8 py-3 rounded-full shadow-2xl hover:bg-orange-600 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto opacity-0 transition-opacity duration-1000 ease-in-out delay-700 opacity-100`}
          >
            Contactez-nous pour vos Projets <FaArrowRight className="ml-2 animate-bounce-right" />
          </button>
        </div>

        {/* Indicateur de défilement dynamique */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
          <FaChevronDown className="text-3xl text-white animate-bounce" />
        </div>
      </section>


      {/*  Présentation Principale et Expertise */}
      <div className="bg-white py-20 px-6 md:px-20 text-center text-gray-700" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-marine mb-4 transition duration-500 hover:text-lightorange">
          <FaBuilding className="inline-block text-lightorange mr-3 align-text-bottom" /> Qui sommes-nous ?
        </h2>

        <p className={`text-xl max-w-4xl mx-auto mb-10 leading-relaxed font-semibold ${fadeInClass} delay-200 opacity-100`}>
          AII est un acteur clé de la construction, de la rénovation et des travaux publics, avec une forte expertise en génie civil et en exécution d’ouvrages d’art complexes.
        </p>

        <p className={`max-w-4xl mx-auto mb-6 leading-relaxed text-lg ${fadeInClass} delay-400 opacity-100`}>
          Nous allons au-delà du bâtiment en accompagnant nos partenaires dans la mobilisation de fonds, les innovations technologiques et la maîtrise d’ouvrage. Notre engagement s'étend à la gestion de programmes d’infrastructures, la promotion immobilière, ainsi qu’à la location de résidences, appartements, salles de fête, et services hôteliers premium.
        </p>
      </div>

      {/*  Mission / Vision / Valeurs - Cartes Mises en avant */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-marine text-center mb-12">Notre Engagement Fondamental</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Carte Mission */}
          <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-lightorange text-center ${hoverLiftShadow}`}>
            <FaBullseye className="text-5xl text-lightorange mx-auto mb-4 transition duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-bold text-marine mb-3">Notre Mission</h3>
            <p className="text-gray-600">
              Fournir des solutions intégrées et complètes en BTP, immobilier et hôtellerie.
            </p>
          </div>

          {/* Carte Vision */}
          <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-lightorange text-center ${hoverLiftShadow} delay-100`}>
            <FaLightbulb className="text-5xl text-lightorange mx-auto mb-4 transition duration-300 group-hover:rotate-12" />
            <h3 className="text-2xl font-bold text-marine mb-3">Notre Vision</h3>
            <p className="text-gray-600">
              Devenir la référence africaine dans la construction durable et la gestion d’infrastructures.
            </p>
          </div>

          {/* Carte Valeurs */}
          <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-lightorange text-center ${hoverLiftShadow} delay-200`}>
            <FaHandsHelping className="text-5xl text-lightorange mx-auto mb-4 transition duration-300 group-hover:text-marine" />
            <h3 className="text-2xl font-bold text-marine mb-3">Nos Valeurs Clés</h3>
            <ul className="text-left space-y-2 text-gray-600 list-disc list-inside">
              <li>Excellence & Professionnalisme</li>
              <li>Innovation</li>
              <li>Intégrité & Transparence</li>
            </ul>
          </div>
        </div>
      </div>

      {/*  Section Notre Équipe */}
      <div className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-marine mb-12 transition duration-500 hover:text-lightorange">
          <FaUsers className="inline-block text-lightorange mr-3 align-text-bottom" /> Rencontrez notre Équipe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Membre 1 */}
          <div className={`bg-gray-50 shadow-lg rounded-xl p-6 ${hoverLiftShadow}`}>
            <div className="relative w-32 h-32 mx-auto mb-4 group">
              <img
                src="../imMarine.png"
                alt="Directrice Générale"
                className="rounded-full w-full h-full object-cover border-4 border-lightorange transition duration-300 group-hover:border-marine"
              />
            </div>
            <h4 className="text-xl font-bold text-marine mb-1 transition duration-300 hover:text-lightorange"></h4>
            <p className="text-lightorange font-semibold">Fondatrice & Directrice Générale</p>
          </div>

          {/* Membre 2 */}
          <div className={`bg-gray-50 shadow-lg rounded-xl p-6 ${hoverLiftShadow} delay-100`}>
            <div className="relative w-32 h-32 mx-auto mb-4 group">
              <img
                src="URL_IMAGE_RESPONSABLE_LOGISTIQUE"
                alt="Responsable Logistique"
                className="rounded-full w-full h-full object-cover border-4 border-lightorange transition duration-300 group-hover:border-marine"
              />
            </div>
            <h4 className="text-xl font-bold text-marine mb-1 transition duration-300 hover:text-lightorange">Marine</h4>
            <p className="text-lightorange font-semibold">Responsable des Opérations</p>
          </div>

          {/* Membre 3 */}
          <div className={`bg-gray-50 shadow-lg rounded-xl p-6 ${hoverLiftShadow} delay-200`}>
            <div className="relative w-32 h-32 mx-auto mb-4 group">
              <img
                src="URL_IMAGE_CHARGEE_CLIENT"
                alt="Chargée de la Relation Client"
                className="rounded-full w-full h-full object-cover border-4 border-lightorange transition duration-300 group-hover:border-marine"
              />
            </div>
            <h4 className="text-xl font-bold text-marine mb-1 transition duration-300 hover:text-lightorange"></h4>
            <p className="text-lightorange font-semibold">Chargée de la Relation Client</p>
          </div>
        </div>
      </div>

      {/*  Section Comment nous aidons (Services Clés) */}
      <div className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-marine mb-12 transition duration-500 hover:text-lightorange">
          <FaHandsHelping className="inline-block text-lightorange mr-3 align-text-bottom" /> Nos Solutions pour Vous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Solution 1 */}
          <div className={`bg-white rounded-xl shadow-lg p-8 border-l-4 border-marine hover:border-lightorange transition duration-300 text-left ${hoverLiftShadow}`}>
            <FaHome className="text-4xl text-marine mb-3 transition duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-marine mb-3">Hébergements Premium</h3>
            <p className="text-gray-600">
              Logement simplifié : Réservez facilement un appartement moderne et sécurisé.
            </p>
          </div>

          {/* Solution 2 */}
          <div className={`bg-white rounded-xl shadow-lg p-8 border-l-4 border-marine hover:border-lightorange transition duration-300 text-left ${hoverLiftShadow} delay-100`}>
            <FaCalendarAlt className="text-4xl text-marine mb-3 transition duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-marine mb-3">Espaces Événementiels</h3>
            <p className="text-gray-600">
              Événements réussis : Nos salles polyvalentes s’adaptent à vos besoins.
            </p>
          </div>

          {/* Solution 3 */}
          <div className={`bg-white rounded-xl shadow-lg p-8 border-l-4 border-marine hover:border-lightorange transition duration-300 text-left ${hoverLiftShadow} delay-200`}>
            <FaPalette className="text-4xl text-marine mb-3 transition duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-marine mb-3">Décoration & Aménagement</h3>
            <p className="text-gray-600">
              Ambiance sur mesure : Notre service transforme vos lieux en cadres sublimes.
            </p>
          </div>
        </div>
      </div>

      {/*  Section Où nous trouver */}
      <div className="bg-marine text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          <FaMapMarkerAlt className="inline-block text-lightorange mr-3 align-text-bottom" />Où nous trouver
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Nous sommes situés à Abomey-Calavi, quartier Aïtchédji — la voie à droite du carrefour Aïdégnon, juste après le supermarché Éléphant.
          Passez nous voir ou contactez-nous pour planifier votre visite !
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto border-4 border-lightorange transition duration-500 hover:scale-[1.01] hover:border-white">
          <iframe
            title="Localisation Africaine des Infrastructures et des Investisseurs"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.067739041183!2d2.327841!3d6.459324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102356e8c516e251%3A0x3baf9da3c76a8e92!2zNi40NTkzMjQsIDIuMzI3ODQx!5e0!3m2!1sfr!2sbj!4v1728500000000!5m2!1sfr!2sbj"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}