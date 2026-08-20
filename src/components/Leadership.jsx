import { leadership } from "../content.js";

export default function Leadership() {
  return (
    <section id="leading" aria-labelledby="leading-h">
      <div className="wrap">
        <p className="eyebrow">03 — Communication & leadership</p>
        <h2 id="leading-h">{leadership.heading}</h2>
        <p className="prose">{leadership.intro}</p>

        <div className="proof-grid">
          {leadership.proof.map((p) => (
            <div className="proof" key={p.label}>
              <div className="proof-stat">{p.stat}</div>
              <div className="proof-label">{p.label}</div>
              <div className="proof-note">{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
