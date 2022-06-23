import React from 'react'
import { Routes, Route } from "react-router-dom"

import About from "./components/Pages/About"
import Donate from "./components/Pages/Donate"
import GetApp from "./components/Pages/GetApp"
import Home from "./components/Pages/Home"
import Volunteer from "./components/Pages/Volunteer"

export default function App() {
  return (
    <div>
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="donate/" element={<Donate />} />
        <Route path="getapp/" element={<GetApp />} />
        <Route path="volunteer/" element={<Volunteer />} />
      </Routes>
    </div>
  );
}
