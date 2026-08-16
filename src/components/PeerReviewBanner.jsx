export default function PeerReviewBanner({ peerReview }) {
  return (
    <section className="section-container" id="peer-review" style={{ padding: "48px 0" }}>
      <div className="content-wrapper">
        <div className="peer-review-banner">
          {/* Header tag */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <div className="peer-review-tag-badge">
              <span className="status-dot"></span>
              <span>Systems Engineering Peer Audit</span>
            </div>
            <span className="badge-stack" style={{ borderColor: "rgba(37, 99, 235, 0.4)", color: "#93c5fd" }}>
              Sign-Off: {peerReview.version} • {peerReview.date}
            </span>
          </div>

          {/* Core Verification Statement */}
          <h3 className="peer-quote">"{peerReview.quote}"</h3>

          {/* Reviewer Meta */}
          <div className="peer-meta">
            <div className="reviewer-avatar">IA</div>
            <div>
              <div className="reviewer-info-name">{peerReview.reviewerName}</div>
              <div className="reviewer-info-title">{peerReview.reviewerTitle}</div>
            </div>
          </div>

          {/* Verification Audit Checklist */}
          <div className="peer-notes-grid">
            {peerReview.reviewNotes.map((note, idx) => (
              <div key={idx} className="peer-note-card">
                <div className="peer-note-header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Verification Item 0{idx + 1}</span>
                </div>
                <div className="peer-note-text">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
