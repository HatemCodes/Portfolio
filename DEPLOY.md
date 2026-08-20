# Going live, and the domain question

## Short answer on cost

You do not have to buy anything to put this online.

Vercel's Hobby plan is free for personal, non-commercial projects, and every
project gets a free `something.vercel.app` URL. That means you can be live today
at `hatemchehade.vercel.app` for $0, and decide about a domain later.

A custom domain is a separate purchase from a registrar — it is not a Vercel
hosting cost. A `.com` runs roughly CAD $15–25/year depending on registrar, and
it renews annually. You already pay that for `hatemfit.com`; a second domain is
one more line of the same size, not a new category of expense.

So the real question is not "can I afford it" — it is "is a name domain worth
~$18/year to me right now."

## The three options, honestly

**1. Free `.vercel.app` subdomain.** `hatemchehade.vercel.app`. Costs nothing,
works immediately, HTTPS included. On a resume it reads as "developer who ships"
rather than "developer who does not own a domain" — plenty of engineers use
these. Downside: it is slightly harder to say out loud at a career fair, and it
is not portable if you ever leave Vercel.

**2. Buy `hatemchehade.com`.** ~CAD $18/year. This is what I would do before you
start sending applications in volume. Your name is what a recruiter remembers and
what they type into a search bar three weeks later; the URL should match it.
Check availability at a registrar first — if `.com` is taken, `hatemchehade.dev`
or `.ca` are both credible and `.dev` is HTTPS-only by default, which is a small
nice-to-have given the subject matter.

**3. A subdomain of `hatemfit.com`.** Something like `portfolio.hatemfit.com` or
`me.hatemfit.com`. Costs nothing extra, since you already own the domain. But
every application you send carries a fitness-brand URL, and a recruiter who
strips it back to the root lands on a coaching site. That is a confusing first
impression for a software role, and it is the reason I would not lead with this.

**What I would not do:** repurpose `hatemfit.com` itself for the portfolio.
HatemFit is a real business with real clients and it is a stronger portfolio
entry when it is visibly a live, separate thing you built and run.

## Step 1 — GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
```

Create an empty repo on GitHub (no README, no .gitignore — this project has
both), then:

```bash
git remote add origin https://github.com/HatemCodes/portfolio.git
git branch -M main
git push -u origin main
```

`node_modules` and `dist` are already gitignored, so only source goes up.

## Step 2 — Vercel

1. Go to vercel.com and sign in **with GitHub**.
2. **Add New → Project**, pick the `portfolio` repo, **Import**.
3. Vercel detects Vite automatically. Framework preset `Vite`, build command
   `npm run build`, output directory `dist`. Do not change anything.
4. **Deploy.** About a minute.

You now have a live URL. From this point, every `git push` to `main`
redeploys automatically — that is the whole update loop:

```bash
# edit src/content.js in VS Code
git add .
git commit -m "Add Longevity write-up"
git push
```

Pull requests get their own preview URLs, which is handy if you want to see a
change live before it hits the real site.

## Step 3 — Pointing a domain at it (whenever you buy one)

1. Buy the domain. Cloudflare Registrar sells at cost and is usually cheapest;
   Porkbun and Namecheap are both fine. You can also buy through Vercel, which
   skips the DNS step entirely at a small premium.
2. In your Vercel project: **Settings → Domains → Add Domain**, type
   `hatemchehade.com`. Vercel will also prompt you to add `www.hatemchehade.com`
   — accept, it sets up the redirect for you.
3. Vercel then shows you the exact DNS records to create. **Copy the values off
   that screen rather than off any guide, including this one** — Vercel assigns
   per-project CNAME targets and rotates apex IPs, so a hardcoded value from a
   blog post is how people end up with a domain that half-works.

   The shape of it:

   | Type  | Name  | Value                                  |
   |-------|-------|----------------------------------------|
   | A     | `@`   | the IP Vercel shows for the apex       |
   | CNAME | `www` | the target Vercel shows for `www`      |

4. Add those two records at your registrar's DNS panel and save.
5. Wait. DNS propagation is usually minutes but can take a few hours. Vercel's
   Domains page flips to "Valid Configuration" when it sees the records, and
   issues the HTTPS certificate automatically. You do nothing for the cert.

If you buy through Cloudflare, set the two records to **DNS only** (grey cloud,
not orange) — Cloudflare's proxy in front of Vercel's edge causes redirect loops.

### Doing the same for hatemfit.com

Same process, different Vercel project. Two projects, two domains, both free on
Hobby. If you want the fitness site as `hatemfit.com` and the portfolio as
`hatemchehade.com`, they never touch each other.

## Step 4 — after it is live

- Put the URL on your LinkedIn (Contact info → Website), in your GitHub profile
  bio, and in your resume header.
- Set `meta.url` in `src/content.js` to the real URL.
- Fill in the `TODO` dates in `src/content.js`.

Sources: [Vercel — Adding & Configuring a Custom Domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain), [Vercel KB — Using A records with Vercel](https://vercel.com/kb/guide/a-record-and-caa-with-vercel)
