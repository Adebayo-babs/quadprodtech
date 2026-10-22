import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS: [string, string][] = [
  ["Home", "/"], ["About", "/about"], ["Expertise", "/expertise"],
  ["Products", "/products"], ["Capabilities", "/capabilities"], ["Safety", "/safety"],
  ["Track Record", "/track-record"], ["Contact", "/contact"],
];

function linkClass({ isActive }: { isActive: boolean }) {
  return `nav-link${isActive ? " nav-link-active" : ""}`;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/quad-logo.png" alt="Quad Production Technologies" className="brand-mark" />
          <div>
            <div className="brand-name">QUAD PRODUCTION</div>
            <div className="brand-sub">TECHNOLOGIES CO. NIG. LTD.</div>
          </div>
        </NavLink>

        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>{label}</NavLink>
          ))}
        </nav>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="header-bar" />

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV_LINKS.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
