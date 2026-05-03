'use client';
import useTypingText from '../hooks/useTypingText';

export default function About() {
  const text = useTypingText(
    [
      "<Hi, I'm Charl a Web Developer />",
      "<I build fast, functional, and fabulous websites. />",
    ],
    70,
    1200
  );

  return (
    <section className="about-wrap" aria-labelledby="about-heading">
      <h2
        id="about-heading"
        style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
      >
        About me
      </h2>

      <div style={{ flex: 1 }}>

      </div>
    </section>
  );
}
