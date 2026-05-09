const stats = [
  {
    value: '1,000+',
    label: 'Employees Served',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: '30%',
    label: 'Faster Page Load',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    value: '40%',
    label: 'Less System Downtime',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z"/>
      </svg>
    ),
  },
  {
    value: '3+',
    label: 'Companies Worked With',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Key achievements">
      {stats.map((stat, i) => (
        <div key={i} className="stats-strip-item">
          <div className="stats-strip-icon">{stat.icon}</div>
          <div className="stats-strip-value">{stat.value}</div>
          <div className="stats-strip-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
