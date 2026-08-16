import { useEffect } from "react";

export default function CaseStudyModal({ caseStudy, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="case-category">{caseStudy.category}</div>
            <h2 id="modal-title" className="case-title" style={{ margin: 0, fontSize: "1.375rem" }}>
              {caseStudy.title}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "6px 12px", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub Repo</span>
              </a>
            )}
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Key Metrics */}
          <div>
            <div className="modal-section-title">
              <span className="indicator"></span>
              Performance & Verification Benchmarks
            </div>
            <div className="modal-metrics-grid">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-card">
                  <div className="metric-pill-label">{m.label}</div>
                  <div className="metric-pill-val" style={{ color: "#38bdf8", marginTop: "4px" }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div>
            <div className="modal-section-title">
              <span className="indicator"></span>
              System Architecture & Concurrency Strategy
            </div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "#cbd5e1" }}>
              {caseStudy.architecture}
            </p>
          </div>

          {/* Architectural Challenge & Solution */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
            <div style={{ padding: "14px 18px", backgroundColor: "var(--bg-surface-subtle)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#f87171", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                Concurrency Challenge / Bottleneck
              </div>
              <p style={{ fontSize: "0.875rem", margin: 0, color: "#cbd5e1" }}>
                {caseStudy.challenge}
              </p>
            </div>

            <div className="solution-box">
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-hover)", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                Engineered Solution & Resolution
              </div>
              <p style={{ fontSize: "0.875rem", margin: 0, color: "#cbd5e1" }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <div className="modal-section-title">
              <span className="indicator"></span>
              Core Engineering Highlights
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {caseStudy.highlights.map((highlight, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "#cbd5e1" }}>
                  <span style={{ color: "var(--accent-hover)", fontWeight: "bold" }}>▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Production Code Snippet */}
          {caseStudy.codeSnippet && (
            <div>
              <div className="modal-section-title">
                <span className="indicator"></span>
                Critical Implementation Snippet
              </div>
              <div className="code-block-container">
                <pre>
                  <code>{caseStudy.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <div className="modal-section-title">
              <span className="indicator"></span>
              Technology Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {caseStudy.stack.map((item, idx) => (
                <span key={idx} className="badge-stack" style={{ borderColor: "var(--accent-border)", color: "#e2e8f0" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
