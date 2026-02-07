import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
