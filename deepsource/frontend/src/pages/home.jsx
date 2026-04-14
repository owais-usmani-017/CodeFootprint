import { useState } from "react";

const MaterialIcon = ({ name, style = {}, className = "" }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      verticalAlign: "middle",
      ...style,
    }}
  >
    {name}
  </span>
);

const HeatmapPreview = () => {
  const files = [
    { name: "payment/gateway.js", pct: 94, color: "#a2c9ff" },
    { name: "auth/middleware.ts", pct: 71, color: "#7eb8ff" },
    { name: "dashboard/hooks.jsx", pct: 58, color: "#5aa0e8" },
    { name: "api/orders.js", pct: 42, color: "#3d7fc4" },
    { name: "utils/cache.ts", pct: 28, color: "#2a5e9a" },
    { name: "config/env.js", pct: 11, color: "#1a3d66" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {files.map(({ name, pct, color }) => (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#8c909f", width: "170px", flexShrink: 0 }}>{name}</span>
          <div style={{ flex: 1, height: "10px", backgroundColor: "#0a0e14", borderRadius: "99px", overflow: "hidden" }}>
            <div style={{ width: `${pct}%`, height: "100%", backgroundColor: color, borderRadius: "99px" }} />
          </div>
          <span style={{ fontSize: "0.7rem", color, width: "32px", textAlign: "right", fontWeight: 700 }}>{pct}%</span>
        </div>
      ))}
    </div>
  );
};

const ScoreRing = ({ score = 87 }) => {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r={r} fill="none" stroke="#1c2026" strokeWidth="12" />
        <circle cx="65" cy="65" r={r} fill="none" stroke="url(#scoreGrad)" strokeWidth="12"
          strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" transform="rotate(-90 65 65)" />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a2c9ff" />
            <stop offset="100%" stopColor="#d8baff" />
          </linearGradient>
        </defs>
        <text x="65" y="60" textAnchor="middle" fill="#dfe2eb" fontSize="26" fontWeight="800" fontFamily="Inter">{score}</text>
        <text x="65" y="78" textAnchor="middle" fill="#8c909f" fontSize="10" fontFamily="Inter">CREDIT SCORE</text>
      </svg>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { label: "Refactors", val: "+24", color: "#a2c9ff" },
          { label: "Security Fixes", val: "+18", color: "#d8baff" },
          { label: "Renames only", val: "−5", color: "#ffb4ab" },
        ].map(({ label, val, color }) => (
          <span key={label} style={{ fontSize: "0.6rem", backgroundColor: "#1c2026", padding: "0.2rem 0.5rem", borderRadius: "99px", color, fontWeight: 700 }}>
            {val} {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function CodeFootprint() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #10141a; color: #dfe2eb; font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined'; font-weight: normal; font-style: normal;
          font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none;
          display: inline-block; white-space: nowrap; word-wrap: normal; direction: ltr;
          -webkit-font-feature-settings: 'liga'; font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle;
        }
        .hero-gradient { background: radial-gradient(circle at 50% 50%, rgba(162,201,255,0.08) 0%, rgba(16,20,26,0) 70%); }
        .glow-hover:hover { box-shadow: 0 0 30px rgba(162,201,255,0.15); }
        .gradient-text {
          background: linear-gradient(to right, #a2c9ff, #d8baff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .btn-primary {
          background: linear-gradient(to right, #a2c9ff, #d8baff); color: #00315c;
          font-weight: 700; border: none; cursor: pointer; transition: transform 0.15s ease;
        }
        .btn-primary:hover { transform: scale(1.05); }
        .btn-primary:active { transform: scale(0.95); }
        .btn-secondary {
          background: #262a31; color: #dfe2eb; font-weight: 600;
          border: none; cursor: pointer; transition: background 0.2s;
        }
        .btn-secondary:hover { background: #353940; }
        .feature-card { background: #1c2026; border-radius: 1.5rem; padding: 2.5rem; transition: all 0.3s; }
        .feature-card:hover { box-shadow: 0 0 30px rgba(162,201,255,0.15); }
        .step-circle {
          width: 4rem; height: 4rem; background: #1c2026; border-radius: 1rem;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 2rem; transition: background 0.2s;
        }
        .step-group:hover .step-circle { background: #a2c9ff; }
        .step-group:hover .step-number { color: #00315c; }
        .step-number { font-size: 1.5rem; font-weight: 700; color: #a2c9ff; transition: color 0.2s; }
        .nav-link { font-family: 'Inter', sans-serif; letter-spacing: -0.02em; text-decoration: none; transition: color 0.2s; }
        @media (max-width: 768px) {
          .md-grid-3 { grid-template-columns: 1fr !important; }
          .md-grid-2 { grid-template-columns: 1fr !important; }
          .md-col-span-2 { grid-column: span 1 !important; }
          .hero-title { font-size: 2.6rem !important; }
          .section-title { font-size: 2rem !important; }
          .md-flex-row { flex-direction: column !important; }
          .md-w-half { width: 100% !important; }
          .cta-pad { padding: 3rem 1.5rem !important; }
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
          .hero-diff-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) { .mobile-menu { display: none !important; } }
      `}</style>

      <div style={{ backgroundColor: "#10141a", color: "#dfe2eb", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

        {/* Header */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          backgroundColor: "rgba(16,20,26,0.85)", backdropFilter: "blur(20px)",
          boxShadow: "0 40px 40px -5px rgba(0,0,0,0.4)",
          borderBottom: "1px solid rgba(66,71,84,0.2)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", height: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MaterialIcon name="commit" style={{ color: "#a2c9ff" }} />
              <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.05em", color: "#a2c9ff" }}>CodeFootprint</span>
            </div>
            <nav className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <a href="/" className="nav-link" style={{ color: "#a2c9ff", borderBottom: "2px solid #a2c9ff", paddingBottom: "0.25rem" }}>Home</a>
              <a href="/about" className="nav-link" style={{ color: "#31353c" }}
                onMouseEnter={e => e.target.style.color = "#a2c9ff"} onMouseLeave={e => e.target.style.color = "#31353c"}>How It Works</a>
              <a href="/contact" className="nav-link" style={{ color: "#31353c" }}
                onMouseEnter={e => e.target.style.color = "#a2c9ff"} onMouseLeave={e => e.target.style.color = "#31353c"}>For Recruiters</a>
              <button className="btn-primary" style={{ padding: "0.5rem 1.25rem", borderRadius: "0.5rem", fontSize: "0.875rem" }}>Analyze My GitHub</button>
            </nav>
            <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#dfe2eb", cursor: "pointer" }}>
              <MaterialIcon name="menu" />
            </button>
          </div>
          {menuOpen && (
            <div style={{ backgroundColor: "#1c2026", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="#" style={{ color: "#a2c9ff", textDecoration: "none" }}>Home</a>
              <a href="#" style={{ color: "#c2c6d6", textDecoration: "none" }}>How It Works</a>
              <a href="#" style={{ color: "#c2c6d6", textDecoration: "none" }}>For Recruiters</a>
              <button className="btn-primary" style={{ padding: "0.75rem 1.5rem", borderRadius: "0.75rem" }}>Analyze My GitHub</button>
            </div>
          )}
        </header>

        <main>
          {/* Hero */}
          <section className="hero-gradient" style={{ minHeight: "795px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 1.5rem", overflow: "hidden" }}>
            <div style={{ maxWidth: "56rem", zIndex: 10 }}>
              <span style={{ display: "inline-block", padding: "0.375rem 1rem", marginBottom: "1.5rem", fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", backgroundColor: "#31353c", color: "#a2c9ff", borderRadius: "9999px" }}>
                GitHub Intelligence · Powered by Gemini AI
              </span>
              <h1 className="hero-title" style={{ fontSize: "4.5rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2rem", lineHeight: 1.1 }}>
                Stop Showing Green Squares.{" "}
                <span className="gradient-text">Prove What You Built.</span>
              </h1>
              <p style={{ fontSize: "1.125rem", color: "#c2c6d6", marginBottom: "3rem", maxWidth: "42rem", margin: "0 auto 3rem", fontWeight: 300, lineHeight: 1.7 }}>
                CodeFootprint parses your commit history with an AST engine, then sends every diff to Gemini AI — turning <span style={{ color: "#8c909f" }}>"added 5 lines"</span> into{" "}
                <span style={{ color: "#a2c9ff", fontWeight: 500 }}>"introduced a memoization pattern that reduced dashboard re-renders by ~30%."</span>
              </p>
              <div style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn-primary" style={{ padding: "1rem 2rem", borderRadius: "0.75rem", fontSize: "1rem", boxShadow: "0 10px 40px rgba(162,201,255,0.2)" }}>
                  Analyze My GitHub Free
                </button>
                <button className="btn-secondary" style={{ padding: "1rem 2rem", borderRadius: "0.75rem", fontSize: "1rem" }}>
                  See a Sample Report
                </button>
              </div>
            </div>

            {/* Hero Visual — AI diff explainer */}
            <div style={{ marginTop: "5rem", width: "100%", maxWidth: "72rem", padding: "0 1rem" }}>
              <div style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.6)", backgroundColor: "#0a0e14", border: "1px solid rgba(66,71,84,0.2)" }}>
                {/* Window bar */}
                <div style={{ backgroundColor: "#181c22", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(66,71,84,0.2)" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ff5f57" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28ca41" }} />
                  <span style={{ marginLeft: "0.75rem", fontSize: "0.75rem", color: "#8c909f", fontFamily: "monospace" }}>
                    codefootprint — commit a3f91bc · payment/gateway.js
                  </span>
                </div>
                <div className="hero-diff-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "240px" }}>
                  {/* Raw diff */}
                  <div style={{ padding: "1.5rem", borderRight: "1px solid rgba(66,71,84,0.2)", fontFamily: "monospace", fontSize: "0.75rem", lineHeight: 1.8, textAlign: "left" }}>
                    <div style={{ color: "#8c909f", marginBottom: "0.5rem", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Raw Git Diff</div>
                    <div style={{ color: "#ffb4ab" }}>- const result = items.map(fn);</div>
                    <div style={{ color: "#ffb4ab" }}>- const result2 = result.filter(x);</div>
                    <div style={{ color: "rgba(162,201,255,0.35)", marginTop: "0.25rem" }}>{"  const cache = new Map();"}</div>
                    <div style={{ color: "#a2c9ff" }}>{"+ const result = useMemo(() => {"}</div>
                    <div style={{ color: "#a2c9ff" }}>{"+   return items.map(fn).filter(x);"}</div>
                    <div style={{ color: "#a2c9ff" }}>{"+ }, [items, fn]);"}</div>
                    <div style={{ color: "rgba(162,201,255,0.3)", marginTop: "0.75rem" }}>@@ -142,6 +142,9 @@</div>
                    <div style={{ color: "#ffb4ab" }}>- dispatchEvent(legacy_id);</div>
                    <div style={{ color: "#a2c9ff" }}>+ dispatchEvent(normalizeId(id));</div>
                  </div>
                  {/* AI explanation */}
                  <div style={{ padding: "1.5rem", backgroundColor: "#0d1117", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#28ca41", boxShadow: "0 0 6px #28ca41" }} />
                      <span style={{ fontSize: "0.65rem", color: "#8c909f", textTransform: "uppercase", letterSpacing: "0.1em" }}>Gemini AI Analysis</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#dfe2eb", lineHeight: 1.75, marginBottom: "1rem" }}>
                      This commit introduced a <span style={{ color: "#a2c9ff", fontWeight: 600 }}>memoization pattern</span> via React's{" "}
                      <code style={{ backgroundColor: "#1c2026", padding: "0 0.3rem", borderRadius: "0.25rem", color: "#d8baff" }}>useMemo</code> hook to optimize dashboard rendering. By caching the filtered item list, unnecessary re-renders are eliminated — estimated{" "}
                      <span style={{ color: "#a2c9ff", fontWeight: 600 }}>~30% reduction in re-render cycles</span>.
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "#c2c6d6", lineHeight: 1.75 }}>
                      The secondary change replaces a raw legacy ID dispatch with a{" "}
                      <span style={{ color: "#d8baff", fontWeight: 600 }}>normalized ID helper</span>, reducing the risk of malformed event payloads downstream.
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
                      {["Performance +24pts", "Refactor", "Security +8pts"].map(tag => (
                        <span key={tag} style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem", borderRadius: "99px", backgroundColor: "#1c2026", color: "#a2c9ff", fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section style={{ padding: "8rem 1.5rem", backgroundColor: "#181c22" }}>
            <div className="md-grid-2" style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                  Recruiters See <span style={{ color: "#d8baff" }}>50 Identical Portfolios.</span>
                </h2>
                <p style={{ color: "#c2c6d6", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Every candidate has a green contribution graph. Nobody can tell who actually <span style={{ color: "#dfe2eb", fontWeight: 500 }}>engineered</span> something meaningful versus who just renamed variables and pushed trivial comments. The engineer who rewrote the payment gateway looks identical to the one who fixed a typo.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { icon: "grid_on", text: "Green squares tell you nothing about logic quality or actual impact." },
                    { icon: "person_search", text: "Recruiters can't read 10,000 lines of code to find your real contributions." },
                    { icon: "trending_down", text: "High-impact engineers lose to confident self-promoters — every time." },
                  ].map(({ icon, text }) => (
                    <div key={icon} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <MaterialIcon name={icon} style={{ color: "#ffb4ab", marginTop: "0.125rem" }} />
                      <p style={{ color: "#dfe2eb", fontWeight: 500 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bad portfolio mockup */}
              <div style={{ backgroundColor: "#0a0e14", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(66,71,84,0.1)" }}>
                <div style={{ fontSize: "0.65rem", color: "#8c909f", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>What every recruiter actually sees</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(14, 1fr)", gap: "3px", marginBottom: "1.5rem" }}>
                  {Array.from({ length: 112 }).map((_, i) => {
                    const seed = (i * 137 + 42) % 100;
                    const bg = seed > 85 ? "#216e39" : seed > 60 ? "#196127" : seed > 35 ? "#0e4429" : "#161b22";
                    return <div key={i} style={{ aspectRatio: "1", borderRadius: "2px", backgroundColor: bg }} />;
                  })}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { msg: "fix: updated variable names", files: "3 files" },
                    { msg: "chore: added comments to utils", files: "1 file" },
                    { msg: "feat: new payment gateway logic", files: "14 files" },
                    { msg: "refactor: memoized dashboard hooks", files: "6 files" },
                  ].map(({ msg, files }) => (
                    <div key={msg} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#424754", fontFamily: "monospace" }}>
                      <span>{msg}</span><span>{files}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1rem", padding: "0.75rem", backgroundColor: "#1c2026", borderRadius: "0.5rem", fontSize: "0.72rem", color: "#ffb4ab", textAlign: "center" }}>
                  ↑ Which of these actually matters? Nobody knows.
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section style={{ padding: "8rem 1.5rem", backgroundColor: "#10141a", overflow: "hidden" }}>
            <div className="md-flex-row" style={{ maxWidth: "80rem", margin: "0 auto", display: "flex", flexDirection: "row", gap: "4rem", alignItems: "center" }}>
              {/* Logic Heatmap visual */}
              <div className="md-w-half" style={{ width: "50%", order: 2 }}>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: "-1rem", background: "linear-gradient(135deg, rgba(162,201,255,0.2), rgba(216,186,255,0.2))", filter: "blur(2rem)", opacity: 0.5, borderRadius: "2rem" }} />
                  <div style={{ position: "relative", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)", backgroundColor: "#0a0e14", padding: "2rem" }}>
                    <div style={{ fontSize: "0.65rem", color: "#8c909f", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
                      Logic Mastery Map · <span style={{ color: "#a2c9ff" }}>github.com/you/ecommerce-app</span>
                    </div>
                    <HeatmapPreview />
                    <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(66,71,84,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                      <div>
                        <div style={{ fontSize: "0.65rem", color: "#8c909f", marginBottom: "0.25rem" }}>Core Logic Ownership</div>
                        <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#a2c9ff" }}>94<span style={{ fontSize: "0.875rem", color: "#8c909f", fontWeight: 400 }}>% in payment/</span></div>
                      </div>
                      <ScoreRing score={87} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md-w-half" style={{ width: "50%", order: 1 }}>
                <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#d8baff", marginBottom: "1rem", display: "block" }}>The Intelligence Layer</label>
                <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "2rem", lineHeight: 1.2 }}>
                  Your Commits,{" "}<br /><span style={{ color: "#a2c9ff" }}>Finally Explained.</span>
                </h2>
                <p style={{ color: "#c2c6d6", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  We clone your repo, parse every diff through an AST engine (espree/acorn), then send the semantic diff — not raw text — to Gemini AI. The result is a shareable link that says{" "}
                  <span style={{ color: "#dfe2eb", fontWeight: 600 }}>"I contributed 12% of the core logic in this 10,000-line repo, specifically in the payment gateway."</span>
                </p>
                <p style={{ color: "#c2c6d6", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                  That single sentence wins interviews. Because no one else can prove it.
                </p>
                <button
                  style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", color: "#a2c9ff", fontWeight: 700, fontSize: "1rem", transition: "gap 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.gap = "1rem"}
                  onMouseLeave={e => e.currentTarget.style.gap = "0.5rem"}
                >
                  See how the AST engine works
                  <MaterialIcon name="arrow_forward" />
                </button>
              </div>
            </div>
          </section>

          {/* Features Bento */}
          <section style={{ padding: "8rem 1.5rem", backgroundColor: "#181c22" }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <h2 className="section-title" style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                  Four Layers of{" "}
                  <span className="gradient-text">GitHub Intelligence</span>
                </h2>
                <p style={{ color: "#c2c6d6", maxWidth: "36rem", margin: "0 auto" }}>
                  From raw repo clone to recruiter-ready proof of impact — here is what runs under the hood.
                </p>
              </div>

              <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {/* Card 1 Wide — Gemini Explainer */}
                <div className="md-col-span-2 feature-card glow-hover" style={{ gridColumn: "span 2", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, padding: "2rem", opacity: 0.07 }}>
                    <MaterialIcon name="auto_awesome" style={{ fontSize: "7.5rem" }} />
                  </div>
                  <div style={{ position: "relative", zIndex: 10 }}>
                    <MaterialIcon name="smart_toy" style={{ color: "#a2c9ff", fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }} />
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Gemini-Powered Commit Explainer</h3>
                    <p style={{ color: "#c2c6d6", lineHeight: 1.7, maxWidth: "32rem", marginBottom: "1.5rem" }}>
                      Every git diff is parsed into its AST representation — so Gemini understands <span style={{ color: "#dfe2eb" }}>what changed structurally</span>, not just what lines changed. No more "added 5 lines." Real plain-English narratives of your engineering decisions.
                    </p>
                    <div style={{ backgroundColor: "#0a0e14", borderRadius: "0.75rem", padding: "1rem 1.25rem", fontFamily: "monospace", fontSize: "0.72rem", lineHeight: 1.8 }}>
                      <div><span style={{ color: "#8c909f" }}>before: </span><span style={{ color: "#ffb4ab" }}>"fixed bug in payment flow"</span></div>
                      <div style={{ marginTop: "0.4rem" }}><span style={{ color: "#8c909f" }}>after:  </span><span style={{ color: "#a2c9ff" }}>"Resolved a race condition in the Stripe webhook handler by introducing an idempotency key check, preventing duplicate charge events under high concurrency."</span></div>
                    </div>
                  </div>
                </div>

                {/* Card 2 — AST Parser */}
                <div className="feature-card glow-hover">
                  <MaterialIcon name="account_tree" style={{ color: "#d8baff", fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>AST-Level Parser</h3>
                  <p style={{ color: "#c2c6d6", lineHeight: 1.7 }}>
                    Uses <span style={{ color: "#dfe2eb", fontWeight: 600 }}>espree / acorn</span> to build an Abstract Syntax Tree of every changed file. Identifies exactly which functions, classes, and logic blocks you touched — not just line counts.
                  </p>
                </div>

                {/* Card 3 — Heatmap */}
                <div className="feature-card glow-hover">
                  <MaterialIcon name="map" style={{ color: "#a2c9ff", fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Logic Mastery Heatmap</h3>
                  <p style={{ color: "#c2c6d6", lineHeight: 1.7 }}>
                    An interactive file-by-file heatmap showing <span style={{ color: "#dfe2eb" }}>where you own the codebase</span>. Weighted by structural impact and edit depth — not raw commit count.
                  </p>
                </div>

                {/* Card 4 Wide — Credit Score */}
                <div className="md-col-span-2 glow-hover" style={{
                  gridColumn: "span 2",
                  backgroundColor: "rgba(49,53,60,0.3)", backdropFilter: "blur(12px)",
                  padding: "2.5rem", borderRadius: "1.5rem",
                  border: "1px solid rgba(66,71,84,0.1)", transition: "all 0.3s"
                }}>
                  <div className="md-flex-row" style={{ display: "flex", flexDirection: "row", gap: "2.5rem", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                      <MaterialIcon name="military_tech" style={{ color: "#d8baff", fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }} />
                      <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Technical Credit Score</h3>
                      <p style={{ color: "#c2c6d6", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                        An AI-calculated score that rewards <span style={{ color: "#dfe2eb", fontWeight: 600 }}>real engineering</span>. High scores for refactoring complex functions, fixing security vulnerabilities, and improving performance. Penalizes comment-only or variable-rename commits.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                        {[
                          { label: "Security vulnerability fix", pts: "+22 pts", color: "#a2c9ff" },
                          { label: "Complex refactor (50+ lines)", pts: "+18 pts", color: "#a2c9ff" },
                          { label: "Memoization / performance pattern", pts: "+15 pts", color: "#a2c9ff" },
                          { label: "Variable rename only", pts: "−3 pts", color: "#ffb4ab" },
                          { label: "Comment-only commit", pts: "−5 pts", color: "#ffb4ab" },
                        ].map(({ label, pts, color }) => (
                          <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#c2c6d6", borderBottom: "1px solid rgba(66,71,84,0.15)", paddingBottom: "0.4rem" }}>
                            <span>{label}</span>
                            <span style={{ color, fontWeight: 700, fontFamily: "monospace" }}>{pts}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <ScoreRing score={87} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section style={{ padding: "8rem 1.5rem", backgroundColor: "#10141a" }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
              <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: 700, textAlign: "center", marginBottom: "5rem", letterSpacing: "-0.02em" }}>
                From Repo to <span style={{ color: "#a2c9ff" }}>Proof</span> in Minutes
              </h2>
              <div className="md-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
                {[
                  {
                    num: "1", title: "Connect GitHub",
                    desc: "Paste a public repo URL or authorize via GitHub OAuth. Our Node.js agent clones it into a secure, temporary sandbox — read-only, zero write access.",
                  },
                  {
                    num: "2", title: "AST Analysis",
                    desc: "espree parses every commit's diff into an Abstract Syntax Tree. We identify which functions, classes, and logic blocks you personally authored or significantly modified.",
                  },
                  {
                    num: "3", title: "Share Your Report",
                    desc: "Receive a shareable link with your Logic Heatmap, AI-explained commits, and Technical Credit Score. Paste it in your next application — and stand out instantly.",
                  },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="step-group" style={{ textAlign: "center" }}>
                    <div className="step-circle"><span className="step-number">{num}</span></div>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem" }}>{title}</h4>
                    <p style={{ color: "#c2c6d6" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: "8rem 1.5rem" }}>
            <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
              <div className="cta-pad" style={{
                position: "relative", padding: "5rem", borderRadius: "2.5rem",
                background: "linear-gradient(135deg, #1c2026, #181c22)",
                border: "1px solid rgba(66,71,84,0.1)", overflow: "hidden", textAlign: "center"
              }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpSPV070-kXOJ5HlksLo_5ZPnSvqG-LoDMoQLRCBPq16a5FHqLcEPFUWA1668maeWRObPu1YNSBaCz8LrGrWw9CAyXzhuEGs1YQWIKLF0fAxf7ZEjOJQPHbkgO_YSWn2Oqjcq7N0Gi1LNU19b_6BTb8DBwEzr36jJEpGXnGta8LUszQPxw9PcApnhsFmOQlw212ADHElar0OwVJ2ZL878_VteDOhiVL7udtZiY-U-N_QL6cNYrqIJqRv9BInJsUNDXt1Z4t-M32WHW"
                    alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                    Ready to prove your impact?
                  </h2>
                  <p style={{ color: "#c2c6d6", fontSize: "1.125rem", marginBottom: "3rem", maxWidth: "42rem", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                    Join 2,000+ engineers who stopped blending in. One shareable link, one clear story — one unforgettable first impression on every recruiter who opens it.
                  </p>
                  <div style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="btn-primary" style={{ padding: "1.25rem 2.5rem", borderRadius: "1rem", fontSize: "1rem", boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}>
                      Analyze My GitHub Now
                    </button>
                    <button className="btn-secondary" style={{ padding: "1.25rem 2.5rem", borderRadius: "1rem", fontSize: "1rem", fontWeight: 700 }}>
                      Share With a Recruiter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: "#0a0e14", borderTop: "1px solid rgba(49,53,60,0.1)" }}>
          <div className="md-flex-row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", maxWidth: "80rem", margin: "0 auto", padding: "3rem 2rem", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#31353c" }}>
              © 2024 CodeFootprint. GitHub Intelligence, Powered by Gemini.
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              {["Privacy", "Terms", "GitHub"].map(link => (
                <a key={link} href="#"
                  style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#31353c", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#d8baff"}
                  onMouseLeave={e => e.target.style.color = "#31353c"}
                >{link}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}