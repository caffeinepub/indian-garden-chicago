import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-body">
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <Menu />
        <SectionDivider flip />
        <About />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
