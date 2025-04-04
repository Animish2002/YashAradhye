import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
import Footer from "./Footer";
import FAQSection from "./FAQs";
import CollegeMarquee from "./Colleges";
import SuccessCounter from "./SuccessCounter";
import LatestYouTubeVideos from "./Ytvideos";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SuccessCounter />
      <CollegeMarquee />
      <LatestYouTubeVideos
        channelId="UCJGpPmgiekRmcVw0TgBMGqQ"
        maxResults={8}
      />
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
