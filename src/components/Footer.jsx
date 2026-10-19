import { personalInfo } from '../data/portfolioData';

/**
 * Footer Component
 * Minimalist, scientific footer with typographic name (NO logo or monogram) and quick navigation.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-headline-row">
          <div>
            <h3 className="footer-brand-name">{personalInfo.name}</h3>
            <p className="footer-brand-sub">{personalInfo.role} • {personalInfo.institution}</p>
          </div>

          <nav className="footer-nav-list" aria-label="Footer Navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#interests">Interests</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {year} {personalInfo.name}. Built with Next.js, React &amp; WebGL.
          </p>
          <a href="#home" className="footer-back-to-top" aria-label="Back to top of page">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
