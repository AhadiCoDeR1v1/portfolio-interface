export default function Certifications({ education, certifications }) {
  return (
    <section className="section-container" id="certifications">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <span>Academic Rigor & Verified Specialization</span>
          </div>
          <h2 className="section-title">Education & Verified Certifications</h2>
          <p className="section-subtitle">
            Formal computer science foundations complemented by specialized engineering tracks in Spring Boot, distributed databases, and Java system design.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "28px",
            marginBottom: "32px",
            boxShadow: "var(--shadow-md)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-hover)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                Higher Education
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>
                {education.degree}
              </h3>
              <div style={{ fontSize: "0.9375rem", color: "#cbd5e1", marginTop: "4px", fontWeight: 500 }}>
                {education.institution}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span className="badge-status">
                <span className="status-dot"></span>
                <span>{education.grade}</span>
              </span>
              <span className="badge-stack">{education.duration}</span>
            </div>
          </div>

          <ul style={{ listStyle: "none", padding: 0, marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {education.highlights.map((item, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-hover)", fontWeight: "bold" }}>▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color var(--transition-fast), transform var(--transition-fast)"
              }}
              className="cert-card"
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-hover)", fontWeight: 700 }}>
                    {cert.issuer}
                  </span>
                  <span className="badge-stack" style={{ fontSize: "0.6875rem" }}>Verified</span>
                </div>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-main)", lineHeight: 1.35, marginBottom: "12px" }}>
                  {cert.title}
                </h4>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-muted)" }}>
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge-stack" style={{ fontSize: "0.6875rem", padding: "2px 8px" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
