import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, site } from '../content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">{site.name}</Link>
        <nav className="nav-desktop" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
          ))}
        </nav>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
      <nav className={`nav-mobile ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
