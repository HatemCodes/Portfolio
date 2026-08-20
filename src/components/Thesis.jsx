import { thesis } from "../content.js";

export default function Thesis() {
  return (
    <section id="thesis" aria-labelledby="thesis-h">
      <div className="wrap">
        <p className="eyebrow">01 — Approach</p>
        <h2 id="thesis-h">{thesis.heading}</h2>
        <div className="prose">
          {thesis.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="thesis-aside">{thesis.aside}</p>
      </div>
    </section>
  );
}
