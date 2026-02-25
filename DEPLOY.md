# Deployment Instructions for BestWriting.tools

This project is fully built and ready for deployment. Follow these steps to push to GitHub and deploy on Vercel.

## 1. Push to GitHub

```bash
cd bestwriting-directory
git add .
git commit -m "Ready for deployment"

# Create a new repository on GitHub (https://github.com/new) named 'bestwriting-directory'
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/bestwriting-directory.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." -> "Project"
3. Import `bestwriting-directory` from your GitHub
4. Framework Preset: **Astro** (should be auto-detected)
5. Click **Deploy**

## 3. Domain Configuration

1. In Vercel Project Settings -> Domains
2. Add `bestwriting.tools`
3. Update your DNS settings as instructed by Vercel (A record or CNAME)

## 4. Post-Deployment SEO

1. **Google Analytics 4**: 
   - Update `G-MEASUREMENT_ID` in `src/layouts/Layout.astro` with your actual Measurement ID.
   - Commit and push.

2. **Google Search Console**:
   - Upload the verification HTML file if needed, or use the HTML tag method (already in Layout).
   - Submit sitemap: `https://bestwriting.tools/sitemap-index.xml`

3. **IndexNow**:
   - The API key file is in `public/`.
   - Submit your URLs to IndexNow (Bing/Yandex).
