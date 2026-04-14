import { useState } from "react";

const MaterialIcon = ({ name, style = {}, size = 24 }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: `${size}px`,
      fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      verticalAlign: "middle",
      lineHeight: 1,
      ...style,
    }}
  >
    {name}
  </span>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #10141a; color: #dfe2eb; font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined'; font-weight: normal; font-style: normal;
          line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block;
          white-space: nowrap; word-wrap: normal; direction: ltr;
          -webkit-font-feature-settings: 'liga'; font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle;
        }
        .gradient-text {
          background: linear-gradient(to right, #a2c9ff, #d8baff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .primary-gradient-bg { background: linear-gradient(135deg, #a2c9ff 0%, #d8baff 100%); }
        .cf-input {
          width: 100%; background: #0a0e14; border: 1px solid rgba(66,71,84,0.3);
          border-radius: 0.5rem; padding: 1rem; color: #dfe2eb;
          font-family: 'Inter', sans-serif; font-size: 0.9rem;
          outline: none; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .cf-input::placeholder { color: rgba(140,144,159,0.4); }
        .cf-input:focus {
          border-color: rgba(162,201,255,0.5); background: #1c2026;
          box-shadow: 0 0 0 3px rgba(162,201,255,0.08);
        }
        textarea.cf-input { resize: none; }
        .cf-label {
          display: block; font-size: 0.6875rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em; color: #c2c6d6;
          margin-bottom: 0.5rem; padding-left: 0.25rem;
        }
        .social-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem; background: #0a0e14; border-radius: 0.5rem;
          text-decoration: none; color: #dfe2eb;
          transition: background 0.2s, box-shadow 0.2s;
          border: 1px solid rgba(66,71,84,0.2);
        }
        .social-row:hover { background: #1c2026; box-shadow: 0 0 0 1px rgba(162,201,255,0.15); }
        .social-row .arrow { opacity: 0; transition: opacity 0.2s; }
        .social-row:hover .arrow { opacity: 1; }
        .submit-btn {
          width: 100%; border: none; cursor: pointer; font-family: 'Inter', sans-serif;
          font-size: 1rem; font-weight: 700; padding: 1rem; border-radius: 0.5rem;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: transform 0.15s ease, box-shadow 0.2s;
          box-shadow: 0 20px 40px -10px rgba(162,201,255,0.25);
        }
        .submit-btn:hover { transform: scale(1.02); box-shadow: 0 20px 40px -10px rgba(162,201,255,0.4); }
        .submit-btn:active { transform: scale(0.98); }
        .info-card {
          background: #1c2026; border-radius: 0.75rem; padding: 2rem;
          border: 1px solid rgba(66,71,84,0.15); transition: background 0.2s, box-shadow 0.2s;
        }
        .info-card:hover { background: #262a31; }
        .badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.85rem; border-radius: 9999px;
          background: #31353c; color: #a2c9ff;
          font-size: 0.6875rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.15em;
        }
        @media (max-width: 900px) {
          .lg-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .md-grid-2 { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 3rem !important; }
        }
      `}</style>

      <div style={{ backgroundColor: "#10141a", color: "#dfe2eb", fontFamily: "'Inter', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Nav strip */}
        <div style={{ borderBottom: "1px solid rgba(66,71,84,0.2)", padding: "0 1.5rem" }}>
          <div style={{ maxWidth: "64rem", margin: "0 auto", height: "3.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MaterialIcon name="commit" style={{ color: "#a2c9ff" }} />
              <span style={{ fontWeight: 700, letterSpacing: "-0.05em", color: "#a2c9ff", fontSize: "1rem" }}>CodeFootprint</span>
            </div>
            <a href="/" style={{ fontSize: "0.75rem", color: "#8c909f", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
              onMouseEnter={e => e.currentTarget.style.color = "#a2c9ff"} onMouseLeave={e => e.currentTarget.style.color = "#8c909f"}>
              <MaterialIcon name="arrow_back" size={16} /> Back to Home
            </a>
          </div>
        </div>

        {/* Main */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem", maxWidth: "64rem", margin: "0 auto", width: "100%" }}>

          {/* Header */}
          <header style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="badge" style={{ marginBottom: "1.25rem" }}>
              <MaterialIcon name="commit" size={14} />
              CodeFootprint
            </div>
            <h1 className="hero-h1" style={{ fontSize: "4.5rem", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p style={{ color: "#c2c6d6", fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "28rem", margin: "0 auto" }}>
              Questions about your GitHub report, enterprise access, or the AST engine? We're here.
            </p>
          </header>

          {/* Grid */}
          <div className="lg-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "2rem", width: "100%", alignItems: "start" }}>

            {/* Form */}
            <section style={{
              backgroundColor: "#181c22", borderRadius: "1rem", padding: "3rem",
              position: "relative", overflow: "hidden",
              border: "1px solid rgba(66,71,84,0.15)"
            }}>
              {/* Ambient glows */}
              <div style={{ position: "absolute", top: "-6rem", right: "-6rem", width: "16rem", height: "16rem", background: "rgba(162,201,255,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-6rem", left: "-6rem", width: "16rem", height: "16rem", background: "rgba(216,186,255,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 0", position: "relative", zIndex: 10 }}>
                  <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(162,201,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <MaterialIcon name="check_circle" style={{ color: "#a2c9ff" }} size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Message Sent!</h3>
                  <p style={{ color: "#c2c6d6", lineHeight: 1.7 }}>We'll get back to you within 24 hours. In the meantime, check out the documentation.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: "2rem", background: "none", border: "1px solid rgba(66,71,84,0.4)", color: "#a2c9ff", padding: "0.6rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", fontFamily: "Inter", fontWeight: 600, fontSize: "0.875rem" }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  <div className="md-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label className="cf-label">Name</label>
                      <input className="cf-input" type="text" placeholder="Jane Smith"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="cf-label">Email</label>
                      <input className="cf-input" type="email" placeholder="jane@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>

                  <div>
                    <label className="cf-label">Subject</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="cf-input"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        style={{ appearance: "none", cursor: "pointer", paddingRight: "2.5rem" }}
                      >
                        <option value="" disabled>Select a topic…</option>
                        <option value="report">My GitHub Analysis Report</option>
                        <option value="credit">Technical Credit Score Question</option>
                        <option value="enterprise">Enterprise / Team Access</option>
                        <option value="recruiter">Recruiter Verification Link</option>
                        <option value="ast">AST Engine / Integration</option>
                        <option value="other">Other</option>
                      </select>
                      <MaterialIcon name="expand_more" size={18} style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "#8c909f", pointerEvents: "none" }} />
                    </div>
                  </div>

                  <div>
                    <label className="cf-label">Message</label>
                    <textarea className="cf-input" rows={5}
                      placeholder="Tell us about your repo, your team, or what you're trying to prove to recruiters…"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button type="submit" className="primary-gradient-bg submit-btn" style={{ color: "#00315c" }}>
                    Send Message
                    <MaterialIcon name="send" size={20} />
                  </button>
                </form>
              )}
            </section>

            {/* Sidebar */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Support */}
              <div className="info-card">
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MaterialIcon name="support_agent" style={{ color: "#a2c9ff" }} size={22} />
                  Need Help With Your Report?
                </h3>
                <p style={{ color: "#c2c6d6", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  If your Logic Heatmap looks off, your Credit Score seems low, or the AST parser missed a commit — our team can dig into it with you.
                </p>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#a2c9ff", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", transition: "gap 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.gap = "0.75rem"} onMouseLeave={e => e.currentTarget.style.gap = "0.4rem"}>
                  Documentation & FAQ
                  <MaterialIcon name="arrow_forward" size={16} />
                </a>
              </div>

              {/* Credit Score explainer */}
              <div className="info-card" style={{ background: "rgba(162,201,255,0.04)", border: "1px solid rgba(162,201,255,0.12)" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MaterialIcon name="military_tech" style={{ color: "#d8baff" }} size={22} />
                  Share With a Recruiter
                </h3>
                <p style={{ color: "#c2c6d6", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Every CodeFootprint report generates a unique, shareable link. Forward it directly — recruiters get a read-only view of your Logic Heatmap and Credit Score with zero setup.
                </p>
                <div style={{ backgroundColor: "#0a0e14", borderRadius: "0.5rem", padding: "0.75rem 1rem", fontFamily: "monospace", fontSize: "0.72rem", color: "#8c909f", wordBreak: "break-all" }}>
                  codefootprint.dev/<span style={{ color: "#a2c9ff" }}>report/a3f91bc</span>
                </div>
              </div>

              {/* Social links */}
              <div className="info-card">
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MaterialIcon name="share" style={{ color: "#d8baff" }} size={22} />
                  Find Us
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { icon: "commit", label: "GitHub", sub: "https/github.com/codefootprint" },
                    { icon: "mail", label: "Email Us", sub: "earnestpeter543@gmail.com" },
                    { icon: "chat", label: "Discord Community", sub: "discord.gg/codefootprint" },
                  ].map(({ icon, label, sub }) => (
                    <a key={label} href="#" className="social-row">
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: "0.5rem", backgroundColor: "#1c2026", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <MaterialIcon name={icon} style={{ color: "#c2c6d6" }} size={18} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{label}</div>
                          <div style={{ fontSize: "0.72rem", color: "#8c909f", marginTop: "0.1rem" }}>{sub}</div>
                        </div>
                      </div>
                      <MaterialIcon name="open_in_new" size={16} style={{ color: "#8c909f" }} className="arrow" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1rem", backgroundColor: "#1c2026", borderRadius: "0.75rem", border: "1px solid rgba(66,71,84,0.15)" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28ca41", boxShadow: "0 0 6px #28ca41", flexShrink: 0 }} />
                <span style={{ fontSize: "0.78rem", color: "#c2c6d6" }}>Average response time: <span style={{ color: "#dfe2eb", fontWeight: 600 }}>under 4 hours</span></span>
              </div>

            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(66,71,84,0.1)", backgroundColor: "#0a0e14", padding: "3rem 2rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#31353c" }}>
              © 2024 CodeFootprint. GitHub Intelligence, Powered by Gemini.
            </div>
            <nav style={{ display: "flex", gap: "2rem" }}>
              {["Privacy", "Terms", "GitHub"].map(link => (
                <a key={link} href="#"
                  style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#31353c", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#d8baff"} onMouseLeave={e => e.target.style.color = "#31353c"}>
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}