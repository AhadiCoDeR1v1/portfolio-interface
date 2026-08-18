import { useState, useEffect } from "react";

export default function Navbar({ profile }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "case-studies", "technical-profile", "certifications", "peer-review", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="navbar-header" id="navbar">
      <div className="content-wrapper">
        <div className="navbar-container">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, "home")}
            aria-label="Ahad Iqbal Portfolio"
          >
            <div className="monogram-badge">{profile.monogram || "AI."}</div>
            <div className="brand-meta">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">{profile.title}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="navbar-links">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "experience")}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className={`nav-link ${activeSection === "case-studies" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "case-studies")}
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#technical-profile"
                  className={`nav-link ${activeSection === "technical-profile" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "technical-profile")}
                >
                  Skills Matrix
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className={`nav-link ${activeSection === "certifications" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "certifications")}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Status & CTA group */}
          <div className="nav-cta-group">
            <div className="badge-status">
              <span className="status-dot"></span>
              <span>Available</span>
            </div>
            <a
              href="#contact"
              className="btn-outline-blue"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Get in Touch
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel open">
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "experience")}
          >
            Experience
          </a>
          <a
            href="#case-studies"
            className={`nav-link ${activeSection === "case-studies" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "case-studies")}
          >
            Case Studies
          </a>
          <a
            href="#technical-profile"
            className={`nav-link ${activeSection === "technical-profile" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "technical-profile")}
          >
            Skills Matrix
          </a>
          <a
            href="#certifications"
            className={`nav-link ${activeSection === "certifications" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "certifications")}
          >
            Certifications & Education
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
