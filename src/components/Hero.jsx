import { hero, contact } from "../content.js";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="hero-kicker">{hero.kicker}</p>
        <p className="hero-name">{hero.name}</p>
        <h1>{hero.headline}</h1>
        <p className="hero-sub">{hero.subhead}</p>

        <p className="hero-avail">
          <span className="dot" aria-hidden="true" />
          <span>{hero.availability}</span>
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            See the work
          </a>
          <a className="btn" href={`mailto:${contact.email}`}>
            Email me
          </a>
          {contact.links.map((l) => (
            <a
              key={l.href}
              className="btn"
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
