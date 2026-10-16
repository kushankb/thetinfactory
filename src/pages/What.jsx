import { useState, useEffect, useCallback } from 'react';
import { what, img } from '../content.js';

export default function What() {
  const [active, setActive] = useState(null);
  const n = what.gallery.length;
  const close = () => setActive(null);
  const step = useCallback((d) => setActive((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, step]);

  return (
    <>
      <section className="section dark">
        <div className="container narrow">
          <h2 className="heading accent">{what.title}</h2>
          {what.paragraphs.map((p, i) => <p key={i} className="body">{p}</p>)}
        </div>
      </section>
      <section className="section dark gallery-section">
        <div className="container">
          <div className="gallery">
            {what.gallery.map((f, i) => (
              <button key={f} className="tile" onClick={() => setActive(i)} aria-label={`Open image ${i + 1} of ${n}`}>
                <img src={img(f)} alt={`Custom tin packaging example ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">×</button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <img src={img(what.gallery[active])} alt={`Custom tin packaging example ${active + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
