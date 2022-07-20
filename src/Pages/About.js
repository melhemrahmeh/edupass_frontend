import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import OurMissionAndVision from "../components/ui/About/OurMissionAndVision";
import OurPartners from "../components/ui/About/OurPartners";
import OurSponsors from "../components/ui/About/OurSponsors";
import OurStory from "../components/ui/About/OurStory";
import OurTeachers from "../components/ui/About/OurTeachers";
import OurTeam from "../components/ui/About/OurTeam";

const About = () => {
  return (
    <>
      <Header />

      <OurStory />
      <OurMissionAndVision />
      <OurTeam />
      <OurPartners />
      <OurSponsors />
      <OurTeachers />

      <Footer />
    </>
  );
};

export default About;
