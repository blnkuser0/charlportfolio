"use client";
import { useEffect, useState } from "react";
import useTypingText from "../hooks/useTypingText";
import projects from "../data/projects";
import experiences from "../data/experiences";

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const VIEW_SESSION_KEY = "portfolio_view_counted";
const LOCAL_VIEW_KEY = "portfolio_views_local";

function getYearsExp(exps) {
  let earliest = new Date();
  exps.forEach((exp) => {
    const startStr = exp.period.split(' - ')[0].trim();
    const [mon, year] = startStr.split(' ');
    const d = new Date(parseInt(year), MONTHS.indexOf(mon), 1);
    if (d < earliest) earliest = d;
  });
  return Math.floor((new Date() - earliest) / (1000 * 60 * 60 * 24 * 365.25));
}

export default function Home() {
  const yearsExp = getYearsExp(experiences);
  const [viewCount, setViewCount] = useState(null);
  const role = useTypingText(
    ["Web Developer", "Full Stack Developer"],
    80,
    1500,
  );

  useEffect(() => {
    let mounted = true;

    const setLocalCount = () => {
      const counted = sessionStorage.getItem(VIEW_SESSION_KEY) === "1";
      const current = Number(localStorage.getItem(LOCAL_VIEW_KEY) || "0");
      const nextValue = counted ? current : current + 1;
      if (!counted) {
        localStorage.setItem(LOCAL_VIEW_KEY, String(nextValue));
        sessionStorage.setItem(VIEW_SESSION_KEY, "1");
      }
      if (mounted) setViewCount(nextValue);
    };

    const loadViewCount = async () => {
      try {
        const counted = sessionStorage.getItem(VIEW_SESSION_KEY) === "1";
        const endpoint = counted ? "/api/views?mode=get" : "/api/views?mode=hit";

        const response = await fetch(endpoint, { cache: "no-store" });
        if (!response.ok) throw new Error("Counter request failed");

        const data = await response.json();
        if (!counted) sessionStorage.setItem(VIEW_SESSION_KEY, "1");
        if (mounted && typeof data.value === "number") {
          setViewCount(data.value);
        }
      } catch {
        setLocalCount();
      }
    };

    loadViewCount();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="hero-section" aria-labelledby="home-heading">
      <h1 id="home-heading" className="sr-only">
        Home
      </h1>

      {/* ── Left: Text ── */}
      <div className="hero-content">
        <div className="hero-badge">
          Available for opportunities
        </div>

        <div className="hero-title">
          Hi, I&apos;m
          <span className="hero-name">Charl Eduard</span>
        </div>

        <div className="hero-role" aria-live="polite">
          <span className="typing-role">{role}</span>
          <span className="cursor" aria-hidden />
        </div>

        <p className="hero-desc">
          I build and improve web applications with a focus on real-world usability 
          from backend logic and API integrations to frontend experience and system reliability. 
          Most of my work involves refining workflows, fixing edge-case issues, 
          optimizing user interactions, and making complex systems feel smooth and intuitive 
          for both admins and end users. I enjoy turning rough or incomplete features into polished, 
          production-ready experiences through continuous testing, debugging, and iteration.
        </p>

        <div className="hero-actions">
          <a
            href="/Resume/Charl_Eduard_Narvaez_CV.pdf"
            download="Charl-Eduard-CV"
            className="btn-primary"
            title="Download my latest CV"
          >
            Download CV
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          <div className="hero-view-counter" aria-label="Portfolio views" aria-live="polite">
            <span className="view-eye" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
                <circle cx="12" cy="12" r="2.2" />
              </svg>
            </span>
            <span className="view-count-text">{viewCount === null ? "..." : viewCount.toLocaleString()} views</span>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">{yearsExp}+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-value">{projects.length}+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-value">{experiences.length}+</div>
            <div className="stat-label">Experiences</div>
          </div>
        </div>
      </div>

      {/* ── Right: Image ── */}
      <div className="hero-image-wrap">
        <div className="hero-image-glow" />

        <div className="hero-float-icon hero-float-left" aria-hidden>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="8 17 3 12 8 7" />
            <polyline points="16 7 21 12 16 17" />
            <line x1="14" y1="5" x2="10" y2="19" />
          </svg>
        </div>

        <div className="hero-image-card">
          <img src="/images/charl.jpg" alt="Charl Eduard Narvaez" />
        </div>

        <div className="hero-float-icon hero-float-right" aria-hidden>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
          </svg>
        </div>
      </div>

      {/* ── Scroll-down arrow ── */}
      <button
        className="scroll-down"
        aria-label="Scroll to About section"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}
