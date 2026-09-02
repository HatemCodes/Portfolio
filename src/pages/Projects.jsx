import { useState } from "react";
import { projects } from "../content.js";
import Reveal from "../components/Reveal.jsx";

function Project({ p }) {
  const [open, setOpen] = useState(false);
  const bodyId = `${p.id}-more`;

  return (
    <div className={`proj t-${p.tone}`}>
      <div className="proj-bar" />
      <div className="proj-in">
        <div>
          <div className="proj-top">
            <span className="pill">{p.status}</span>
            {p.period && <span className="pill pill-quiet">{p.period}</span>}
          </div>

          <h2>{p.name}</h2>
          <p className="proj-punch">{p.punch}</p>
        </div>

        <div>
        <p className="proj-short">{p.short}</p>

        <div className="tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="proj-actions">
          <button
            className="more-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={bodyId}
          >
            {open ? "Show less" : "Read the story"}
            <span className="car" aria-hidden="true">
              ↓
            </span>
          </button>

          {p.links.map((l) => (
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
        </div>

        {open && (
          <div className="proj-more" id={bodyId}>
            {p.more.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="kicker t-green">Projects</span>
          <h1 className="h-lg" style={{ maxWidth: "18ch" }}>
            Five things I built, and why.
          </h1>
          <p className="body-lg">
            Short version up top. Hit "read the story" on any of them if you want the
            reasoning, the trade-offs, and what I'd do differently.
          </p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 12 }}>
        <div className="wrap proj-list">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 70, 210)}>
              <Project p={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
