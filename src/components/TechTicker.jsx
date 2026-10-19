'use client';

import { tickerItems } from '../data/portfolioData';

/**
 * TechTicker Component
 * Continuous, seamless horizontal ticker inside a rounded capsule-like track.
 * Labels travel from right to left, loop without jumps, pause on hover,
 * and respect reduced motion.
 */
export default function TechTicker() {
  return (
    <section className="ticker-section" aria-label="Areas of Learning and Technical Exploration">
      <div className="ticker-capsule-track">
        {/* Scientific Telemetry Marker */}
        <div className="ticker-prefix" aria-hidden="true">
          <span className="ticker-prefix-dot" />
          <span className="ticker-prefix-text">RESEARCH // AREAS</span>
        </div>

        <div className="ticker-viewport">
          <div className="ticker-inner">
            {/* Set 1 */}
            <div className="ticker-group" aria-hidden="true">
              {tickerItems.map((item, idx) => (
                <div key={`ticker-a-${idx}`} className="ticker-pill">
                  <span className="ticker-pill-dot" />
                  <span className="ticker-pill-label">{item}</span>
                </div>
              ))}
            </div>

            {/* Set 2 (Identical duplicate for seamless infinite loop) */}
            <div className="ticker-group" aria-hidden="true">
              {tickerItems.map((item, idx) => (
                <div key={`ticker-b-${idx}`} className="ticker-pill">
                  <span className="ticker-pill-dot" />
                  <span className="ticker-pill-label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screen Reader Summary */}
        <div className="sr-only">
          Current learning and exploration areas: {tickerItems.join(', ')}.
        </div>
      </div>
    </section>
  );
}
