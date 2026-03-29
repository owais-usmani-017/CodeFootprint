import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          CodeFootprint
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "hover:text-blue-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "hover:text-blue-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;