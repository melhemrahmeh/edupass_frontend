import React from "react";
import Headers from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import OurMissionAndVision from "../components/ui/About/OurMissionAndVision";
import OurStory from "../components/ui/About/OurStory";
import OurTeachers from "../components/ui/About/OurTeachers";
import OurTeam from "../components/ui/About/OurTeam";
import OurSponsors from '../components/ui/About/OurSponsors';

const About = () => {
  return (
    <>
      <Headers />
      <OurStory />
      <OurMissionAndVision />
      <OurTeam />
      <OurTeachers />
      <OurSponsors />
      <Footer />
    </>
  );
};

export default About;
