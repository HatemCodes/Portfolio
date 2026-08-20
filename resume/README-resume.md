# Updating the resume PDF

`resume.html` is the source. `public/Hatem-Chehade-Resume.pdf` is what visitors
download — the "Resume (PDF)" buttons in the hero and contact sections point at it.

It is a separate file from `src/content.js` on purpose: resume phrasing is shorter
and more clipped than site phrasing, and the resume has to fit one page.

## To change it

1. Edit `resume.html` in VS Code. Fonts are embedded in the file, so it looks
   identical on any machine — no internet needed, nothing to install.
2. Open it in Chrome (double-click, or right-click → Open with → Chrome).
3. **Ctrl+P** → Destination **Save as PDF** → Paper size **Letter** →
   Margins **Default** → tick **Background graphics** → Save.
4. Save over `public/Hatem-Chehade-Resume.pdf`, keeping the exact filename.
5. Commit and push. Vercel redeploys and the new file is live.

## Keeping it to one page

It currently fills a single page with almost nothing to spare. If you add a
bullet, remove one — or buy space with these dials in the `<style>` block, in
the order I would try them:

| Dial | Where | Effect |
|---|---|---|
| `line-height:1.28` on `body` | ~line 3 of the CSS | Biggest lever. 1.26 is still readable. |
| `font-size:8.4pt` on `body` | same rule | Do not go below 8.2pt — it starts to look cramped. |
| `.entry{margin-bottom:5px}` | entry rule | Tightens gaps between jobs and projects. |
| `@page{margin:...}` | top of CSS | 0.4in is already tight; 0.35in is the floor before printers clip. |

Check the page count in Chrome's print preview before saving — it tells you
"1 of 1" or "1 of 2" in the corner.

## Note on the URL in the header

The contact line currently reads `hatemchehade.vercel.app`. If your Vercel
project has a different URL, fix it in **two** places in `resume.html`: the link
text and the `href`.
