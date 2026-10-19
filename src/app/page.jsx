import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content" className="portfolio-content-shell">
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
