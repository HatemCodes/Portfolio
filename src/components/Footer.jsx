import { contact } from "../content.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <span>© {new Date().getFullYear()} Hatem Chehade · {contact.location}</span>
        <div className="foot-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          {contact.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer noopener">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
