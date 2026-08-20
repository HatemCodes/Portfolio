import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Thesis from "./components/Thesis.jsx";
import Projects from "./components/Projects.jsx";
import Leadership from "./components/Leadership.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { contact } from "./content.js";

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Projects />
        <Leadership />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Hatem Chehade</span>
        <span>{contact.location}</span>
      </footer>
    </>
  );
}
