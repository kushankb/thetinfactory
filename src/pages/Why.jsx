import { Link } from 'react-router-dom';
import { why, img } from '../content.js';

export default function Why() {
  return (
    <section className="section yellow">
      <div className="container center">
        <h2 className="heading">{why.title}</h2>
        <div className="grid grid-4">
          {why.items.map((it) => (
            <div className="feature" key={it.title}>
              <img className="icon" src={img(it.icon)} alt="" />
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
        <Link to="/the-how" className="btn btn-dark">How to start</Link>
      </div>
    </section>
  );
}
