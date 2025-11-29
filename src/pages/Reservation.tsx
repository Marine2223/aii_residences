import { useState, type ChangeEvent } from "react"; // <-- Import de ChangeEvent
import { FiCalendar, FiUser, FiInfo, FiFileText } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { motion, type Variants } from "framer-motion"; // <-- Import de Variants



// Définition des variants pour l'animation d'apparition du formulaire
const formVariants: Variants = { // <-- Type Variants ajouté
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Reservation() {
  const [form, setForm] = useState({
    // Type et Détails du Séjour
    type: "Résidence",
    nbAdultes: "",
    nbEnfants: "",
    arrivee: "",
    depart: "",
    motif: "Tourisme", 
    
    // Informations Personnelles (SIMPLIFIÉ)
    nom: "",
    prenoms: "",
    nationalite: "",
    adresseComplete: "",
    telephone: "",
    email: "", 

    // Pièce d'Identité
    typePiece: "Passeport", 
    numeroPiece: "",
    delivreeLe: "",
    delivreeA: "",
    dateExpiration: "", 
    
    // Contact d'Urgence
    contactUrgenceNom: "",
    contactUrgenceTelephone: "",

    message: "",
    conditionsAcceptees: false, 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    // a les propriétés 'type' et 'checked' nécessaires pour gérer les checkboxes.
    const target = e.target as HTMLInputElement; 
    const { name, value, type } = target;
    
    setForm({ 
        ...form, 
        [name]: type === 'checkbox' ? target.checked : value // <-- Utilisation de target.checked
    });
  };
// ... le reste du composant reste inchangé ...

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.conditionsAcceptees) {
      alert("Veuillez accepter les règles de l'établissement.");
      return;
    }

    // Création du message complet pour WhatsApp et Email
    const fullMessage = `
*Nouvelle Demande de Réservation de Luxe*
--------------------------------------------------

*TYPE DE SÉJOUR :* ${form.type} (Motif : ${form.motif})
*Dates :* Du ${form.arrivee} au ${form.depart}
*Hôtes :* ${form.nbAdultes} adultes, ${form.nbEnfants} enfants

*CLIENT PRINCIPAL*
Nom & Prénoms : ${form.nom} ${form.prenoms}
Nationalité : ${form.nationalite}
Contact : ${form.telephone} / ${form.email}
Adresse : ${form.adresseComplete}

*PIÈCE D'IDENTITÉ*
Type : ${form.typePiece}
Numéro : ${form.numeroPiece}
Délivrée le : ${form.delivreeLe} à ${form.delivreeA}
Expire le : ${form.dateExpiration}

*CONTACT D'URGENCE*
Nom : ${form.contactUrgenceNom}
Téléphone : ${form.contactUrgenceTelephone}

*MESSAGE :*
${form.message || "Aucun message complémentaire."}
    `;

    /* ====== WHATSAPP SENDER ====== */
    const whatsappNumber = "+2290196459618";
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(fullMessage);
    
    window.open(whatsappURL, "_blank");

    /* ====== EMAILJS SENDER ====== */
    emailjs.send(
      "service_xxxxxx",
      "template_marinemonvo@gmail.com", 
      form, 
      "publicKey_marinemonvo@gmail.com" 
    );

    alert("Votre demande a été envoyée avec succès ✔. Veuillez compléter l'envoi via WhatsApp.");
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-10">
      <section className="px-4 w-full">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-marine flex items-center justify-center gap-3">
              <FiCalendar className="text-lightorange" /> Demande de Réservation Exclusive
            </h2>
            <p className="text-gray-600 mt-2">
              Veuillez remplir les informations requises pour votre séjour ou événement.
            </p>
          </motion.div>

          {/* Corps du Formulaire */}
          <motion.form 
            className="text-left shadow-2xl rounded-2xl p-6 sm:p-10 space-y-8 relative bg-white border-t-4 border-lightorange" 
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            
            {/* --- 1. INFORMATIONS PERSONNELLES (SIMPLIFIÉ) --- */}
            <fieldset className="p-4 border-b border-gray-200">
                <legend className="text-xl font-semibold text-marine mb-4 flex items-center gap-2">
                    <FiUser className="text-lightorange" /> Informations Personnelles
                </legend>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nom et Prénoms */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Nom(s) </label>
                        <input type="text" name="nom" placeholder="Nom de famille" value={form.nom} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                     <div>
                        <label className="block mb-1 text-gray-700 font-medium">Prénom(s)</label>
                        <input type="text" name="prenoms" placeholder="Prénoms" value={form.prenoms} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>

                    {/* Nationalité et Email */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Nationalité </label>
                        <input type="text" name="nationalite" placeholder="Nationalité" value={form.nationalite} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                     <div>
                        <label className="block mb-1 text-gray-700 font-medium">Email </label>
                        <input type="email" name="email" placeholder="votre.email@exemple.com" value={form.email} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                    
                    {/* Téléphone */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 text-gray-700 font-medium">Téléphone </label>
                        <input type="tel" name="telephone" placeholder="+XXX XXXX XXXX" value={form.telephone} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                </div>

                {/* Adresse Complète */}
                <div className="mt-4">
                    <label className="block mb-1 text-gray-700 font-medium">Adresse complète (Domicile)</label>
                    <input type="text" name="adresseComplete" placeholder="Numéro, Rue, Ville, Code Postal, Pays" value={form.adresseComplete} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" />
                </div>
            </fieldset>

            {/* --- 2. DÉTAILS DU SÉJOUR ET MOTIF --- */}
            <fieldset className="p-4 border-b border-gray-200">
                <legend className="text-xl font-semibold text-marine mb-4 flex items-center gap-2">
                    <FiInfo className="text-lightorange" /> Détails du Séjour
                </legend>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Type et Motif */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Type de réservation </label>
                        <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required>
                            <option value="Résidence">Résidence (Séjour)</option>
                            <option value="Espace événementiel">Espace événementiel</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Motif du Séjour </label>
                        <select name="motif" value={form.motif} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required>
                            <option value="Tourisme">Tourisme</option>
                            <option value="Affaires">Affaires</option>
                            <option value="Famille">Famille</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>

                    {/* Adultes et Enfants */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Nb. Adultes </label>
                        <input type="number" name="nbAdultes" placeholder="Nombre" min="1" value={form.nbAdultes} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                     <div>
                        <label className="block mb-1 text-gray-700 font-medium">Nb. Enfants (-12 ans)</label>
                        <input type="number" name="nbEnfants" placeholder="Nombre" min="0" value={form.nbEnfants} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Dates */}
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Date d'arrivée </label>
                        <input type="date" name="arrivee" value={form.arrivee} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Date de départ </label>
                        <input type="date" name="depart" value={form.depart} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" required />
                    </div>
                </div>
            </fieldset>

            {/* --- 3. PIÈCE D'IDENTITÉ & CONTACT URGENCE --- */}
            <fieldset className="p-4 border-b border-gray-200">
                <legend className="text-xl font-semibold text-marine mb-4 flex items-center gap-2">
                    <FiFileText className="text-lightorange" /> Documents et Contact d'Urgence
                </legend>
                
                {/* Pièce d'Identité */}
                <h3 className="text-lg font-medium text-gray-800 mb-3">Informations de la Pièce d'Identité :</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block mb-1 text-gray-700">Type de pièce </label>
                        <select name="typePiece" value={form.typePiece} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required>
                            <option value="Passeport">Passeport</option>
                            <option value="CNI">CNI / Carte d'Identité</option>
                            <option value="Permis">Permis de Conduire</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Numéro de pièce </label>
                        <input type="text" name="numeroPiece" placeholder="Numéro" value={form.numeroPiece} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Délivrée le </label>
                        <input type="date" name="delivreeLe" value={form.delivreeLe} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Expire le </label>
                        <input type="date" name="dateExpiration" value={form.dateExpiration} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block mb-1 text-gray-700">Délivrée à (Ville, Pays)</label>
                    <input type="text" name="delivreeA" placeholder="Ville, Pays d'émission" value={form.delivreeA} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" />
                </div>


                {/* Contact d'Urgence */}
                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Contact d'Urgence :</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 text-gray-700">Nom et Prénoms </label>
                        <input type="text" name="contactUrgenceNom" placeholder="Nom du contact" value={form.contactUrgenceNom} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Téléphone </label>
                        <input type="tel" name="contactUrgenceTelephone" placeholder="Téléphone du contact" value={form.contactUrgenceTelephone} onChange={handleChange} className="w-full p-3 rounded border border-gray-300" required />
                    </div>
                </div>
            </fieldset>

            {/* --- 4. MESSAGE ET CONDITIONS --- */}
            <fieldset className="p-4">
                <div>
                    <label className="block mb-1 text-gray-700 font-medium">Message (Questions spécifiques, besoins spéciaux, etc.)</label>
                    <textarea name="message" placeholder="Détails de votre événement, préférences d'hébergement..." value={form.message} onChange={handleChange} className="w-full p-3 rounded border border-gray-300 focus:ring-marine focus:border-marine" rows={3}></textarea>
                </div>

                <div className="mt-6 flex items-start">
                    <input type="checkbox" name="conditionsAcceptees" checked={form.conditionsAcceptees} onChange={handleChange} id="conditions" className="mt-1 w-4 h-4 text-lightorange border-gray-300 rounded focus:ring-lightorange" required />
                    <label htmlFor="conditions" className="ml-3 text-sm text-gray-700">
                        Je certifie l'exactitude des informations fournies et accepte les règles de l'établissement.
                    </label>
                </div>
            </fieldset>


            {/* Bouton de Soumission */}
            <motion.button
              type="submit"
              className="w-full bg-lightorange text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-marine transition duration-300 transform hover:scale-[1.01]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Envoyer la Demande
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}