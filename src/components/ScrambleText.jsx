'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// Refined scientific, cryptographic, and mathematical character matrix
const SCIENTIFIC_GLYPHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_+-=/*^~#%&<>[]{}Δ∇∑∏≈≠λΩΨ';

/**
 * ScrambleText Component (Next.js Client Component)
 * - Renders original text initially.
 * - Triggers scramble animation when scrolled into viewport (up or down).
 * - Replays smoothly on hover.
 * - Pacing is carefully tuned (~1.4s) to feel technical, fluid, and legible.
 * - Always resolves to the EXACT original text.
 * - Accessible: screen readers only announce the real text once.
 * - Respects prefers-reduced-motion.
 */
export default function ScrambleText({
  text,
  as: Component = 'span',
  className = '',
  triggerOnHover = true,
  triggerOnScroll = true,
  duration = 600, // 0.6 seconds (snappy 600ms cadence)
  ...restProps
}) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const lastIntersectingRef = useRef(false);

  // Check prefers-reduced-motion
  const isReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Execution function for scrambling
  const startScramble = useCallback(() => {
    if (isReducedMotion()) {
      setDisplayText(text);
      return;
    }

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    isAnimatingRef.current = true;
    const startTime = performance.now();
    const len = text.length;
    let lastUpdate = 0;
    const frameInterval = 28; // Snappy, crisp cadence for 0.6s total duration

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Throttle random character redraws to ~45ms for an intentional, readable cadence
      if (now - lastUpdate > frameInterval || progress >= 1) {
        lastUpdate = now;

        // Progressive lock-in: characters before lockedIndex are locked to original characters
        const lockedIndex = Math.floor(progress * len);

        let result = '';
        for (let i = 0; i < len; i++) {
          const char = text[i];
          if (char === ' ' || char === '\n') {
            result += char;
          } else if (i < lockedIndex) {
            result += char;
          } else {
            const randomChar = SCIENTIFIC_GLYPHS[Math.floor(Math.random() * SCIENTIFIC_GLYPHS.length)];
            result += randomChar;
          }
        }

        setDisplayText(result);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        // Guarantee 100% exact original string resolution
        setDisplayText(text);
        isAnimatingRef.current = false;
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  }, [text, duration, isReducedMotion]);

  // Viewport Scroll Trigger (IntersectionObserver)
  useEffect(() => {
    if (!triggerOnScroll) return undefined;

    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Triggers as the user scrolls into view (up or down)
          if (entry.isIntersecting && !lastIntersectingRef.current) {
            lastIntersectingRef.current = true;
            startScramble();
          } else if (!entry.isIntersecting) {
            // Reset state so scrolling back into view can trigger cleanly
            lastIntersectingRef.current = false;
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnScroll, startScramble]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      ref={containerRef}
      className={`scramble-text-wrapper ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
      {...restProps}
    >
      <span aria-hidden="true" className="scramble-content">
        {displayText}
      </span>
    </Component>
  );
}
