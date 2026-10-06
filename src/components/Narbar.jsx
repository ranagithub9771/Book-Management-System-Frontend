import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [id, setId] = useState("");
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-slate-800"
        >
          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
            📚
          </div>

          <span>Book Manager</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-96">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="Search Book by ID..."
            className="w-full px-4 py-2 border border-slate-300 rounded-l-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-r-xl transition">
            Search
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-5 py-2.5 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`
            }
          >
            + Add Book
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
