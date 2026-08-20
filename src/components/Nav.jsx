import { nav } from "../content.js";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="nav-mark" href="#top">
          hatem chehade<span>.</span>
        </a>
        <div className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
