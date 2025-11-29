
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home"
import Footer, {  } from "./components/Footer";
import Services from "./pages/Services";
import Residences from "./pages/Residences";
//import Evenements from "./pages/Evenements";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contct";
import Apropos from "./pages/Apropos";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="residences" element={<Residences />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="apropos" element={<Apropos />} />
         
        </Routes>
      </main>
      <Footer/>
    </>
  );
}
