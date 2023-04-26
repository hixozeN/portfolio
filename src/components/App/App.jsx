import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Hello from "../../pages/Hello/Hello";
import About from "../../pages/About/About";
import Experience from "../../pages/Experience/Experience";
import { BrowserRouter } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Projects from "../../pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Hello />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
