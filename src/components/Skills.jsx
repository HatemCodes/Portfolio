import { skills } from "../content.js";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <p className="eyebrow">06 — Toolkit</p>
        <h2 id="skills-h">Technical skills</h2>

        <div className="skill-rows">
          {skills.map((s) => (
            <div className="skill-row" key={s.group}>
              <div className="skill-name">{s.group}</div>
              <div className="skill-items">
                {s.items.map((i) => (
                  <span className="tag" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
