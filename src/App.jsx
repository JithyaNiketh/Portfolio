import Layout from "./components/Layout/Layout";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Loader from "./components/Loader/Loader";

import { useEffect } from "react";
import { initScrollReveal } from "./utils/scrollReveal";

function App() {
  useEffect(() => {
    return initScrollReveal();
  }, []);

  return (
    <>
      <Loader />

      <div className="home-content">
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </Layout>
      </div>
    </>
  );
}

export default App;