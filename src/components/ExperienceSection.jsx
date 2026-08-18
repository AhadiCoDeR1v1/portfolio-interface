export default function ExperienceSection({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section className="section-container" id="experience">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Industry Experience</span>
          </div>
          <h2 className="section-title">Work History & Engineering Impact</h2>
          <p className="section-subtitle">
            Hands-on experience architecting resilient backend services, multi-database migrations, and applied AI systems.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <div key={item.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-role-block">
                  <div className="experience-company-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="experience-role">{item.role}</h3>
                    <div className="experience-company">
                      <span className="company-name">{item.company}</span>
                      <span className="location-sep">•</span>
                      <span className="company-location">{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-badge-group">
                  <span className="badge-period">{item.period}</span>
                  <span className="badge-status" style={{ fontSize: "0.6875rem" }}>
                    <span className="status-dot"></span>
                    <span>Active Role</span>
                  </span>
                </div>
              </div>

              <ul className="experience-bullets">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="experience-bullet-item">
                    <span className="bullet-marker">▸</span>
                    <span className="bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-stack-footer">
                <span className="stack-label">Core Technologies:</span>
                <div className="stack-chips-list">
                  {item.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="badge-stack">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
