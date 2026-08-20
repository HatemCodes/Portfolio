import { useState } from "react";
import { contact } from "../content.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <p className="eyebrow">07 — Contact</p>
        <h2 id="contact-h">{contact.heading}</h2>
        <p className="contact-line">{contact.line}</p>

        <div className="contact-grid">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <button className="btn" type="button" onClick={copyEmail}>
            Copy address
          </button>
          {contact.links.map((l) => (
            <a
              key={l.href}
              className="btn"
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {l.label} ↗
            </a>
          ))}
          {copied && <span className="copied">copied</span>}
        </div>
      </div>
    </section>
  );
}
