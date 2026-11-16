function Dashboard() {
  const plagiarismTypes = [
    { name: "Identity Theft", value: 12 },
    { name: "Copycat", value: 28 },
    { name: "Cherry-pick", value: 46 },
    { name: "Mitosis", value: 35 },
    { name: "Recycle", value: 52 },
    { name: "Remix", value: 41 },
    { name: "Ghost Citation", value: 23 },
    { name: "Half-a-half", value: 31 },
    { name: "Warp", value: 38 },
    { name: "Mosaic", value: 57 },
    { name: "Reflection", value: 26 },
    { name: "Miscue", value: 18 },
    { name: "Half-hearted", value: 44 },
  ];

  return (
    <section className="dashboard-page">

      {/* PAGE TITLE */}
      <div className="dashboard-title">
        <div>
          <h2>Dashboard</h2>
          <p>Your plagiarism analysis at a glance.</p>
        </div>

        <button className="primary-button">
          + New Comparison
        </button>
      </div>

      {/* STATISTICS */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon purple">⇄</div>
          <div>
            <span>Total Comparisons</span>
            <h3>24</h3>
            <small>↑ 12% this month</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">%</div>
          <div>
            <span>Average Similarity</span>
            <h3>36.8%</h3>
            <small>Across all analyses</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">!</div>
          <div>
            <span>High Risk Cases</span>
            <h3>07</h3>
            <small>Needs further review</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon violet">▣</div>
          <div>
            <span>Reports Generated</span>
            <h3>18</h3>
            <small>Available reports</small>
          </div>
        </div>

      </div>

      {/* MAIN ANALYSIS AREA */}
      <div className="dashboard-columns">

        {/* PLAGIARISM INTELLIGENCE */}
        <div className="dashboard-card intelligence-card">

          <div className="card-heading">
            <div>
              <h3>Plagiarism Intelligence</h3>
              <p>Detected patterns from the latest comparison</p>
            </div>

            <span className="analysis-badge">
              ANALYSIS
            </span>
          </div>

          <div className="overall-score">

            <div className="score-ring">
              <div>
                <strong>68%</strong>
                <span>Similarity</span>
              </div>
            </div>

            <div className="score-description">
              <h4>High Similarity Detected</h4>
              <p>
                Multiple similarity patterns were identified.
                Review the detailed evidence before making a final
                judgement.
              </p>

              <button className="text-button">
                View full analysis →
              </button>
            </div>

          </div>

          <div className="type-section">

            <div className="section-label">
              <span>Plagiarism Pattern Distribution</span>
              <span>Score</span>
            </div>

            {plagiarismTypes.map((type) => (
              <div className="type-row" key={type.name}>

                <span>{type.name}</span>

                <div className="type-bar">
                  <div
                    className="type-fill"
                    style={{ width: `${type.value}%` }}
                  ></div>
                </div>

                <strong>{type.value}%</strong>

              </div>
            ))}

          </div>

        </div>

        {/* RISK ASSESSMENT */}
        <div className="dashboard-card risk-card">

          <div className="card-heading">
            <div>
              <h3>Risk Assessment</h3>
              <p>Decision-support overview</p>
            </div>
          </div>

          <div className="risk-circle">
            <strong>72</strong>
            <span>/ 100</span>
          </div>

          <div className="risk-status">
            HIGH RISK
          </div>

          <p className="risk-text">
            The current comparison contains several indicators
            requiring closer examination.
          </p>

          <div className="risk-factors">

            <div>
              <span>Similarity</span>
              <strong>High</strong>
            </div>

            <div>
              <span>Pattern Count</span>
              <strong>Moderate</strong>
            </div>

            <div>
              <span>Structural Match</span>
              <strong>High</strong>
            </div>

            <div>
              <span>Review Required</span>
              <strong>Yes</strong>
            </div>

          </div>

          <button className="secondary-button">
            View Risk Details
          </button>

        </div>

      </div>

      {/* RECENT COMPARISONS */}
      <div className="dashboard-card recent-card">

        <div className="card-heading">

          <div>
            <h3>Recent Comparisons</h3>
            <p>Your latest document analyses</p>
          </div>

          <button className="text-button">
            View all →
          </button>

        </div>

        <div className="comparison-table">

          <div className="table-header">
            <span>DOCUMENTS</span>
            <span>SIMILARITY</span>
            <span>STATUS</span>
            <span>DATE</span>
          </div>

          <div className="comparison-row">
            <div className="document-name">
              <div className="file-icon">PDF</div>
              <div>
                <strong>Operating Systems</strong>
                <small>Assignment A ↔ Assignment B</small>
              </div>
            </div>

            <strong>68%</strong>

            <span className="status high">HIGH</span>

            <span>15 Aug 2026</span>
          </div>

          <div className="comparison-row">
            <div className="document-name">
              <div className="file-icon">DOC</div>
              <div>
                <strong>Database Management</strong>
                <small>DBMS A ↔ DBMS B</small>
              </div>
            </div>

            <strong>42%</strong>

            <span className="status moderate">MODERATE</span>

            <span>13 Aug 2026</span>
          </div>

          <div className="comparison-row">
            <div className="document-name">
              <div className="file-icon">PDF</div>
              <div>
                <strong>Python Programming</strong>
                <small>Python A ↔ Python B</small>
              </div>
            </div>

            <strong>18%</strong>

            <span className="status low">LOW</span>

            <span>11 Aug 2026</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;