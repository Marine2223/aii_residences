// src/pages/About.tsx
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/chambre.jpg"; // image principale

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="">
      {/* ==== Section Héro (bande sous la navbar) ==== */}
      <section
        className="relative h-[50vh] flex flex-col items-center justify-center  text-white -mt-16"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-marine/70"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Bienvenue chez{" "}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-3"><span className="text-lightorange">
            Africaine des Infrastructures et <br />
            des Investisseurs (AII)
          </span></h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto mb-6">
            Louez nos appartements et espaces pour vos séjours et événements,
            avec un service de qualité supérieure.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-lightorange text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-500 transition"
          >
            Contactez-nous
          </button>
        </div>
      </section>

      {/* ==== Présentation principale ==== */}
      <div className="bg-white py-16 px-6 md:px-20 text-center text-gray-700">
        <h2 className="text-3xl font-bold text-marine mb-8">Qui sommes-nous ?</h2>
        <p className="max-w-3xl mx-auto mb-12 leading-relaxed">
          Nous sommes une entreprise spécialisée dans la construction, la rénovation et les travaux publics, avec une expertise solide en génie civil et en exécution d’ouvrages d’art.
          Nous accompagnons également nos partenaires dans la mobilisation de fonds, les innovations technologiques et la maîtrise d’ouvrage.

          Notre activité s’étend à la gestion de programmes d’infrastructures, la promotion immobilière, ainsi qu’à la location de résidences, appartements, salles de fête, guesthouses et services hôteliers.
          Nous intervenons aussi dans le transport, l’efficacité énergétique, la gestion de l’eau et l’agro-business.

          À travers nos services, nous mettons en avant qualité, fiabilité et innovation pour répondre aux besoins de nos clients et partenaires.
          <br />
          Nous croyons que chaque moment mérite un lieu idéal — c’est pourquoi nous offrons
          des infrastructures modernes, sécurisées et confortables, adaptées à toutes vos envies.
        </p>

        {/* ==== Mission / Vision / Valeurs ==== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-marine mb-3"> Notre Mission</h3>
            <p>
              Proposer des solutions complètes dans le bâtiment, l’immobilier et l’hôtellerie, tout en assurant un service fiable, sécurisé et accessible.
              Nous nous engageons à concevoir et gérer des infrastructures modernes, à accompagner nos clients dans leurs projets, et à contribuer activement au développement économique et social de notre communauté.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-marine mb-3"> Notre Vision</h3>
            <p>
              Devenir une référence en Afrique dans la construction, l’hôtellerie et la gestion d’infrastructures, en offrant des solutions modernes, durables et accessibles à tous.
              Nous aspirons à créer des espaces qui améliorent la qualité de vie, stimulent le développement local et inspirent confiance aux générations futures.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-marine mb-3"> Nos Valeurs</h3>
            <p>
              Nos valeurs se fondent sur l’excellence, en garantissant un travail précis et professionnel à chaque étape.
              Nous mettons l’innovation au cœur de nos projets afin d’intégrer des solutions modernes et efficaces.
              L’intégrité guide nos actions, dans un esprit de transparence et de respect envers nos clients et partenaires.
              Nous accordons une grande importance à la sécurité, assurant la protection des personnes et des biens.
              Enfin, la satisfaction de nos clients reste notre priorité, en offrant une expérience fiable du premier contact jusqu’à la livraison.
            </p>
          </div>
        </div>
      </div>

      {/* ==== Section Notre Équipe ==== */}
      <div className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-marine mb-8">Notre Équipe</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          Derrière chaque réussite se cache une équipe passionnée, compétente et dévouée.
          Chez <strong>AII</strong>, nous mettons en avant des professionnels unis par un
          objectif commun : vous offrir le meilleur.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Exemple membre */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <img
              src=""
              alt="Directrice"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold text-marine"></h4>
            <p className="text-gray-600">Fondatrice & Directrice Générale</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <img
              src=""
              alt="Responsable logistique"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold text-marine"></h4>
            <p className="text-gray-600">Responsable</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <img
              src=""
              alt="Chargée client"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold text-marine"></h4>
            <p className="text-gray-600">Chargée de la Relation Client</p>
          </div>
        </div>
      </div>

      {/* ==== Section Comment nous aidons ==== */}
      <div className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-marine mb-8">Comment nous aidons ?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Nous accompagnons nos clients à chaque étape, de la planification à la réalisation.
          Que vous cherchiez un logement temporaire ou un espace pour célébrer un événement unique,
          nous sommes là pour concrétiser vos idées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-marine mb-3"> Logement simplifié</h3>
            <p>
              Réservez facilement un appartement moderne et sécurisé, pour un court ou long séjour.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-marine mb-3"> Événements réussis</h3>
            <p>
              Nos espaces événementiels s’adaptent à vos besoins pour créer des moments inoubliables.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-marine mb-3"> Décoration sur mesure</h3>
            <p>
              Nous transformons vos lieux de fête en cadres sublimes grâce à notre service de décoration.
            </p>
          </div>
        </div>
      </div>

      {/* ==== Section Où nous trouver ==== */}
      <div className="bg-marine text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Où nous trouver ?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Nous sommes situés à Abomey-Calavi, quartier Aïtchédji — la voie à droite du carrefour Aïdégnon, juste après le supermarché Éléphant.
          Passez nous voir ou contactez-nous pour planifier votre visite !
        </p>

        {/* Carte Google Map intégrée */}
        <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <iframe
            title="Localisation Africaine des Infrastructures et des Investisseurs"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.067739041183!2d2.327841!3d6.459324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102356e8c516e251%3A0x3baf9da3c76a8e92!2zNi40NTkzMjQsIDIuMzI3ODQx!5e0!3m2!1sfr!2sbj!4v1728500000000!5m2!1sfr!2sbj"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>




    </section>
  );
}
