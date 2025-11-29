import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Reservation() {
  const [form, setForm] = useState({
    type: "Résidence",
    nom: "",
    arrivee: "",
    depart: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* ====== WHATSAPP SENDER ====== */
    const whatsappNumber = "+2290196459618"; // ← mets ici le numéro WhatsApp de l’entreprise
    const whatsappMessage = `
Nouvelle demande de réservation :

Type : ${form.type}
Nom : ${form.nom}
Date d'arrivée : ${form.arrivee}
Date de départ : ${form.depart}
Message : ${form.message}
    `;

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    /* ====== EMAILJS SENDER ====== */
    emailjs.send(
      "service_xxxxxx", // ← service ID
      "template_marinemonvo@gmail.com", // ← template ID
      {
        type: form.type,
        nom: form.nom,
        arrivee: form.arrivee,
        depart: form.depart,
        message: form.message,
      },
      "publicKey_marinemonvo@gmail.com" // ← public key EmailJS
    );

    alert("Votre demande a été envoyée avec succès ✔");
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-0 h-[92vh]">
      {/* ===== FORMULAIRE ===== */}
      <section className="text-blue py-12 px-6 w-full my-0 ">
        <div className="container mx-auto max-w-2xl text-center ">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 mt-16">
            <FiCalendar /> Faire une Réservation
          </h2>

          <form className="space-y-4 text-left  shadow-lg rounded-2xl p-8 space-y-4 relative bg-marine " onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-white">Type de réservation</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full p-2 rounded text-gray-800 "
              >
                <option>Résidence</option>
                <option>Espace événementiel</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-white">Noms et Prénoms</label>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                className="w-full p-2 rounded text-gray-800"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-white">Date d'arrivée</label>
                <input
                  type="date"
                  name="arrivee"
                  value={form.arrivee}
                  onChange={handleChange}
                  className="w-full p-2 rounded text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-white">Date de départ</label>
                <input
                  type="date"
                  name="depart"
                  value={form.depart}
                  onChange={handleChange}
                  className="w-full p-2 rounded text-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-white">Message (optionnel)</label>
              <textarea
                name="message"
                placeholder="Laissez un message..."
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 rounded text-gray-800"
                rows={3}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-blue-900 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
