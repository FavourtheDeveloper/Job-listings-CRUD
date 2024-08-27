import React from "react";
import Hero from "../components/Hero";
import Type from "../components/Type";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Type />
      <Jobs isHome={true} />
      <Footer />
    </div>
  );
};

export default Home;
