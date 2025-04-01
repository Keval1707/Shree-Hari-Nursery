import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import PlantsData from "./assets/plants.json";
import Footer from "./components/Footer";

const ttemlist = [10, 14, 2, 22, 29, 30, 31, 44, 47, 52, 53, 6];
const gallerydata = PlantsData.filter(p => ttemlist.includes(p.id));

const AppLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={gallerydata}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery data={gallerydata} />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        {/* Default redirect to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
