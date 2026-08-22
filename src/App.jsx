import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Project";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import SiteBackground from "./components/SiteBackground";

const App = () => {
  return (
    <div className="relative md:cursor-none">
      <SiteBackground />
      <CustomCursor />
      <ScrollProgress />
      <div className="container relative z-10 mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
