import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Qualification from "./Qualification";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
