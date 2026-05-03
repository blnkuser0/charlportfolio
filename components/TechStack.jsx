export default function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading">
      <h2 id="tech-stack-heading">Tech Stack</h2>
      <div className="stack" aria-label="Tech stack">
        <div className="stack-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: 8 }}><strong>Frontend Skills</strong></div>
          <div>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React Js</span>
            <span className="badge">Bootstrap</span>
            <span className="badge">DOM & jquery</span>
          </div>
        </div>

        <div className="stack-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: 8 }}><strong>Backend Skills</strong></div>
          <div>
            <span className="badge">Node.js</span>
            <span className="badge">Express.js</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Rest API</span>
            <span className="badge">MySQL</span>
            <span className="badge">Laravel</span>
            <span className="badge">Java</span>
            <span className="badge">Java Swing</span>
          </div>
        </div>

        <div className="stack-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: 8 }}><strong>Other Tools</strong></div>
          <div>
            <span className="badge">Postman</span>
            <span className="badge">GIT</span>
            <span className="badge">Github</span>
          </div>
        </div>
      </div>
    </section>
  );
}
