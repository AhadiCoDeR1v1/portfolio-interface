export default function Hero({ profile }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("case-studies");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="content-wrapper">
        <div className="hero-grid">
          {/* Main Hero Content */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <div className="hero-role-pill">
                <span className="tech-dot"></span>
                <span>Distributed Systems & Backend AI</span>
              </div>
              <div className="badge-status">
                <span className="status-dot"></span>
                <span>BS Computer Science (COMSATS)</span>
              </div>
            </div>

            <h1 className="hero-headline">{profile.headline}</h1>

            <p className="hero-proof-statement">{profile.proofStatement}</p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="#case-studies"
                className="btn-primary"
                onClick={scrollToProjects}
                id="btn-explore-case-studies"
              >
                <span>Explore Engineering Case Studies</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="btn-view-github"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="btn-connect-linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                id="btn-download-resume"
                title="Get in touch or request verified CV"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Get CV / Contact</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="hero-stats-strip">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-detail">{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual: Asynchronous Systems Telemetry Terminal */}
          <div className="hero-visual-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <span className="terminal-title">systems_telemetry@arch-node-01</span>
              <span className="badge-stack">PROD_ACTIVE</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>java -jar inventory-manager-3.3.jar --spring.profiles.active=prod</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-highlight">[SPRING_BOOT]</span>
                <span>HikariCP pool initialized: 50 connections ready (PostgreSQL 16)</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-tag">[FLYWAY]</span>
                <span>Schema version 3.4 applied cleanly: 0 migration errors</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-metric-success">[PESSIMISTIC_LOCK]</span>
                <span>Stock lock acquired on product #98124 | 0 overselling races</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-highlight">[RABBITMQ_BUS]</span>
                <span>Order receipt published to order.exchange in 1.4ms</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-tag">[PTHREADS_POOL]</span>
                <span>C++17 8-worker thread pool: 0 deadlocks | 100k iters verified</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-metric-success">[QUANT_SCALP]</span>
                <span>MT5 XAUUSD 5/8 EMA cross executed | Sub-85ms tick latency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
