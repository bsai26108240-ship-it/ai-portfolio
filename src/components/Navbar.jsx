'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * Navbar Component
 * Minimal, professional navigation with purely typographic name (NO logo, monogram, or brand icon).
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="header-nav" aria-label="Main Navigation">
        {/* Purely Typographic Brand Name — No Logo or Monogram Beside Name */}
        <a href="#home" className="header-brand" aria-label={`${personalInfo.name} - Return to top`} onClick={closeMenu}>
          <span className="brand-typography">{personalInfo.name}</span>
        </a>

        {/* Minimal Navigation Links */}
        <div className="header-links" role="menubar">
          <a href="#about" role="menuitem">About</a>
          <a href="#projects" role="menuitem">Projects</a>
          <a href="#interests" role="menuitem">Interests</a>
          <a href="#contact" role="menuitem">Contact</a>
        </div>

        {/* Header CTA & Mobile Toggle */}
        <div className="header-actions">
          <a href="#contact" className="header-cta" onClick={closeMenu}>
            Get in touch <span>↗</span>
          </a>

          <button
            type="button"
            className={`mobile-toggle-btn ${mobileOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="toggle-bar" />
            <span className="toggle-bar" />
            <span className="toggle-bar" />
          </button>
        </div>
      </nav>

      {/* Responsive Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="menu" aria-label="Mobile Navigation Drawer">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#interests" onClick={closeMenu}>Interests</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </header>
  );
}
