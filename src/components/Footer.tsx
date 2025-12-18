
export default function Footer() {
  return (
    <footer className="bg-marine text-blanc mt-10">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Nom */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Africaine des Infrastructures et des Investisseurs</h1>
          <p className="text-sm text-lightorange mt-1">
            © {new Date().getFullYear()} Africaine des Infrastructures et des Investisseurs. Tous droits réservés.
          </p>
        </div>

        {/* Liens rapides */}
        <ul className="flex flex-col md:flex-row gap-4 text-sm">
          <li>
            <a href="/" className="hover:text-orange transition-colors">
              Accueil
            </a>
          </li>
          <li>
            <a href="/residences" className="hover:text-orange transition-colors">
              Résidences
            </a>
          </li>
          <li>
            <a href="/reservation" className="hover:text-orange transition-colors">
              Réservations
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
