import "./App.css";
import { Header } from "./components/Header";
import Hero from "./sections/Hero";
import CTA from "./sections/CTA";
import Section2 from "./sections/Section2";
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <CTA />
      <Section2 />
    </main>
  );
}

export default App;
