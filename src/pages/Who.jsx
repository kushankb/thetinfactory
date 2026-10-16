import { Link } from 'react-router-dom';
import { who, img } from '../content.js';

export default function Who() {
  return (
    <section className="section dark">
      <div className="container who">
        <img className="who-img" src={img(who.image.src)} alt={who.image.alt} />
        <div>
          <h2 className="heading accent">{who.title}</h2>
          {who.paragraphs.map((p, i) => <p key={i} className="body">{p}</p>)}
          <Link to="/contact_us" className="btn btn-yellow">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
