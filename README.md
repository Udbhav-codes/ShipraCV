# The Editorial Desk — Shipra Tiwari

A static, editorial-style portfolio built with Vite, React and TypeScript. No backend, database or environment variables.

## Run it

Requires Node.js 20 or newer.

```bash
npm install        # install dependencies
npm run dev        # development server (http://localhost:5173)
npm run build      # type-check and create the production build in dist/
npm run preview    # serve the production build locally
```

## Where things live

| To change…                         | Edit                                  |
| ----------------------------------- | ------------------------------------- |
| Contact details, portrait, education, skills, approach text | `src/content/site.ts` |
| Writing samples and categories      | `src/content/writing.ts`              |
| Colours, fonts, spacing tokens      | `src/styles/tokens.css`               |
| Portrait photograph                 | `public/portrait.jpg`                 |

### Replace the portrait

Overwrite `public/portrait.jpg` with a new photograph (keep the file name, or update `portrait.src` in `src/content/site.ts`). A portrait-friendly crop (around 4:5) works best; if the face sits too high or low, adjust `portrait.focus` (a CSS `object-position`). If the file is missing, a typographic ST monogram is shown instead.

### Update contact details

In `src/content/site.ts`, edit `profile`: `email`, `phoneDisplay`, `phoneHref` (digits with a leading `+`), and `location`. Add a real LinkedIn URL to `profile.linkedin` and the link appears in the Contact section; leave it empty and it stays hidden.

### Add or edit writing samples

Open `src/content/writing.ts`. Every entry in `samples` is one of two kinds:

- `status: "placeholder"` — a suggested direction. It is labelled "Suggested · Not yet written" on the site and has no link. Nothing here is presented as completed work.
- `status: "published"` — a real piece. It shows a summary and optional excerpt, a working **Read Sample** link, and a reading page at `/work/<slug>`.
- `draft: true` (on a published entry) — illustrative text that was not written by Shipra. It is labelled "Sample draft" and credited to no one. Replace the text with her own writing and delete the `draft` line.

For emails, notices or side-by-side versions of a text, use a `{ type: "card", label, heading, paragraphs, signoff, note }` block in `body`.

To publish a piece, change a placeholder (or add a new entry) like this:

```ts
{
  status: "published",
  slug: "my-first-essay",        // becomes /work/my-first-essay
  title: "The title of the piece",
  category: "editorial",         // editorial | content | research | communications
  summary: "One or two sentences for the index.",
  excerpt: "Optional line pulled from the article.",
  intro: "The standfirst shown above the article.",
  context: "Self-initiated",     // optional; only say what is true
  body: [
    { type: "p", text: "A paragraph." },
    { type: "h2", text: "A subheading" },
    { type: "quote", text: "A pulled quotation." },
  ],
}
```

Reading time is calculated from the word count. Delete placeholders you do not want to show.

### Optional details that stay hidden until supplied

In `src/content/site.ts`, `education.graduationYear`, `education.score`, `education.additional` (activities, publications, certifications) and `profile.linkedin` are empty. Fill any of them in and the matching element appears automatically.

## Deploy to Netlify

`netlify.toml` is already configured:

- Build command: `npm run build`
- Publish directory: `dist`
- A `/* → /index.html` rewrite so direct visits and refreshes of `/work/<slug>` work. Unknown URLs render the site's own 404 page.

**Via Git:** push the project to GitHub/GitLab, choose *Add new site → Import an existing project* in Netlify, and accept the detected settings.

**Via drag and drop:** run `npm run build`, then drag the `dist` folder onto the Netlify dashboard.

## Notes

- Fonts (Young Serif, Work Sans) are self-hosted through `@fontsource` packages, with Georgia and system fonts as fallbacks.
- The palette follows the specified tokens. One extra token, `--color-text-soft`, is a slightly deeper tone of the muted text colour, used for small text so it meets WCAG AA contrast on the paper background.
- No `og:image` is set, because that needs an absolute URL of the deployed site. Once the domain is known, add `<meta property="og:image" content="https://your-domain/portrait.jpg">` to `index.html`.
- Lighthouse scores have not been measured.

