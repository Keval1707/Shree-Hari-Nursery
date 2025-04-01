import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
// import Homecopy from "./pages/Home copy";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Plants from "./pages/Plants";
import PlantsData from "./assets/plants.json";

const ttemlist = [10, 14, 2, 22, 29, 30, 31, 44, 47, 52, 53, 6];

const gallerydata=PlantsData.filter(p=>ttemlist.includes(p.id));


const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* {!(location.pathname === "/") && <Navbar />} */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home data={gallerydata}/>} />
        {/* <Route path="/testhome" element={<Homecopy data={gallerydata}/>} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery data={gallerydata} />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plants" element={<Plants plantData={PlantsData} />} />
      </Routes>

      <Footer/>
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
