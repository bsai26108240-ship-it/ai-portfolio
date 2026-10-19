'use client';

import { useState } from 'react';
import ScrambleText from './ScrambleText';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Component
 * Direct communication channel with copy-to-clipboard email and verified social links.
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (personalInfo.contact.email) {
      navigator.clipboard.writeText(personalInfo.contact.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-dual-grid">
        <div className="contact-lead-pane">
          <p className="eyebrow">COMMUNICATION &amp; NETWORK</p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s exchange <span className="gradient-text"><ScrambleText text="ideas." /></span>
          </h2>
          <p className="contact-text">
            I am always open to discussing artificial intelligence research, student projects, open-source initiatives, or academic collaborations. Feel free to reach out directly.
          </p>

          <div className="status-intel-box">
            <span className="intel-status-beacon" aria-hidden="true" />
            <div>
              <strong>Current Standing:</strong> Full-time undergraduate student at {personalInfo.institution}. Open to study groups, technical discussions, and mentorship.
            </div>
          </div>
        </div>

        <div className="contact-channels-pane">
          {/* Email Card */}
          <div className="channel-box primary-channel-box">
            <span className="channel-label">DIRECT EMAIL ADDRESS</span>
            <div className="channel-action-row">
              <a 
                href={`mailto:${personalInfo.contact.email}`} 
                className="channel-email-text"
                aria-label={`Send email to ${personalInfo.contact.email}`}
              >
                {personalInfo.contact.email}
              </a>
              <button 
                type="button" 
                onClick={handleCopy}
                className="channel-copy-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
            <p className="channel-hint">Click the address to launch your mail client, or copy directly.</p>
          </div>

          {/* Social Profiles Grid */}
          <div className="channels-subgrid">
            <a 
              href={personalInfo.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-portal-card"
              aria-label="GitHub profile (opens in new tab)"
            >
              <div className="portal-left">
                <span className="portal-name">GitHub</span>
                <span className="portal-meta">Code repositories &amp; academic commits</span>
              </div>
              <span className="portal-arrow" aria-hidden="true">↗</span>
            </a>

            <a 
              href={personalInfo.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-portal-card"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <div className="portal-left">
                <span className="portal-name">LinkedIn</span>
                <span className="portal-meta">Academic updates &amp; professional network</span>
              </div>
              <span className="portal-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="personalize-callout">
            <span className="callout-icon" aria-hidden="true">ℹ</span>
            <span>Update email and profiles anytime in <code>src/data/portfolioData.js</code>.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
