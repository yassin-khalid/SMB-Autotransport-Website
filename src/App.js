import { Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trace from "./components/Trace";
import Values from "./components/Values";
import Hero from "./components/Hero";
import Vision from "./components/Vision";

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
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
