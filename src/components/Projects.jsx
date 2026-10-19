import ScrambleText from './ScrambleText';
import { projects } from '../data/portfolioData';

/**
 * Projects Component
 * Honest showcase of practical implementations, student projects, and code repositories.
 */
export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">PRACTICAL EXPERIMENTS</p>
          <h2 id="projects-title" className="section-title">
            Featured <span className="gradient-text"><ScrambleText text="projects." /></span>
          </h2>
        </div>
        <p className="section-summary">
          Translating theoretical concepts into functional software and accessible user interfaces.
        </p>
      </div>

      <div className="projects-deck-grid">
        {projects.map((proj) => (
          <article key={proj.id} className="project-blueprint-card">
            <div className="card-top-row">
              <span className="card-code">SYSTEM // {proj.id}</span>
              {proj.isLive && (
                <span className="live-indicator">
                  <span className="indicator-pulse" aria-hidden="true" />
                  <span>Interactive Build</span>
                </span>
              )}
            </div>

            <div className="card-core">
              <h3 className="project-headline">{proj.title}</h3>
              <p className="project-statement">{proj.description}</p>

              <div className="project-taxonomy" aria-label="Technologies applied">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="taxonomy-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-actions-bar">
              {proj.demoUrl && (
                <a 
                  href={proj.demoUrl}
                  className="blueprint-btn primary-blueprint-btn"
                  aria-label={`View live demonstration of ${proj.title}`}
                >
                  View System <span aria-hidden="true">↗</span>
                </a>
              )}
              {proj.githubUrl && (
                <a 
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blueprint-btn secondary-blueprint-btn"
                  aria-label={`View ${proj.title} code repository on GitHub`}
                >
                  Source Code <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Ongoing Work Banner */}
      <div className="project-in-progress-banner">
        <div className="banner-left">
          <span className="banner-orbit-glyph" aria-hidden="true">☍</span>
          <div>
            <h4>Ongoing Academic Inquiries</h4>
            <p>Currently writing code for graph pathfinding visualizations and linear algebra matrix transformations.</p>
          </div>
        </div>
        <a href="#contact" className="banner-cta">
          Have an idea to explore? <span>↗</span>
        </a>
      </div>
    </section>
  );
}
