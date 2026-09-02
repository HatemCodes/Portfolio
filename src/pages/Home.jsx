import { Link } from "react-router-dom";
import { hero, stats, pillars, meta, contact } from "../content.js";
import Portrait from "../components/Portrait.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="avail">
              <span className="pulse" aria-hidden="true" />
              {hero.availability}
            </p>

            <p className="hello">{hero.greeting}</p>
            <h1 className="h-xl">
              I build software people can <span className="hl">actually trust</span>.
            </h1>
            <p className="hero-sub">{hero.sub}</p>

            <div className="hero-cta">
              <Link className="btn btn-primary" to="/projects">
                See my work
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a className="btn btn-ghost" href={meta.resume} download>
                Download resume
              </a>
              <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
                Email me
              </a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-blob" aria-hidden="true" />
            <div className="portrait">
              <Portrait />
            </div>
          </div>
        </div>

        <div className="wrap">
          <Reveal className="stat-row">
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Reveal>
            <span className="kicker t-indigo">What I work on</span>
            <h2 className="h-lg">Three ways of asking the same question.</h2>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Can this be relied on? It shows up in my projects as encryption, as
              verification, and as privacy — but underneath it is one question.
            </p>
          </Reveal>

          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Link className={`pillar t-${p.tone}`} to={p.link}>
                  <span className="pillar-num">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.line}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <h2 className="h-lg">Looking for an intern who ships?</h2>
              <p>
                I'm after a co-op or internship term and I'd rather talk than send
                another cover letter into the void.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link className="btn btn-primary" to="/contact">
                  Get in touch
                </Link>
                <a className="btn btn-ghost" style={{ color: "inherit", borderColor: "currentColor" }} href={meta.resume} download>
                  Resume (PDF)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
