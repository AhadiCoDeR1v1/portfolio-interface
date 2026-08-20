export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
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
    <footer className="footer-container">
      <div className="content-wrapper">
        <div className="footer-content">
          <div className="footer-left">
            <div className="monogram-badge" style={{ width: "32px", height: "32px", fontSize: "0.875rem" }}>
              {profile.monogram || "AI."}
            </div>
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-main)" }}>
                {profile.name} — {profile.title}
              </div>
              <div className="footer-copy">
                {profile.education} • {profile.location}
              </div>
            </div>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#home" className="footer-link" onClick={(e) => handleNavClick(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#case-studies" className="footer-link" onClick={(e) => handleNavClick(e, "case-studies")}>
                Case Studies
              </a>
            </li>
            <li>
              <a href="#technical-profile" className="footer-link" onClick={(e) => handleNavClick(e, "technical-profile")}>
                Skills Matrix
              </a>
            </li>
            <li>
              <a href="#certifications" className="footer-link" onClick={(e) => handleNavClick(e, "certifications")}>
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
            <li>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {/* FlyRank AI Verified Graduate Badge */}
          <div className="flyrank-graduate-badge-container">
            <a
              href="https://internship.flyrank.ai/intern/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flyrank-graduate-badge"
              title="View Verified FlyRank AI Internship Credentials"
            >
              <div className="badge-logo-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="badge-info">
                <div className="badge-title-row">
                  <span className="badge-org">FlyRank AI</span>
                  <span className="badge-verify-pill">✓ Verified Graduate</span>
                </div>
                <div className="badge-track">General AI Fluency · Code: FL · 2026</div>
              </div>
            </a>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Scroll back to top">
            <span>Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
