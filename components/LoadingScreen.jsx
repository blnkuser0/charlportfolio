'use client';
import { useState, useEffect } from 'react';

const TEXTS = ['Getting things ready...', 'Finalizing setup...'];

export default function LoadingScreen() {
  const [textIndex, setTextIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const switchText = setTimeout(() => {
      setTextVisible(false);
      setTimeout(() => {
        setTextIndex(1);
        setTextVisible(true);
      }, 350);
    }, 1300);

    const startFade = setTimeout(() => setFadeOut(true), 2500);
    const remove = setTimeout(() => setGone(true), 3050);

    return () => {
      clearTimeout(switchText);
      clearTimeout(startFade);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`ls-root${fadeOut ? ' ls-root--out' : ''}`} aria-hidden="true">
      {/* Background orbs */}
      <div className="ls-orb ls-orb-1" />
      <div className="ls-orb ls-orb-2" />
      <div className="ls-orb ls-orb-3" />

      <div className="ls-center">
        {/* Orbital ring loader */}
        <div className="ls-logo-wrap">
          <div className="ls-ring ls-ring-1">
            <div className="ls-ring-dot" />
          </div>
          <div className="ls-ring ls-ring-2">
            <div className="ls-ring-dot" />
          </div>
          <div className="ls-ring ls-ring-3">
            <div className="ls-ring-dot" />
          </div>
          <div className="ls-logo">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>
        </div>

        <p className="ls-brand">Charl.Dev</p>

        <p className={`ls-text${textVisible ? ' ls-text--show' : ''}`}>
          {TEXTS[textIndex]}
        </p>

        <div className="ls-progress-wrap">
          <div className="ls-progress-bar" />
        </div>
      </div>
    </div>
  );
}
