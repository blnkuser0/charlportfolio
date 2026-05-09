import Header from '../components/Header';
import Home from '../components/Home';
import StatsStrip from '../components/StatsStrip';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import projects from '../data/projects';

export default function Page() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <div id="home"><Home /></div>
        <StatsStrip />
        <div id="about"><About /></div>
        <div id="tech-stack"><TechStack /></div>
        <div id="projects"><Projects items={projects.slice(0, 3)} showViewAll /></div>
        <div id="experience"><Experience /></div>
        <div id="certificates"><Certificates /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
