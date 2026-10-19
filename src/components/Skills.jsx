import ScrambleText from './ScrambleText';
import { technicalInterests } from '../data/portfolioData';

/**
 * Skills / Interests Component
 * Categorized view of verified academic skills and current areas of exploration.
 */
export default function Skills() {
  return (
    <section className="skills-section" id="interests" aria-labelledby="skills-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">AREAS OF STUDY &amp; CAPABILITIES</p>
          <h2 id="skills-title" className="section-title">
            Skills &amp; <span className="gradient-text"><ScrambleText text="exploration." /></span>
          </h2>
        </div>
        <p className="section-summary">
          An honest reflection of competencies actively cultivated through academic rigor and personal study.
        </p>
      </div>

      <div className="skills-category-grid">
        {technicalInterests.map((category, cIdx) => (
          <div key={cIdx} className="interest-cluster-card">
            <div className="cluster-header">
              <span className="cluster-index">0{cIdx + 1} //</span>
              <h3 className="cluster-title">{category.category}</h3>
            </div>
            <p className="cluster-note">{category.note}</p>

            <div className="cluster-items-grid">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-spec-chip">
                  <span className="spec-name">{skill.name}</span>
                  <span className="spec-status">{skill.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scientific Philosophy Callout */}
      <div className="intellectual-quote-bar">
        <span className="quote-glyph" aria-hidden="true">∫</span>
        <div className="quote-content">
          <p className="quote-text">
            &ldquo;Curiosity is the beginning of all knowledge. The goal is to master principles before adopting abstractions.&rdquo;
          </p>
          <span className="quote-author">Guiding Academic Principles • BS Artificial Intelligence</span>
        </div>
      </div>
    </section>
  );
}
