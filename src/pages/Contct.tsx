import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    /* --------------------- ENVOI WHATSAPP --------------------- */
    const whatsappNumber = "2290196459618";
    const whatsappText = `Nouveau message depuis le site lesresidencesacc :

Nom : ${name}
Email : ${email}
Message : ${message}`;

    const whatsappURL =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(whatsappText);

    window.open(whatsappURL, "_blank");

    /* --------------------- ENVOI EMAILJS --------------------- */
    emailjs
      .send(
        "service_xxxxxx",   // ← Service ID EmailJS
        "template_xxxxxx",  // ← Template ID EmailJS
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        "public_xxxxxx"     // ← Public KEY EmailJS
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSent(false), 4000);
      })
      .catch((err) => {
        console.error("Erreur EmailJS :", err);
      });
  };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* --- Informations --- */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contactez{" "}
            <span className="text-marine">Africaine des Infrastructures et des Investisseurs</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Nous serons ravis de répondre à vos questions ou demandes de partenariat.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FiMapPin className="text-marine text-xl" />
              <span>Aïtchédji, Abomey-Calavi, Bénin</span>
            </p>
            <p className="flex items-center gap-3">
              <FiPhone className="text-marine text-xl" />
              <span>+229 01 96 46 00 14</span>
            </p>
            <p className="flex items-center gap-3">
              <FiMail className="text-marine text-xl" />
              <span>afriqueinfrastructure@gmail.com</span>
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-marine text-2xl"><FiFacebook /></a>
              <a href="#" className="text-marine text-2xl"><FiInstagram /></a>
            </div>
          </div>
        </div>

        {/* --- FORMULAIRE --- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-4 relative"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-marine"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre e-mail"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-marine"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-marine"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-marine hover:bg-lightorange text-white hover:text-marine font-semibold py-3 rounded-lg transition"
          >
            Envoyer le message
          </button>

          {isSent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-2xl">
              <FiCheckCircle className="text-marine text-5xl mb-2 animate-bounce" />
              <p className="text-marine font-semibold text-lg">
                Message envoyé avec succès !
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
