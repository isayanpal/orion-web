import "./App.css";
import { Header } from "./components/Header";
import Hero from "./sections/Hero";
import CTA from "./sections/CTA";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import { Accordian } from "./components/Accordian";
import PricingSection from "./sections/PricingSection";
import ProblemSection from "./sections/ProblemSection";
import { Footer } from "./components/Footer";
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <CTA />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <ProblemSection /> */}
      <PricingSection />
      <div className="flex flex-col items-center justify-center gap-8 mt-10">
        <h1 className="text-xl sm:text-4xl text-[#06286E] font-bold">
          Answers to your questions
        </h1>
        <Accordian />
      </div>
      <Footer />
    </main>
  );
}

export default App;
