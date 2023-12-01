import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import OurSolutions from "./components/OurSolutions/OurSolutions";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <section className="landing__page">
        <Navigation />
        <Hero />
      </section>
      <main>
        <About />
        <OurSolutions />
      </main>
    </>
  );
};

export default App;
