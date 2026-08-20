import { useState } from "react";
import { projects } from "../content.js";

function statusClass(status) {
  const s = status.toLowerCase();
  if (s.includes("ship")) return "chip shipped";
  if (s.includes("progress") || s.includes("validation")) return "chip progress";
  return "chip";
}

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const bodyId = `${project.id}-body`;

  return (
    <article className={open ? "project open" : "project"}>
      <button
        className="project-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <div className="project-top">
          <span className="project-name">{project.name}</span>
          <span className={statusClass(project.status)}>{project.status}</span>
          <span className="project-tagline">{project.tagline}</span>
        </div>

        {project.period && <div className="project-meta">{project.period}</div>}

        <p className="project-summary">{project.summary}</p>

        {project.tags.length > 0 && (
          <div className="tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}

        <span className="expand-hint">
          <span className="caret" aria-hidden="true">
            ›
          </span>
          {open ? "Hide detail" : "Read the detail"}
        </span>
      </button>

      {open && (
        <div className="project-body" id={bodyId}>
          {project.detail.map((d) => (
            <div className="detail-block" key={d.heading}>
              <h4>{d.heading}</h4>
              <p>{d.body}</p>
            </div>
          ))}

          {project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((l) => (
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
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-h">
      <div className="wrap">
        <p className="eyebrow">02 — Selected work</p>
        <h2 id="work-h">Projects</h2>
        <div className="project-list">
          {projects.map((p) => (
            <Project key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
