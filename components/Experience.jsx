import experiences from '../data/experiences';
import ExperienceDuration from './ExperienceDuration';

export default function Experience() {
  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="section-header">
        <h2 id="experience-heading" className="section-title">Work Experience</h2>
        <div className="section-underline" />
      </div>

      <div className="exp-timeline" role="list">
        {experiences.map((item) => (
          <article
            key={item.id}
            className="exp-item"
            role="listitem"
            aria-label={`${item.title} at ${item.company}`}
          >
            <div className="exp-dot" aria-hidden="true" />

            <div className="exp-card">
              <div className="exp-card-top">
                <h3 className="exp-title">{item.title}</h3>
                <div className="exp-period-wrap">
                  <span className="exp-period">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {item.period}
                  </span>
                  <ExperienceDuration period={item.period} />
                </div>
              </div>

              <p className="exp-company">{item.company}</p>

              <ul className="exp-highlights" aria-label="Responsibilities and achievements">
                {item.highlights.map((point, i) => (
                  <li key={i} className="exp-highlight">
                    <svg className="exp-highlight-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
