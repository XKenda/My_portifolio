import react from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";



const  App = () => {
    return (
      <>
        <Header />
        <Resume />
        <Main />
        <Skills />
        <Projects />
        <Connect />
        <Footer />
      </>
    )
};


export default App;