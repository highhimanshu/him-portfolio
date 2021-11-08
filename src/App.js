import "./App.css";
import About from "./components/AboutSection/About";
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
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
