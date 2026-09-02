# hatemchehade — portfolio

Personal portfolio site. React + Vite + React Router. Five pages, no backend.

## Run it locally

```bash
npm install     # once
npm run dev     # http://localhost:5173
```

`npm run build` outputs to `dist/`. `npm run preview` serves that build.

## Where things live

```
src/
  content.js          ← ALL text and data. Edit this to update the site.
  styles.css          ← all colours, fonts, spacing (CSS variables at the top)
  pages/              ← one file per page: Home, About, Projects, Experience, Contact
  components/         ← Nav, Footer, Portrait, Reveal, ThemeToggle, ScrollToTop
public/
  hatem.jpg           ← your photo (see below)
  Hatem-Chehade-Resume.pdf
resume/
  resume.html         ← source for the PDF
vercel.json           ← routing config. Do not delete (see DEPLOY.md).
```

## Updating the site

**Almost everything is in `src/content.js`.** Nothing in `pages/` or
`components/` needs to change when you add a project, a job, or a course.

Adding a project:

```js
// src/content.js → projects array
{
  id: "my-project",          // unique, lowercase
  tone: "indigo",            // indigo | coral | green | amber | pink
  name: "My Project",
  punch: "One line that makes someone care.",
  status: "Shipped",         // "Shipped" | "In progress" | "In validation"
  period: "Jan – Mar 2027",  // "" hides the date chip
  short: "Two sentences max. This is what people actually read.",
  tags: ["Python", "Flask"],
  links: [{ label: "See the code", href: "https://github.com/..." }],
  more: [                    // shown when someone clicks "read the story"
    "First paragraph.",
    "Second paragraph."
  ]
}
```

Adding a job: append to `experience` with a `tone`. Adding a course: put it in
`education.highlights` (with a grade) or `education.rest` (without).

### Your photo

`public/hatem.jpg` is used in the hero and on the About page. To change it,
replace that file, keeping the name.

**A better photo would noticeably improve the site.** The current one is 400×400,
which is small for the size it's displayed at, and it's a casual indoor selfie.
Ideally: at least 1000×1000, shot in daylight or near a window, plain background,
looking at the camera. It doesn't need to be professional — just sharp and
well-lit. Square or portrait crop.

If the file is missing entirely the site shows a coloured "HC" block instead of
breaking, so you can experiment freely.

### Light / dark mode

Toggle is in the nav. The choice saves to `localStorage` and is applied by an
inline script in `index.html` before first paint, so there's no flash on reload.
Default is light. Both themes come from the CSS variables at the top of
`styles.css` — `:root` is light, `[data-theme="dark"]` is dark.

### Colours

Five accent tones — indigo, coral, green, amber, pink — defined once in
`styles.css`. Anything with `className="t-indigo"` (etc.) picks up that tone for
its text, background tint, and borders. That's how project cards, value cards,
and experience entries each get their own colour.

### Resume PDF

`public/Hatem-Chehade-Resume.pdf` is what the download buttons serve. Source is
`resume/resume.html`; see `resume/README-resume.md` to regenerate it (open in
Chrome, Ctrl+P, Save as PDF — no tooling needed).

### Things marked TODO

Search `src/content.js` for `TODO`. Dates for SecurePass, OMGame, and Sanctum are
blank because I didn't want to guess them — blank renders nothing, so the site is
fine either way.

Also set `meta.url` once the final URL is settled.

## Deploying

See `DEPLOY.md`. Short version: push to GitHub, Vercel redeploys automatically.
