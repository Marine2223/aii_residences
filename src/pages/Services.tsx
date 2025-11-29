

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ==== Section Héros ==== */}
      <section
        className="bg-[url('/src/assets/services-bg.jpg')] bg-cover bg-center text-white py-32 px-6 text-center"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Découvrez toutes les solutions que nous proposons pour votre confort, vos événements et vos déplacements.
        </p>
      </section>

      {/* ==== Section Nos Offres ==== */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-marine mb-12">Nos Offres</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-20">
          {/* Service 1 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-marine mb-2">Location d’appartements</h4>
            <p className="text-gray-600 mb-4">
              Des appartements modernes et confortables pour vos séjours de courte ou longue durée.
            </p>
            <img src="/src/assets/apartment.jpg" alt="Appartement" className="rounded-b-xl mt-auto" />
            <button className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Découvrir
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-marine mb-2"> Espace événementiel</h4>
            <p className="text-gray-600 mb-4">
              Des salles et espaces adaptés à vos mariages, anniversaires et événements professionnels.
            </p>
            <img src="/src/assets/event-space.jpg" alt="Espace événementiel" className="rounded-b-xl mt-auto" />
            <button className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Découvrir
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-marine mb-2">Service de décoration</h4>
            <p className="text-gray-600 mb-4">
              Décoration personnalisée pour tous vos événements, avec style et élégance.
            </p>
            <img src="/src/assets/decor.jpg" alt="Décoration" className="rounded-b-xl mt-auto" />
            <button className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Découvrir
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-marine mb-2">🚌 Mini-bus climatisé</h4>
            <p className="text-gray-600 mb-4">
              Transport confortable pour vos déplacements touristiques et professionnels.
            </p>
            <img src="/src/assets/minibus.jpg" alt="Mini-bus" className="rounded-b-xl mt-auto" />
            <button className="mt-4 bg-marine text-white py-2 px-4 rounded hover:bg-opacity-80 transition">
              Découvrir
            </button>
          </div>
        </div>
      </section>

      {/* ==== Section Engagement ==== */}
      <section className="py-20 text-center" style={{ backgroundColor: "rgba(0, 33, 71, 0.8)" }}>
        <h2 className="text-3xl font-bold text-white mb-6">Notre Engagement</h2>
        <p className="max-w-3xl mx-auto text-gray-200">
          Chez Africaine des Infrastructures et des Investisseurs, nous garantissons qualité, confort, sécurité et service exceptionnel pour chacun de nos clients.
        </p>
      </section>
    </div>
  );
}
