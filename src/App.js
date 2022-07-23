import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import DonatePage from "./Pages/DonatePage";
import GetApp from "./Pages/GetApp";
import Home from "./Pages/Home";
import Volunteer from "./Pages/Volunteer";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="donate/" element={<DonatePage />} />
        <Route path="getapp/" element={<GetApp />} />
        <Route path="volunteer/" element={<Volunteer />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </>
  );
}
