import { how, img } from '../content.js';

export default function How() {
  return (
    <>
      <section className="section dark how-hero">
        <div className="container center">
          <img className="hero-icon" src={img(how.heroImage)} alt="Design thinking illustration" />
        </div>
      </section>
      <section className="section yellow">
        <div className="container center">
          <h2 className="heading">{how.title}</h2>
          <p className="subtitle">{how.subtitle}</p>
          <div className="grid grid-3">
            {how.steps.map((s) => (
              <div className="feature" key={s.title}>
                <img className="icon" src={img(s.icon)} alt="" />
                <h4>{s.title}</h4>
                <p className="feature-lead">{s.lead}</p>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
