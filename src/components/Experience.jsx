import { experience } from "../content.js";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <p className="eyebrow">04 — Experience</p>
        <h2 id="exp-h">Where I have worked</h2>

        <div className="roles">
          {experience.map((r) => (
            <div className="role" key={`${r.org}-${r.role}`}>
              <div className="role-when">
                {r.period}
                <span className="type">{r.type}</span>
                <span className="type">{r.location}</span>
              </div>

              <div>
                <h3 className="role-title">{r.role}</h3>
                <p className="role-org">{r.org}</p>

                <ul>
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {r.note && <p className="role-note">{r.note}</p>}

                {r.links && r.links.length > 0 && (
                  <div className="project-links">
                    {r.links.map((l) => (
                      <a
                        className="link-out"
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
