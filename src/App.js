import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Journey from "./Components/Journey";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Experience />
        <Certifications />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

export default App;
