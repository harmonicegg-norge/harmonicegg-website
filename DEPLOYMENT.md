# Quick Deployment Guide - Harmonic Egg Website

## 🚀 Deploy to Netlify (Easiest - Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit - Harmonic Egg website"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/harmonicegg-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Go to https://netlify.com and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and select your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
5. Click "Deploy site"
6. Done! Site will be live in 2-3 minutes

### Step 3: Connect Domain
1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `harmonicegg.no`
4. Follow instructions to update DNS at your registrar
5. Netlify will automatically provision SSL certificate

**Total time: 15-20 minutes**

---

## 🔧 Alternative: Deploy to Vercel

### Setup:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, then:
vercel --prod
```

**Total time: 10 minutes**

---

## 📤 Alternative: Traditional FTP Upload

### Setup:
1. Build the site locally:
   ```bash
   npm run build
   ```

2. Upload contents of `_site/` folder to your web host via FTP

3. Point domain to hosting server

**Total time: 30 minutes (depends on hosting provider)**

---

## 🎯 After Deployment Checklist

### Immediate:
- [ ] Test all pages on mobile and desktop
- [ ] Test contact form (update Formspree ID first!)
- [ ] Test booking link to EasyPractice
- [ ] Check all links work
- [ ] Test on different browsers

### Within 24 hours:
- [ ] Setup Google Analytics
- [ ] Setup Google Search Console
- [ ] Add site to Google Business Profile
- [ ] Submit sitemap to Google

### Within 1 week:
- [ ] Monitor site speed with PageSpeed Insights
- [ ] Check mobile usability in Google Search Console
- [ ] Test contact form submissions
- [ ] Get feedback from Christina

---

## 🔍 SEO Setup After Launch

### Google Search Console:
1. Go to https://search.google.com/search-console
2. Add property: `harmonicegg.no`
3. Verify ownership (Netlify makes this easy)
4. Submit sitemap: `https://harmonicegg.no/sitemap.xml`

### Google Analytics:
1. Go to https://analytics.google.com
2. Create account and property
3. Get tracking ID
4. Add to website (in base.njk before `</head>`)

### Google Business Profile:
1. Claim/verify business listing
2. Add photos
3. Add business hours
4. Add website link

---

## 📧 Contact Form Setup (Formspree)

1. Go to https://formspree.io and sign up (free)
2. Create new form
3. Copy form ID (looks like: `xpzkabcd`)
4. Update in `src/pages/kontakt.njk`:
   ```html
   <form action="https://formspree.io/f/xpzkabcd" method="POST">
   ```
5. Rebuild and deploy

**Free tier:** 50 submissions/month (plenty for most businesses)

---

## 🔄 How to Update Site After Launch

### Option A: With Git (Automatic Deploy)
```bash
# Make changes to files
# Then:
git add .
git commit -m "Description of changes"
git push

# Netlify automatically rebuilds and deploys!
```

### Option B: Manual
1. Make changes locally
2. Run `npm run build`
3. Upload `_site/` folder via FTP

---

## 🆘 Troubleshooting

### Site won't build on Netlify:
- Check build logs for errors
- Make sure `package.json` has correct scripts
- Ensure Node version is compatible (set in Netlify settings)

### Contact form not working:
- Check Formspree form ID is correct
- Check Formspree dashboard for submissions
- Test with different email

### Slow loading:
- Optimize images (compress before uploading)
- Check hosting location (CDN helps)
- Test with PageSpeed Insights

### Domain not connecting:
- DNS changes take 24-48 hours
- Double-check DNS settings
- Contact Netlify support (they're helpful!)

---

## 💡 Pro Tips

1. **Always test locally first:**
   ```bash
   npm start
   # Visit http://localhost:8080
   ```

2. **Use git branches for big changes:**
   ```bash
   git checkout -b new-feature
   # Make changes
   git checkout main
   git merge new-feature
   ```

3. **Backup before major changes:**
   - Git automatically backs up everything
   - Download `_site/` folder as extra backup

4. **Monitor performance:**
   - Check Google Analytics weekly
   - Monitor search rankings monthly
   - Review contact form submissions

---

## 📞 Support Resources

### Netlify:
- Docs: https://docs.netlify.com
- Support: Very responsive community forum

### 11ty:
- Docs: https://www.11ty.dev/docs/
- Discord: Active community

### General Web:
- MDN Web Docs: https://developer.mozilla.org
- W3Schools: https://www.w3schools.com

---

## 🎉 You're Done!

Once deployed:
1. ✅ Site is live
2. ✅ Auto-deploys on every push
3. ✅ Free SSL certificate
4. ✅ CDN for fast global access
5. ✅ Costs $0-40/month instead of $200/month

**Enjoy your savings of $1,680-1,920 per year!** 🎊
