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
      </nav>
    </header>
  );
}

export default Navbar;
