# Route 3 Tech Website (Netlify)

A lightweight, one-page static website for Route 3 Tech.

## What is included

- One-page site with sections: Hero, Services, Pricing, Service Area, How it Works, Trust, FAQ, Contact.
- Netlify Forms contact form that redirects to a simple thank-you page.
- Grayscale styling with a subtle neon accent inspired by the logo.
- No frameworks, no build step, low maintenance.

## Files

- `index.html` main site
- `css/styles.css` styles
- `js/main.js` small script for mobile menu and footer year
- `assets/route3tech-logo-neon.png` logo (replace with your preferred file if needed)
- `assets/route3tech-cover.png` hero background (AI generated)
- `thanks/index.html` thank-you page for form submissions

## Deploy on Netlify (fast path)

1. Create a folder and keep these files as-is.
2. In Netlify, choose **Add new site → Deploy manually**.
3. Drag and drop the entire folder, or upload a zip of the folder contents.

Netlify will host the site immediately and give you a `*.netlify.app` URL.

## Connect your custom domain

1. Netlify dashboard → **Domain management** → **Add a domain**.
2. Follow Netlify’s DNS instructions.
3. In Porkbun, point DNS records to Netlify (Netlify will show exactly what to add).

## Enable email notifications for the form

1. Netlify dashboard → **Forms** → select **contact**.
2. Go to **Form notifications**.
3. Add an email notification to: `raburnmh@proton.me`.

## Update the business URL in schema

In `index.html`, find the JSON-LD block and set:

- `"url": "https://YOURDOMAIN.com"`

## Replace images

If you change the filenames, update these references in `index.html` and `styles.css`:

- `/assets/route3tech-logo-neon.png`
- `/assets/route3tech-cover.png`

## Notes

- Copy is written without em dashes.
- Pricing and disclaimers match the brief.
