# The Anti-Guru Guide — Landing Page

Landing page for **"The Anti-Guru Guide: 7 Steps to Invest Without Blind Faith"** ebook by Carlin Peton.

## Tech Stack

- HTML / CSS / JavaScript
- Tailwind CSS (CDN)
- Mobile-first, fully responsive
- No build step required

## Local Development

Simply open `index.html` in a browser, or run a local server:

```bash
# Python
python3 -m http.server 8080

# Node.js (if npx available)
npx serve .
```

Then visit `http://localhost:8080`.

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repository
4. Framework Preset: **Other**
5. Build Command: (leave empty)
6. Output Directory: `.` (root)
7. Deploy

Vercel will auto-deploy on every push to `main`.

### Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
3. Connect GitHub repository
4. Build Command: (leave empty)
5. Build output directory: `.` (root, or `/`)
6. Deploy

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build Command: (leave empty)
4. Publish Directory: `.`
5. Deploy

## Configuration

### Email Capture (ConvertKit)

The forms are currently placeholder. To connect ConvertKit:

1. Create a form in ConvertKit
2. Get your API key and Form ID
3. In `index.html`, find the `TODO: Replace with ConvertKit` comments
4. Uncomment and update the fetch call with your credentials

### CTA / Checkout Links

Currently, the CTA buttons capture email. To add a direct checkout:

1. Set up your product on Gumroad or Stripe
2. Replace the form action or button href with your checkout URL

## Custom Domain

After deploying to Vercel/Cloudflare:

1. Add your custom domain in the platform's dashboard
2. Update DNS records as instructed
3. SSL is automatic on all platforms above

## Structure

```
carlin-invests-funnel/
├── index.html          # Full landing page
├── assets/
│   └── logo.svg        # CP logo (white)
├── .gitignore
└── README.md
```

## Brand

- **Background:** #0D0B14
- **Surface:** #16131F
- **Accent:** #D4D4D8
- **Text:** #F0EDF5
- **Secondary:** #9A95A8
- **Headings:** Georgia Bold Italic, ALL CAPS
- **Titles:** Georgia Regular
- **Body:** Inter Regular

---

*2810 · CP*
