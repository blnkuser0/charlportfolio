import projects from "../data/projects.js";
import certificates from "../data/certificates.js";

export default function About() {
  const projectCount = projects.length;
  const certCount = certificates.length;

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="section-header">
        <h2 id="about-heading" className="section-title">
          About Me
        </h2>
        <div className="section-underline" />
      </div>

      <div className="about-grid">
        {/* Left: bio card */}
        <div className="about-bio-card">
          <h3 className="bio-headline">Passionate Developer with a Vision</h3>
          <p className="bio-text">
            With 2+ years of experience in web development, I specialize in
            building scalable, performant full-stack applications. My journey in
            tech started with a curiosity for how the web works, evolving into a
            passion for crafting solutions that make a real difference.
          </p>
          <p className="bio-text">
            I believe in writing clean, maintainable code and staying updated
            with the latest technologies. When I&apos;m not coding, you&apos;ll
            find me exploring new frameworks and working on personal projects.
          </p>
          <div className="about-tags">
            <span className="about-tag">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Philippines
            </span>
            <span className="about-tag">
              <span aria-hidden>✦</span>
              3+ Years Experience
            </span>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="about-stats">
          <div className="about-stat-card">
            <div className="asc-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M4.5 19.5c2-2 5.5-2 7.5 0" />
                <path d="M11 13 21 3c-1.5-.2-4.8 0-7.2 2.4L9.6 9.6C7.2 12 7 15.3 7.2 16.8L11 13Z" />
                <path d="M13.5 10.5 16.8 13.8c2.4-2.4 2.6-5.7 2.4-7.2L13.5 10.5Z" />
                <path d="M8 16l-2.8 2.8" />
              </svg>
            </div>
            <div className="asc-count">{projectCount}+</div>
            <div className="asc-label">Projects Completed</div>
          </div>
          <div className="about-stat-card">
            <div className="asc-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
                <path d="M7 6H5a2 2 0 0 0 0 4h2" />
                <path d="M17 6h2a2 2 0 0 1 0 4h-2" />
              </svg>
            </div>
            <div className="asc-count">
              {certCount > 0 ? `${certCount}+` : "0"}
            </div>
            <div className="asc-label">Certifications</div>
          </div>
          <div className="about-stat-card">
            <div className="asc-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="7" width="18" height="12" rx="2" />
                <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                <path d="M3 12h18" />
              </svg>
            </div>
            <div className="asc-count">3+</div>
            <div className="asc-label">Years Experience</div>
          </div>
          <div className="about-stat-card">
            <div className="asc-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
              </svg>
            </div>
            <div className="asc-count">3+</div>
            <div className="asc-label">Work Experiences</div>
          </div>
        </div>
      </div>
    </section>
  );
}
