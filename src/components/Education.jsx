import { education } from "../content.js";

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-h">
      <div className="wrap">
        <p className="eyebrow">05 — Education</p>
        <h2 id="edu-h">University of Calgary</h2>

        <div className="edu-card">
          <p className="edu-degree">{education.degree}</p>
          <p className="edu-school">{education.school}</p>
          <div className="edu-facts">
            <span className="chip">{education.period}</span>
            <span className="chip">{education.gpa}</span>
          </div>
          <p className="edu-note">{education.note}</p>
        </div>

        <div className="course-groups">
          {education.coursework.map((g) => (
            <div className="course-group" key={g.group}>
              <h4>{g.group}</h4>
              <ul>
                {g.items.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    {c.grade && <span className="grade">{c.grade}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
