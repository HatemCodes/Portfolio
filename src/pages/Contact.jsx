import { useState } from "react";
import { contact, meta, hero } from "../content.js";
import Reveal from "../components/Reveal.jsx";

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
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="kicker t-pink">Contact</span>
          <h1 className="h-xl" style={{ maxWidth: "12ch" }}>
            {contact.headline}
          </h1>
          <p className="body-lg">{contact.line}</p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 12 }}>
        <div className="wrap">
          <Reveal>
            <div className="mail-card">
              <a className="mail-big" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>

              <div className="proj-actions">
                <a className="btn btn-primary" href={`mailto:${contact.email}`}>
                  Send an email
                </a>
                <button className="btn btn-ghost" type="button" onClick={copyEmail}>
                  Copy address
                </button>
                <a className="btn btn-ghost" href={meta.resume} download>
                  Download resume
                </a>
                {copied && <span className="copied">Copied</span>}
              </div>

              <div className="link-grid">
                {contact.links.map((l) => (
                  <a
                    className={`link-card t-${l.tone}`}
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {l.label}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ))}
              </div>

              <p className="body-lg" style={{ marginTop: 32, marginBottom: 0 }}>
                Based in {contact.location}. {hero.availability}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
