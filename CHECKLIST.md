# ✅ Launch Checklist

## Pre-Launch Tasks

### Week 1: Setup & Review
- [ ] Install dependencies (`npm install`)
- [ ] Run locally (`npm start`)
- [ ] Review all pages
- [ ] Show Christina and get feedback
- [ ] Gather all images needed
- [ ] Collect real testimonials

### Week 2: Content & Images
- [ ] Add hero images
- [ ] Add service photos  
- [ ] Add testimonial photos
- [ ] Add logo/favicon
- [ ] Update all text content
- [ ] Verify pricing information
- [ ] Verify contact information
- [ ] Build "Om Harmonic Egg" page
- [ ] Build "Tjenester" page
- [ ] Setup Formspree (contact form)
  - Sign up at https://formspree.io
  - Replace `YOUR_FORM_ID` in kontakt.njk

### Week 3: Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test all links work
- [ ] Test contact form works
- [ ] Test booking link works
- [ ] Check spelling/grammar
- [ ] Verify all phone numbers/emails
- [ ] Test Google Maps works

### Week 4: Deploy
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Sign up for Netlify
- [ ] Connect GitHub to Netlify
- [ ] Configure build settings
  - Build command: `npm run build`
  - Publish directory: `_site`
- [ ] Deploy site
- [ ] Test live site works

### Week 5: Domain & SEO
- [ ] Connect domain (harmonicegg.no)
- [ ] Wait for DNS to propagate (24-48h)
- [ ] Verify SSL certificate works
- [ ] Setup Google Search Console
  - Add property
  - Verify ownership
  - Submit sitemap
- [ ] Setup Google Analytics
  - Create account
  - Add tracking code
  - Verify tracking works
- [ ] Update Google Business Profile
  - Add website link
  - Add photos
  - Update hours

### Week 6: Monitor
- [ ] Check analytics daily
- [ ] Monitor search rankings
- [ ] Check for any errors
- [ ] Review contact form submissions
- [ ] Get user feedback
- [ ] Make adjustments as needed

---

## Quick Reference

### To Run Locally:
```bash
npm install
npm start
```

### To Build for Production:
```bash
npm run build
```

### To Deploy:
Push to GitHub → Netlify auto-deploys

---

## Important Links

- **Documentation:** Read START-HERE.md first
- **Quick Start:** QUICK-START.md
- **Deployment Guide:** DEPLOYMENT.md
- **Visual Design:** VISUAL-DESIGN.md

---

## Contact Form Setup

1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy form ID (e.g., `xpzkabcd`)
5. Replace in `src/pages/kontakt.njk`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Change to:
   ```html
   <form action="https://formspree.io/f/xpzkabcd" method="POST">
   ```
6. Rebuild and test!

---

## Domain Connection

1. In Netlify: Domain settings → Add custom domain
2. Enter: `harmonicegg.no`
3. Update DNS at domain registrar:
   - Add A record or CNAME as instructed by Netlify
4. Wait 24-48 hours for propagation
5. Netlify will auto-provision SSL certificate

---

## Troubleshooting

### Site won't build:
- Check Node.js is installed
- Run `npm install` again
- Check build logs for errors

### Contact form not working:
- Verify Formspree form ID is correct
- Check Formspree dashboard
- Test with different email

### Images not showing:
- Check image paths are correct
- Images should be in `src/assets/images/`
- Reference as `/assets/images/filename.jpg`

### Site slow:
- Compress images before uploading
- Check internet connection
- Clear browser cache

---

## Success Metrics

After launch, monitor:
- [ ] Page load speed (should be < 2 seconds)
- [ ] Mobile usability score (should be 95+)
- [ ] SEO score (should be 90+)
- [ ] Search rankings maintain or improve
- [ ] Contact form submissions
- [ ] Booking conversions

---

## Monthly Maintenance

### Do This Every Month:
- [ ] Check Google Analytics
- [ ] Review search rankings
- [ ] Check for broken links
- [ ] Backup website
- [ ] Review contact form submissions
- [ ] Update blog if applicable
- [ ] Check for any security updates

---

**Estimated Total Time to Launch: 2-4 weeks**

**Cost After Launch: $40/month** (vs $200/month)

**Annual Savings: $1,920!** 🎉

---

Print this checklist and check off items as you complete them!
