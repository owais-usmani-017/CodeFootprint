import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="cf-navbar-wrap">
      <nav className="cf-navbar">
        <div className="cf-brand">
          <span className="cf-brand-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <rect x="3" y="3" width="7" height="7" rx="1.4" />
              <rect x="14" y="3" width="7" height="7" rx="1.4" />
              <rect x="3" y="14" width="7" height="7" rx="1.4" />
              <rect x="14" y="14" width="7" height="7" rx="1.4" />
            </svg>
          </span>
          <div>
            <p className="cf-brand-title">CodeFootprint</p>
            <p className="cf-brand-sub">Contribution Intelligence</p>
          </div>
        </div>

        <div className="cf-links-wrap">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "cf-nav-pill cf-nav-pill-active" : "cf-nav-pill"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="cf-actions" aria-label="Quick actions">
          <button
            className="cf-icon-btn"
            type="button"
            aria-label="Settings"
            onClick={() => navigate("/settings")}
          >
            <svg viewBox="0 0 24 24" role="img">
              <path d="M19.14 12.94a7.43 7.43 0 0 0 .05-.94 7.43 7.43 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.54 7.54 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.49-.42h-3.84a.5.5 0 0 0-.49.42l-.36 2.54c-.58.23-1.12.54-1.62.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.03.31-.06.62-.06.94s.03.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.42.33.6.22l2.39-.96c.5.4 1.04.72 1.62.94l.36 2.54c.05.24.25.42.49.42h3.84c.24 0 .44-.18.49-.42l.36-2.54c.58-.22 1.12-.54 1.62-.94l2.39.96c.18.11.46.02.6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
            </svg>
          </button>
          <div className="cf-user-badge" aria-label="User profile">
            AD
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
