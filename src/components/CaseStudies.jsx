import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";

export default function CaseStudies({ caseStudies }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Case Studies (5)" },
    { id: "Enterprise", label: "Enterprise Backend" },
    { id: "Systems", label: "Low-Level Systems" },
    { id: "Quant", label: "Quantitative Systems" },
    { id: "ML", label: "Machine Learning & APIs" }
  ];

  const filteredStudies = caseStudies.filter((study) => {
    if (filter === "all") return true;
    if (filter === "Enterprise") return study.category.includes("Enterprise");
    if (filter === "Systems") return study.category.includes("Systems");
    if (filter === "Quant") return study.category.includes("Quantitative");
    if (filter === "ML") return study.category.includes("Machine Learning") || study.category.includes("FlyRank");
    return true;
  });

  return (
    <section className="section-container" id="case-studies">
      <div className="content-wrapper">
        <div className="section-header">
          <div className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Verified Systems Engineering</span>
          </div>
          <h2 className="section-title">Featured Engineering Case Studies</h2>
          <p className="section-subtitle">
            Deep-dive technical case studies demonstrating pessimistic transaction locking, POSIX thread synchronization, quantitative algorithmic engines, and end-to-end ML pipelines.
          </p>
        </div>

        {/* Filter Controls */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={filter === opt.id ? "btn-outline-blue" : "btn-secondary"}
              style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Case Studies Card Grid */}
        <div className="case-studies-grid">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="case-card"
              onClick={() => setSelectedCase(study)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCase(study);
                }
              }}
              aria-label={`Inspect case study: ${study.title}`}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span className="case-category">{study.category}</span>
                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center" }}
                      title="View GitHub Repository"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  )}
                </div>

                <h3 className="case-title">{study.title}</h3>
                <p className="case-summary">{study.summary}</p>

                {/* Key Metrics Preview */}
                <div className="case-metrics-preview">
                  {study.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx}>
                      <div className="metric-pill-label">{metric.label}</div>
                      <div className="metric-pill-val">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="case-stack-list">
                  {study.stack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="badge-stack">
                      {tech}
                    </span>
                  ))}
                  {study.stack.length > 4 && (
                    <span className="badge-stack">+{study.stack.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Card Footer with Inspect Action */}
              <div className="case-card-footer">
                <span className="btn-inspect">
                  <span>Inspect Architecture & Code</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Modal Dialog */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
}
