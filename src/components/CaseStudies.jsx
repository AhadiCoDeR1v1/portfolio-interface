import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";

export default function CaseStudies({ caseStudies }) {
  const [selectedCase, setSelectedCase] = useState(null);

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
          <h2 className="section-title">Production Case Studies</h2>
          <p className="section-subtitle">
            Engineered systems designed for high throughput, sub-second execution latency, and deterministic thread safety.
          </p>
        </div>

        {/* Case Studies Card Grid */}
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
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
                <div className="case-category">{study.category}</div>
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
