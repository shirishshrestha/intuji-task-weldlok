import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import OurSolutions from "./components/OurSolutions/OurSolutions";
import Navigation from "./components/Navigation/Navigation";
import OurCustomers from "./components/OurCustomers/OurCustomers";

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
        <OurCustomers />
      </main>
    </>
  );
};

export default App;
