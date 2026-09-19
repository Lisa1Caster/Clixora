# Vercel Deployment Guide (How to Deploy Clixora SEO to Vercel)

This project is fully configured and ready for 1-click deployment on **Vercel** with full Single-Page Application (SPA) routing support.

---

## Method 1: Deploy via GitHub (Recommended & Easiest)

1. **Export to GitHub / Download Code**:
   - In Google AI Studio, click the top-right menu and choose **Export to GitHub** (or download the ZIP file and push to a new GitHub repository).
2. **Import into Vercel**:
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Connect your GitHub account and select your repository.
3. **Deploy**:
   - Framework Preset: **Vite** (Vercel automatically detects this from `vercel.json`).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**!
   - Within 30 seconds, your site will be live on your `.vercel.app` domain with free SSL.

---

## Method 2: Deploy using Vercel CLI (From Terminal)

If you have downloaded the project to your computer:

```bash
# 1. Install Vercel CLI (if not already installed)
npm i -g vercel

# 2. Deploy directly
vercel --prod
```

Follow the fast prompts, and Vercel will upload and publish your live website instantly.

---

## Method 3: Deploy the Built `dist` Folder Directly

The production-ready build has already been generated in the `dist/` folder containing:
- `dist/index.html`
- `dist/assets/` (Minified JS & CSS)

You can drag and drop this `dist` folder into Vercel or any static host (Netlify, Cloudflare Pages, Firebase Hosting, GitHub Pages).

---

## Configuration Files Included:
- `vercel.json` ensures that all routes rewrite to `index.html` without 404 errors.
- Clean URLs enabled.
