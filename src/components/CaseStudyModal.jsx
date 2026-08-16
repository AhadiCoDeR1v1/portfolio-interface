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
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
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
