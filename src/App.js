import "./App.css";
import About from "./components/AboutSection/About";
import { Certificate } from "./components/CertificateSection/Certificate";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/FooterSection/Footer";
import Hero from "./components/HeroSection/Hero";
import Portfolio from "./components/PortfolioSection/Portfolio";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Certificate />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
