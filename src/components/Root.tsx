import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

const Root = () => {
  // console.log(document.body.clientHeight - document.body.scrollHeight)
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
      <Footer />
    </>
  )
}

export default Root