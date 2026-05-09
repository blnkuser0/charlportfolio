import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import projects from '../../data/projects';

export const metadata = {
  title: 'All Projects — Charl Eduard Narvaez',
  description: 'All projects built by Charl Eduard Narvaez — full-stack web developer.',
};

export default function ProjectsPage() {
  return (
    <div className="app-root">
      <Header />
      <main className="projects-page-main">
        <div className="projects-page-header">
          <a href="/" className="back-link" aria-label="Back to home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Home
          </a>
        </div>

        <Projects items={projects} title="All Projects" />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
