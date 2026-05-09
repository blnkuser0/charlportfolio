import projects from "../data/projects.js";
import certificates from "../data/certificates.js";
import experiences from "../data/experiences.js";

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getYearsExp(exps) {
  let earliest = new Date();
  exps.forEach((exp) => {
    const startStr = exp.period.split(' - ')[0].trim();
    const [mon, year] = startStr.split(' ');
    const d = new Date(parseInt(year), MONTHS.indexOf(mon), 1);
    if (d < earliest) earliest = d;
  });
  return Math.floor((new Date() - earliest) / (1000 * 60 * 60 * 24 * 365.25));
}

export default function About() {
  const projectCount = projects.length;
  const certCount = certificates.length;
  const expCount = experiences.length;
  const yearsExp = getYearsExp(experiences);

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
            I&apos;ve been working on web applications across both frontend and backend, 
            building features, improving system workflows, fixing production issues, 
            and refining user experiences. My work usually involves handling real business 
            requirements — from API integrations and validation logic to UI improvements, 
            realtime functionality, and system debugging.
          </p>
          <p className="bio-text">
             I enjoy improving existing systems just as much as building new features.
             A big part of my experience comes from working through edge cases, testing flows, 
             optimizing usability, and making sure features are stable and reliable before deployment.
          </p>
          <p className="bio-text">
           Outside of day-to-day development, I spend time exploring new tools, improving my 
           workflow, and building personal projects to keep sharpening my skills.
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
              {yearsExp}+ Years Experience
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
            <div className="asc-count">{yearsExp}+</div>
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
            <div className="asc-count">{expCount}+</div>
            <div className="asc-label">Work Experiences</div>
          </div>
        </div>
      </div>
    </section>
  );
}
