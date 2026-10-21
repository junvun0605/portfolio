# Chung Jun Vun — GitHub Pages portfolio

A personal, employer-facing adaptation of your recovered September 2026 portfolio website. Four complete pages, clearly labelled project placeholders, local photos and screenshots, updated career history, SEO/AI experience, and the latest résumé PDF are included.

## Publish on GitHub Pages

1. Create a repository on your GitHub account. For a root portfolio URL, name it `<your-username>.github.io`; otherwise use a name such as `portfolio`.
2. Upload the contents of this folder to the repository, preserving the `docs` and `src` folders. Upload the extracted files, not the ZIP itself.
3. Open repository **Settings → Pages**. Under build and deployment, choose **Deploy from a branch**, then **main** and **/docs**. Save.
4. GitHub displays the live URL in Pages settings once deployment finishes. A user site uses `https://<your-username>.github.io/`; a project repository uses `https://<your-username>.github.io/portfolio/`.
5. Set `site_url` in `site.json` to that exact URL (without a final slash). Run `python3 build.py` and commit the updated files to generate correct canonical URLs and a sitemap.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

The ready-to-upload `docs/` output requires no Node, PHP, Python server, build step or external libraries in production. All page and asset links are relative, so root sites and repository subpaths both work. The `.nojekyll` file disables Jekyll processing.

## Edit the website

- Shared header: `src/header.html`
- Shared footer: `src/footer.html`
- Page content: `src/index.html`, `src/about.html`, `src/projects.html`, `src/contact.html`
- Titles, descriptions and final URL: `site.json`
- Styling: `docs/assets/css/styles.css`
- Navigation and motion: `docs/assets/js/main.js`
- Photos and project images: `docs/assets/images/`
- Résumé: `docs/assets/files/Chung_Jun_Vun_Resume.pdf`

Run `python3 build.py` after editing templates or `site.json`. Python is only a local maintenance tool; generated HTML is already included. Open `docs/index.html` directly for a quick preview, or use a local static server.

## What was retained and updated

- Retained the personal layout and photos; replaced existing client project cards with labelled placeholders.
- Updated email to junvunwork@gmail.com and added the latest résumé PDF.
- Updated Four Media Singapore to May 2026–Present.
- Split Inspiren into Web Developer (July 2024–September 2025) and Senior Web Developer (October 2025–April 2026).
- Added design collaboration, animation research, SEO/AEO/GEO and AI experience.
- Added a clearly labelled personal AI receptionist project in development.
- Replaced the PHP contact form with real email links and removed all PHP dependencies.
- Removed unconfirmed numeric headline claims and unsupported sports details from the older generated copy.
- Content remains visible without JavaScript. Motion respects reduced-motion preferences.

## Source and publication notes

The October 15 Putify brief and Axium reference were recovered, but no completed October Astro/Axium implementation was found. This package adapts the earlier completed personal portfolio, not an exact copy of an unseen newer build. It deliberately does not include the purchased Axium template files.

Existing client names, project screenshots and outbound project links have been removed from the project showcases. Replace placeholders in src/index.html and src/projects.html, then rebuild.

The attached résumé links to https://junvun0605.github.io/portfolio/. Site canonical URLs and sitemap use that address.

No analytics, fake forms, testimonials, invented results or payment features are included. No site has been deployed by preparing this package.
