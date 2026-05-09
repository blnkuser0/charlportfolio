'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const SVG = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.6.8.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.1 0 4.6-2.6 5.6-5.1 5.9.4.4.8 1 .8 2v3c0 .4.2.7.8.6 4.4-1.6 7.6-5.6 7.6-10.5C23.2 5.4 18.3.5 12 .5z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zM7 7h4.78v2.4h.07c.67-1.2 2.31-2.4 4.76-2.4C22.73 7 24 9.3 24 13.2V24h-5v-9.1c0-2.2-.04-5-3.05-5-3.05 0-3.52 2.38-3.52 4.85V24H7V7z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 4h20v16H2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  send: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_MY_SERVICE_ID,
        process.env.NEXT_PUBLIC_MY_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_MY_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading" className="section-title">Get In Touch</h2>
        <div className="section-underline" />
      </div>

      <div className="contact-card">
        <form className="contact-form" onSubmit={sendEmail} aria-label="Contact form">
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              className="contact-input"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              className="contact-input"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-input"
              required
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
            />
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'} aria-live="polite">
            {SVG.send}
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="contact-status contact-status--success">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="contact-status contact-status--error">Failed to send. Please try again later.</p>
          )}
        </form>

        <div className="contact-divider" aria-hidden="true" />

        <div className="contact-social">
          <p className="contact-social-label">Connect with me</p>
          <div className="social-icons-row" aria-label="Social links">
            <a
              href="https://github.com/blnkuser0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              {SVG.github}
            </a>
            <a
              href="https://www.linkedin.com/in/charleduardnarvaez/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              {SVG.linkedin}
            </a>
            <a
              href="mailto:charleduardnarvaez24@gmail.com"
              className="social-icon-btn"
              aria-label="Email"
            >
              {SVG.mail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
