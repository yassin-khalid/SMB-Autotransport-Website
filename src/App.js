import About from "./components/About";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trace from "./components/Trace";
import Values from "./components/Values";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Services from "./components/Services";
import SAS from "./components/SAS";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="text-[#121212] dark:bg-[#121212] dark:text-white">
      <Header />
      <Hero />
      <Vision />
      <About />
      <Values />
      <Trace />
      <Contact />
      <Services />
      <SAS />
      <FAQs />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
