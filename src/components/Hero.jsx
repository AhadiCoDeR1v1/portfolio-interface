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
                <span>Distributed Systems & AI Backend</span>
              </div>
              <div className="badge-status">
                <span className="status-dot"></span>
                <span>v0.9 Early Release Verified</span>
              </div>
            </div>

            <h1 className="hero-headline">{profile.headline}</h1>

            <p className="hero-proof-statement">{profile.proofStatement}</p>

            <div className="hero-actions">
              <a
                href="#case-studies"
                className="btn-primary"
                onClick={scrollToProjects}
                id="btn-explore-case-studies"
              >
                <span>Explore Case Studies</span>
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
                <span>View GitHub</span>
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
              <span className="terminal-title">telemetry_daemon@engine-node-01</span>
              <span className="badge-stack">ASYNC_LIVE</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>./scalping_engine --symbol=XAUUSD --mode=production</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-highlight">[BOOT]</span>
                <span>Async event loop initialized on uvloop (pid 4092)</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-tag">[WS_FEED]</span>
                <span>Connected to tick stream (wss://gateway.broker:8443)</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-metric-success">[INDICATOR]</span>
                <span>5/8 EMA Cross confirmed on tick #342890</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-highlight">[MUTEX_GUARD]</span>
                <span>Lock acquired: 0.04ms | Order dispatch triggered</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-metric-success">[RECEIPT]</span>
                <span>Order #341 filled @ 2384.45 | Exec Latency: 74.2ms</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-tag">[POOL_AUDIT]</span>
                <span>Posix connection pool: 0 deadlocks | 1000/1000 threads OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
