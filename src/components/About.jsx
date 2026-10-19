'use client';

import HoloCard from './HoloCard';
import ScrambleText from './ScrambleText';
import { personalInfo, educationHistory } from '../data/portfolioData';

/**
 * About Component
 * Showcases academic journey using interactive React Bits <HoloCard /> components:
 * - SZABIST BS Artificial Intelligence (BSAI)
 * - Cambridge GCE A Levels
 * - Cambridge O Levels
 *
 * Each card features dynamic WebGL holographic shader foil, interactive 3D perspective tilting,
 * and a 180° flip to view the curriculum dossier on the back.
 */
export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">ACADEMIC BACKGROUND &amp; PATH</p>
          <h2 id="about-title" className="section-title">
            Foundations &amp; <span className="gradient-text"><ScrambleText text="aspirations." /></span>
          </h2>
        </div>
        <p className="section-summary">
          Grounding artificial intelligence concepts in mathematical rigor, deliberate practice, and continuous learning.
        </p>
      </div>

      {/* Narrative Ethos Card */}
      <div className="intellectual-narrative-card">
        <div className="card-kicker-bar" aria-hidden="true">
          <span className="card-kicker-dot" />
          <span className="card-kicker-text">RESEARCH ETHOS &amp; JOURNEY</span>
        </div>

        <h3 className="narrative-heading">From First Principles to Intelligent Systems</h3>

        {personalInfo.aboutNarrative.map((paragraph, idx) => (
          <p key={idx} className="narrative-body">
            {paragraph}
          </p>
        ))}

        <div className="scientific-axioms">
          <div className="axiom-box">
            <span className="axiom-num">01</span>
            <div>
              <h4>Mathematical Foundations</h4>
              <p>Linear algebra, multivariable calculus, and probability as the true bedrock of machine intelligence.</p>
            </div>
          </div>
          <div className="axiom-box">
            <span className="axiom-num">02</span>
            <div>
              <h4>Algorithmic Discipline</h4>
              <p>Writing clean, structured Python and modular software that can scale gracefully.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Academic Cards Showcase */}
      <div className="academic-showcase-container">
        <div className="academic-showcase-header">
          <div className="card-kicker-bar" aria-hidden="true">
            <span className="card-kicker-dot pulse-dot" />
            <span className="card-kicker-text">ACADEMIC CREDENTIALS // HOLOGRAPHIC DOSSIER</span>
          </div>
          <p className="academic-instruction-hint" aria-hidden="true">
            <span>✦ Move cursor to tilt foil light</span>
            <span className="hint-separator">•</span>
            <span>Click or press Enter on any card to flip for curriculum breakdown ↺</span>
          </p>
        </div>

        <div className="holo-cards-grid" role="region" aria-label="Academic Holographic Cards Showcase">
          {educationHistory.map((item) => (
            <div key={item.id} className="holo-card-cell">
              {/* Interactive 3D Holographic Card from React Bits */}
              <div className="holo-card-wrapper">
                <HoloCard
                  image={item.cardFront}
                  backImage={item.cardBack}
                  alt={`${item.degree} at ${item.institution}`}
                  preset={item.preset}
                  foilColor={item.foilColor}
                  intensity={item.intensity}
                  edgeSparkle={item.edgeSparkle}
                  frame={4}
                  scale={1}
                  glare={0.55}
                  tiltMax={14}
                  hoverScale={1.04}
                  radius={16}
                  width={310}
                  idle={true}
                  shadow={true}
                />
              </div>

              {/* Informative Academic Summary Pill */}
              <div className="holo-card-meta">
                <div className="meta-badge-row">
                  <span className={`milestone-badge ${item.isCurrent ? 'badge-current' : 'badge-completed'}`}>
                    {item.status}
                  </span>
                  <span className="milestone-period">{item.period}</span>
                </div>
                <h4 className="holo-degree-title">{item.degree}</h4>
                <p className="holo-institution">{item.institution}</p>
                <p className="holo-focus-text">
                  <strong>Focus:</strong> {item.focus}
                </p>
                <div className="holo-flip-indicator" aria-hidden="true">
                  <span>↺ Click card to flip</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
