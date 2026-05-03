'use client';
import useTypingText from '../hooks/useTypingText';

export default function Home() {
  const role = useTypingText(
    ['Web Developer', 'Full Stack Developer'],
    80,
    1500
  );

  return (
    <section className="hero-section" aria-labelledby="home-heading">
      <h1 id="home-heading" className="sr-only">
        Home
      </h1>

      {/* ── Left: Text ── */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-spark">✦</span>
          Available for opportunities
        </div>

        <div className="hero-title">
          Hi, I&apos;m
          <span className="hero-name">Charl Eduard</span>
        </div>

        <div className="hero-role" aria-live="polite">
          <span className="typing-role">{role}</span>
          <span className="cursor" aria-hidden />
        </div>

        <p className="hero-desc">
          Building robust, scalable backend systems with modern technologies.
          Passionate about clean architecture, efficient APIs, and solving
          complex problems that drive real business impact.
        </p>

        <div className="hero-actions">
          <a
            href="/Resume/Narvaez_CV.pdf"
            download="CharlEduardNarvaez_CV.pdf"
            className="btn-primary"
          >
            Download CV
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">2+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-value">5+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-value">3+</div>
            <div className="stat-label">Experiences</div>
          </div>
        </div>
      </div>

      {/* ── Right: Image ── */}
      <div className="hero-image-wrap">
        <div className="hero-image-glow" />

        <div className="hero-float-icon hero-float-left">&lt;/&gt;</div>

        <div className="hero-image-card">
          <img src="/images/me.png" alt="Charl Eduard Narvaez" />
        </div>

        <div className="hero-float-icon hero-float-right">⚡</div>
      </div>

      {/* ── Scroll-down arrow ── */}
      <button
        className="scroll-down"
        aria-label="Scroll to About section"
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}
