import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
import Footer from "./Footer";
import FAQSection from "./FAQs";
import CollegeMarquee from "./Colleges";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CollegeMarquee />
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
