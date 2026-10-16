import { Link } from 'react-router-dom';
import { home, img } from '../content.js';

export default function Home() {
  return (
    <>
      <section className="section yellow hero">
        <div className="container">
          <h1 className="display">{home.hero}</h1>
        </div>
      </section>

      <section className="photo-band" aria-label={home.image.alt}>
        <img src={img(home.image.src)} alt={home.image.alt} />
      </section>

      <section className="section dark">
        <div className="container narrow center">
          <p className="lead">{home.intro}</p>
          <Link to="/the-how" className="btn btn-yellow">Our Services</Link>
        </div>
      </section>

      <section className="section yellow cta">
        <div className="container center">
          <h2 className="display">{home.cta}</h2>
          <Link to="/contact_us" className="btn btn-dark">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
