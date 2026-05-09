'use client';
import { useState, useEffect } from 'react';

export default function ProjectImageSlider({ images = [], alt = '' }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(id);
  }, [count, current]);

  if (count === 0) return null;

  return (
    <div className="proj-slider" aria-label="Project screenshots">
      <div
        className="proj-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === 0 ? alt : `${alt} screenshot ${i + 1}`}
            className="proj-slide-img"
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}
      </div>

      {count > 1 && (
        <div className="proj-dots" aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={i}
              className={`proj-dot${i === current ? ' proj-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              tabIndex={-1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
