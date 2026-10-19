'use client';

import DitherVeil from './DitherVeil';
import ScrambleText from './ScrambleText';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Component
 * Intellectual, scientific hero section featuring the scramble-text headline,
 * authentic undergraduate student positioning, and scientific WebGL dither canvas.
 */
export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Introduction and Hero Overview">
      <div className="hero-copy">
        {/* Status Pill Badge */}
        <div className="status-badge" role="status">
          <span className="status-ping" aria-hidden="true" />
          <span className="status-dot" aria-hidden="true" />
          <span className="status-label">{personalInfo.status}</span>
        </div>

        <p className="eyebrow">
          <span>THEORETICAL &amp; APPLIED AI</span>
        </p>

        {/* Hero Headline with Interactive Scramble Text */}
        <h1 className="hero-title">
          <span className="hero-line">
            <ScrambleText text="Building ideas into" triggerOnHover triggerOnScroll />
          </span>
          <span className="hero-line highlight-line">
            <span className="gradient-text">
              <ScrambleText text="intelligent" triggerOnHover triggerOnScroll />
            </span>
          </span>
          <span className="hero-line">
            <ScrambleText text="experiences." triggerOnHover triggerOnScroll />
          </span>
        </h1>

        <p className="hero-description">
          {personalInfo.bio}
        </p>

        <div className="hero-actions">
          <a className="primary-cta-btn" href="#projects">
            Explore Projects <span>↗</span>
          </a>
          <a className="secondary-cta-btn" href="#about">
            Academic Background
          </a>
        </div>

        <div className="hero-footnote" aria-hidden="true">
          <span className="coord-chip">AXIOM // 01</span>
          <span className="coord-divider">•</span>
          <span className="coord-text">Curiosity → First Principles → Software Construction</span>
        </div>
      </div>

      {/* Scientific Visual Panel */}
      <div className="hero-visual-col">
        <div 
          className="scientific-canvas-card"
          tabIndex={0}
          aria-label="Interactive AI Dither Veil Canvas Artwork"
        >
          {/* Mathematical Grid & Vector Accents */}
          <div className="scientific-grid-overlay" aria-hidden="true" />
          
          <DitherVeil
            src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
            pattern="floyd"
            pixelSize={2}
            inkColor="#020205"
            paperColor="#f1f5f9"
            revealRadius={175}
            softness={0.65}
            linger={1.2}
            rimColor="#38bdf8"
            rim={0.16}
            wander={true}
            clickBurst={true}
          />

          {/* Scientific Telemetry & Coordinate Overlays */}
          <div className="scientific-telemetry" aria-hidden="true">
            <span className="telemetry-tag tag-top-left">
              <span className="telemetry-glyph">Ψ</span> NEURAL_FIELD // 01
            </span>
            <span className="telemetry-tag tag-top-right">
              λ: 480nm
            </span>
            <span className="telemetry-tag tag-bottom-left">
              Δx · Δp ≥ ℏ/2
            </span>
            <span className="telemetry-tag tag-bottom-right">
              HOVER TO REVEAL • CLICK TO RIPPLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
