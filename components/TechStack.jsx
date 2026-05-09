const MonitorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ServerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    color: '#f59e0b',
    Icon: MonitorIcon,
    items: [
      { name: 'HTML5',      dot: '#e34f26' },
      { name: 'CSS3',       dot: '#2965f1' },
      { name: 'JavaScript', dot: '#f7df1e' },
      { name: 'React.js',   dot: '#61dafb' },
      { name: 'Next.js',    dot: '#339933' },
      { name: 'Bootstrap',  dot: '#7952b3' },
      { name: 'jQuery',     dot: '#0769ad' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: '#10b981',
    Icon: ServerIcon,
    items: [
      { name: 'Node.js',     dot: '#339933' },
      { name: 'Express.js',  dot: '#888888' },
      { name: 'REST API',    dot: '#ff6b6b' },
      { name: 'TypeScript',  dot: '#0769ad' },
      { name: 'Java',        dot: '#f89820' },
      { name: 'Java Swing',  dot: '#f89820' },
      { name: 'Laravel',     dot: '#ff2d20' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    color: '#3b82f6',
    Icon: DatabaseIcon,
    items: [
      { name: 'PostgreSQL', dot: '#336791' },
      { name: 'MySQL',      dot: '#4479a1' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    color: '#8b5cf6',
    Icon: WrenchIcon,
    items: [
      { name: 'Git',     dot: '#f05032' },
      { name: 'GitHub',  dot: '#cccccc' },
      { name: 'Postman', dot: '#ff6c37' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="techstack-section" aria-labelledby="tech-stack-heading">
      <div className="section-header">
        <h2 id="tech-stack-heading" className="section-title">Tech Stack</h2>
        <div className="section-underline" />
      </div>

      <div className="techstack-grid">
        {categories.map(({ id, title, color, Icon, items }) => (
          <div key={id} className="tech-card">
            <div className="tech-card-head">
              <div className="tech-card-icon" style={{ background: `${color}22`, color }}>
                <Icon />
              </div>
              <span className="tech-card-title" style={{ color }}>{title}</span>
            </div>
            <ul className="tech-item-list">
              {items.map((item) => (
                <li key={item.name} className="tech-item">
                  <span className="tech-dot" style={{ background: item.dot }} />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
