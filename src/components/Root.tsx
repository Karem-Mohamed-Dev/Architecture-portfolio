import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Header from "./Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className="blur"></div>
      <Experience />
      <div className="blur2"></div>
      <Projects />
      <Skills />
    </>
  );
};

export default Root;
