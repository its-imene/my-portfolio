import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Pexelis from "./components/Pexelis";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Stack />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project Details */}
        <Route path="/pexelis" element={<Pexelis />} />
      </Routes>
    </>
  );
}

export default App;
