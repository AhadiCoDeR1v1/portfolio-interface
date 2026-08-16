import { useState } from "react";

export default function SkillsMatrix({ matrix }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Disciplines" },
    { id: "Programming Languages", label: "Languages" },
    { id: "Backend & Frameworks", label: "Backend & Frameworks" },
    { id: "Databases & Caching", label: "Databases & Storage" },
    { id: "Systems & Architecture", label: "Systems Architecture" }
  ];

  const filteredMatrix =
    selectedFilter === "all"
      ? matrix
      : matrix.filter((cat) => cat.category === selectedFilter);

  return (
    <section className="section-container" id="technical-profile">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="section-title">Technical Profile & Skills Matrix</h2>
          <p className="section-subtitle">
            Core technical competencies across low-level concurrency, enterprise microservices, and asynchronous telemetry architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={selectedFilter === cat.id ? "btn-outline-blue" : "btn-secondary"}
              style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-matrix-grid">
          {filteredMatrix.map((categoryGroup, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <h3 className="skill-category-title">
                  <span style={{ color: "var(--accent-hover)", display: "flex" }}>
                    {categoryGroup.icon === "code" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    )}
                    {categoryGroup.icon === "server" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                    {categoryGroup.icon === "database" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    )}
                    {categoryGroup.icon === "cpu" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                      </svg>
                    )}
                  </span>
                  <span>{categoryGroup.category}</span>
                </h3>
                <span className="badge-stack">{categoryGroup.skills.length} Items</span>
              </div>

              <div className="skill-items-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-left">
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span className="skill-name">{skill.name}</span>
                        <span style={{ fontSize: "0.6875rem", color: "var(--accent-hover)", fontFamily: "var(--font-mono)" }}>
                          [{skill.level}]
                        </span>
                      </div>
                      <span className="skill-detail">{skill.detail}</span>
                    </div>
                    <span className="skill-tag-badge">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
