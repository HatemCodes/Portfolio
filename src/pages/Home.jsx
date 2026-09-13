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
              I build things, and <span className="hl">keep them running</span>.
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
            <span className="kicker t-indigo">What I do</span>
            <h2 className="h-lg">Three things, and they're connected.</h2>
            <p className="body-lg" style={{ marginTop: 20 }}>
              Most of what I've worked on comes back to the same question: can this be
              relied on? That's encryption in a password vault, and it's a process guide
              that stops someone guessing. Same question, different layer.
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
              <h2 className="h-lg">Want to work together?</h2>
              <p>
                I'm on co-op at Enbridge through December and thinking about what comes
                after. I'd rather have a conversation than send another cover letter into
                the void.
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
