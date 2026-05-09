import certificates from '../data/certificates';

const icons = {
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

export default function Certificates() {
  const isEmpty = certificates.length === 0;

  return (
    <section className="certificates-section" aria-labelledby="certificates-heading">
      <div className="section-header">
        <h2 id="certificates-heading" className="section-title">Certificates &amp; Achievements</h2>
        <div className="section-underline" />
      </div>

      {isEmpty ? (
        <p className="cert-empty">Certificates will be added soon.</p>
      ) : (
        <div className="cert-grid" role="list">
          {certificates.map((cert) => {
            const icon = icons[cert.icon] ?? icons.graduation;
            const card = (
              <div className="cert-card" role="listitem" aria-label={cert.title}>
                <div className="cert-icon">{icon}</div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            );

            return cert.url ? (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                aria-label={`View certificate: ${cert.title}`}
              >
                {card}
              </a>
            ) : (
              <div key={cert.id}>{card}</div>
            );
          })}
        </div>
      )}
    </section>
  );
}
