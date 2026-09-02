import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { nav, meta } from "../content.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={open ? "nav open" : "nav"}>
      <div className="wrap nav-inner">
        <Link className="brand" to="/">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">Hatem Chehade</span>
        </Link>

        <div className="nav-right">
          <div className="nav-links">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a
            className="icon-btn hide-sm"
            href={meta.resume}
            download
            title="Download resume"
            aria-label="Download resume (PDF)"
          >
            <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
            </svg>
          </a>

          <ThemeToggle />

          <button
            type="button"
            className="icon-btn burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <div className="wrap">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <a href={meta.resume} download>
            Resume (PDF)
          </a>
        </div>
      </div>
    </nav>
  );
}
