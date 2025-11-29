import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-marine fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-24">

        {/* --- LOGOS + NOM --- */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo_AII.png"
              className="w-14 h-14 object-cover"
              alt="logo AII"
            />
          </div>

          <div className="hidden md:block text-blanc font-bold text-lg leading-tight">
            AFRICAINE DES INFRASTRUCTURES <br /> ET DES INVESTISSEMENTS & ACC's RESIDENCE
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/logo_acc.jpg"
              className="w-14 h-14 object-cover"
              alt="logo ACC"
            />
          </div>
        </div>

        {/* --- MENU DESKTOP --- */}
        <ul className="hidden md:flex space-x-8 bg-blanc text-marine px-6 py-3 rounded-xl shadow">
          <li><Link to="/" className="hover:text-lightorange">Accueil</Link></li>
          <li><Link to="/Residences" className="hover:text-lightorange">Résidences</Link></li>
          <li><Link to="/apropos" className="hover:text-lightorange">Apropos</Link></li>
          <li><Link to="/reservation" className="hover:text-lightorange">Réservations</Link></li>
          <li><Link to="/contact" className="hover:text-lightorange">Contact</Link></li>
        </ul>

        {/* --- HAMBURGER --- */}
        <button
          className="md:hidden text-blanc text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      {isOpen && (
        <ul className="md:hidden bg-marine text-blanc flex flex-col items-center space-y-4 py-6 border-t border-white/20">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link to="/Residences" onClick={() => setIsOpen(false)}>Résidences</Link></li>
          <li><Link to="/apropos" onClick={() => setIsOpen(false)}>Apropos</Link></li>
          <li><Link to="/reservation" onClick={() => setIsOpen(false)}>Réservations</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
