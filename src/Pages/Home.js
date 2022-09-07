import React from "react";
import Headers from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import OurMissionAndVision from "../components/ui/About/OurMissionAndVision";
import OurStory from "../components/ui/About/OurStory";

const Home = () => {
  return (
    <>
      <Headers />
      <OurStory />
      <OurMissionAndVision />
      <Footer />
    </>
  );
};

export default Home;
