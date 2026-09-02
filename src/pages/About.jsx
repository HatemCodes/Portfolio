import { about, hero } from "../content.js";
import Portrait from "../components/Portrait.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="kicker t-coral">About</span>
          <h1 className="h-lg" style={{ maxWidth: "16ch" }}>
            {about.lead}
          </h1>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap about-grid">
          <Reveal className="about-photo">
            <Portrait alt="Hatem Chehade" />
          </Reveal>

          <Reveal className="about-text" delay={80}>
            {about.paragraphs.map((p, i) => (
              <p className="body-lg" key={i}>
                {p}
              </p>
            ))}
            <p className="body-lg" style={{ marginTop: 22 }}>
              Based in {hero.location}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Reveal>
            <span className="kicker t-indigo">How I work</span>
            <h2 className="h-lg">Three things I keep coming back to.</h2>
          </Reveal>

          <div className="value-grid">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className={`value t-${v.tone}`}>
                  <h3>{v.title}</h3>
                  <p>{v.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <div className="coach-card">
              <h2 className="h-md">{about.coaching.title}</h2>
              <p className="body-lg">{about.coaching.body}</p>
              <a
                className="btn btn-tone"
                style={{ background: "var(--green)", marginTop: 26 }}
                href={about.coaching.link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {about.coaching.link.label}
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
