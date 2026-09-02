import { experience, education, skills } from "../content.js";
import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="kicker t-amber">Experience</span>
          <h1 className="h-lg" style={{ maxWidth: "18ch" }}>
            Four jobs, one full course load, no dropped balls.
          </h1>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 12 }}>
        <div className="wrap">
          {experience.map((r, i) => (
            <Reveal key={r.org} delay={Math.min(i * 70, 210)}>
              <div className={`role t-${r.tone}`}>
                <div>
                  <div className="role-when">{r.period}</div>
                  <div className="role-meta">{r.meta}</div>
                </div>
                <div>
                  <h3>{r.role}</h3>
                  <p className="role-org">{r.org}</p>
                  <ul>
                    {r.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  {r.links && (
                    <div className="proj-actions" style={{ marginTop: 20 }}>
                      {r.links.map((l) => (
                        <a
                          className="btn btn-ghost"
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band band-alt">
        <div className="wrap">
          <Reveal>
            <span className="kicker t-indigo">Education</span>
            <div className="edu">
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <div className="edu-facts">
                <span className="fact">{education.period}</span>
                <span className="fact">{education.gpa}</span>
              </div>
              <p className="body-lg" style={{ margin: 0 }}>
                {education.note}
              </p>

              <div className="course-grid">
                {education.highlights.map((c) => (
                  <div className="course" key={c.name}>
                    <span>{c.name}</span>
                    <span className="grade">{c.grade}</span>
                  </div>
                ))}
              </div>

              <div className="course-rest">
                {education.rest.map((c) => (
                  <span className="tag" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal>
            <span className="kicker t-coral">Toolkit</span>
            <h2 className="h-lg" style={{ marginBottom: 30 }}>
              What I build with.
            </h2>
          </Reveal>

          {skills.map((s, i) => (
            <Reveal key={s.group} delay={Math.min(i * 60, 180)}>
              <div className="skill-row">
                <div className="skill-name">{s.group}</div>
                <div className="skill-items">
                  {s.items.map((it) => (
                    <span className="tag" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
