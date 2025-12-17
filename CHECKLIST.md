# ✅ Launch Checklist - Pre-Friday Deadline

## 🚨 CRITICAL ITEMS (Must Have Before Launch)

### 1. Analytics & Tracking Setup
**Why:** Current site has these - must maintain tracking continuity

- [ ] Add Google Analytics (GA-4)
  - Existing ID: `G-S3P15VX8HX` (reuse to keep historical data)
  - Or create new GA4 property if starting fresh
  - Add tracking code to `src/_includes/base.njk` before `</head>`

- [ ] Add Google Tag Manager
  - Existing ID: `GTM-N2C89CB4` (reuse recommended)
  - Add GTM script to `src/_includes/base.njk`

- [ ] Add Facebook Pixel
  - Existing ID: `1683333515546002` (reuse recommended)
  - Add pixel code to `src/_includes/base.njk`

### 2. Contact Form (Netlify Forms)
**Why:** Essential for customer communication

- [ ] Update contact form in `src/pages/kontakt.njk`
  - Add `netlify` attribute to form tag
  - Add `data-netlify="true"`
  - Add hidden input: `<input type="hidden" name="form-name" value="contact">`
- [ ] Test form submission after deployment
- [ ] Check Netlify dashboard for submissions
- [ ] Configure form notifications in Netlify (email alerts)

### 3. Newsletter Signup
**Why:** Current site has this for marketing

- [ ] Ask Christina which email service she currently uses
  - Options: Mailchimp, ConvertKit, or other
- [ ] Get newsletter service integration code/API key
- [ ] Add newsletter signup form (can use Netlify Forms as interim)
- [ ] Test newsletter subscription flow

### 4. Blog Verification
**Status:** Structure exists at `/admin` and `/blogg`

- [ ] Test creating a blog post via `/admin`
- [ ] Verify post appears on `/blogg` page
- [ ] Test editing existing blog posts
- [ ] Confirm images work in blog posts
- [ ] Check blog post URLs are clean

---

## 🌐 HOSTING & DOMAIN (Critical Path)

### 5. Netlify Deployment
- [ ] Push code to GitHub repository
- [ ] Connect Netlify to GitHub repo
- [ ] Configure build settings:
  - Build command: `eleventy` or `npm run build`
  - Publish directory: `_site`
  - Node version: 18 or higher
- [ ] Enable Netlify Identity (for CMS login at `/admin`)
- [ ] Enable Git Gateway in Netlify Identity settings
- [ ] Invite Christina as CMS user
- [ ] Deploy and get preview URL

### 6. Domain Configuration
**Action Required:** Christina needs to update DNS

- [ ] Prepare DNS instructions for Christina
- [ ] Get current domain registrar info (who manages harmonicegg.no)
- [ ] In Netlify: Add custom domain `harmonicegg.no`
- [ ] Christina updates DNS at registrar:
  - **Option A:** Update A record to Netlify's IP
  - **Option B:** Update nameservers to Netlify nameservers
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate auto-provisions

### 7. URL Redirects
**Status:** `src/_redirects` file exists

- [ ] Map old Squarespace URLs to new structure
- [ ] Test critical old URLs redirect correctly
- [ ] Verify 301 redirects (permanent) for SEO
- [ ] Check `/admin` is not redirected

---

## ✅ SEO & OPTIMIZATION

### 8. SEO Configuration
**Status:** Files exist (`src/robots.txt`, `src/sitemap.njk`)

- [ ] Verify `robots.txt` allows search engines
- [ ] Confirm sitemap generates at `/sitemap.xml`
- [ ] Add sitemap to Google Search Console
- [ ] Verify meta descriptions on all pages
- [ ] Check Open Graph tags for social sharing

### 9. Performance Testing
- [ ] Run Google PageSpeed Insights
  - Target: 90+ on mobile
  - Target: 95+ on desktop
- [ ] Test on 3G/4G mobile connection
- [ ] Check image optimization
- [ ] Verify no render-blocking resources

---

## 📱 TESTING

### 10. Mobile Responsiveness
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check mobile menu works
- [ ] Verify tap targets are large enough
- [ ] Test forms on mobile devices
- [ ] Check text is readable without zooming

### 11. Booking System Test
**Critical:** This is revenue stream - must work perfectly

- [ ] Verify EasyPractice iframe loads
- [ ] Test booking flow end-to-end
- [ ] Check on mobile devices
- [ ] Verify booking button links are correct
- [ ] Test alternative booking methods (phone, email)

### 12. Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge
- [ ] Check for layout issues
- [ ] Verify JavaScript works in all browsers

---

## 📋 CONTENT & ASSETS

### 13. Content Review
- [ ] Review all text with Christina
- [ ] Verify pricing is current
- [ ] Check contact information (phone, email, address)
- [ ] Add real testimonials
- [ ] Verify business hours

### 14. Images & Media
- [ ] Add hero images
- [ ] Add service photos
- [ ] Add testimonial photos
- [ ] Add logo/favicon
- [ ] Optimize all images (compress)
- [ ] Add alt text to all images

---

## 🎯 QUESTIONS TO ASK CHRISTINA

Before launch, get answers to:

1. **Analytics IDs:** Confirm we can reuse existing tracking IDs
   - Google Analytics: `G-S3P15VX8HX`
   - Google Tag Manager: `GTM-N2C89CB4`
   - Facebook Pixel: `1683333515546002`

2. **Email Service:** What service does she use for newsletters?
   - Mailchimp?
   - ConvertKit?
   - Other?

3. **Domain Access:** Who manages harmonicegg.no domain?
   - Get registrar login or contact info
   - Will need to update DNS records

4. **Final Content:** Does she have all final images and text ready?
   - Logo files
   - Hero images
   - Service photos
   - Real testimonials

---

## Quick Reference

### To Run Locally:
```bash
npm install
npm start
# Opens at http://localhost:8080
```

### To Build for Production:
```bash
npm run build
# Creates _site/ folder
```

### To Deploy:
```bash
git push origin main
# Netlify auto-deploys from GitHub
```

---

## Important Links

- **Documentation:** Read START-HERE.md first
- **Quick Start:** QUICK-START.md
- **Deployment Guide:** DEPLOYMENT.md
- **Visual Design:** VISUAL-DESIGN.md

---

## 📧 Netlify Forms Setup (Contact & Newsletter)

### Contact Form:
1. Open `src/pages/kontakt.njk`
2. Add to existing `<form>` tag:
   ```html
   <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
     <input type="hidden" name="form-name" value="contact">
     <!-- existing form fields -->
   </form>
   ```
3. Deploy to Netlify
4. Test the form
5. Configure email notifications in Netlify dashboard:
   - Settings → Forms → Notifications
   - Add Christina's email

### Newsletter Form:
1. Create simple newsletter form
2. Use Netlify Forms as interim solution
3. Later integrate with Christina's email service

**Benefits of Netlify Forms:**
- ✅ Free (100 submissions/month)
- ✅ Built-in spam protection
- ✅ Email notifications
- ✅ Download submissions as CSV
- ✅ No external service needed

---

## 🌐 Domain Connection

### For Christina's Domain Registrar:

**Method 1: DNS Records (Recommended)**
1. Log in to domain registrar (where harmonicegg.no is registered)
2. Find DNS settings
3. Update these records:
   - **A Record:** Point `@` to Netlify's load balancer IP: `75.2.60.5`
   - **CNAME Record:** Point `www` to your Netlify subdomain (e.g., `harmonicegg.netlify.app`)
4. Save changes
5. Wait 24-48 hours for DNS propagation

**Method 2: Nameservers**
1. In Netlify, get nameserver addresses
2. Update nameservers at registrar to Netlify's nameservers
3. Wait for propagation

**After DNS is configured:**
- Netlify will automatically provision free SSL certificate
- Site will be accessible at `harmonicegg.no` with HTTPS

---

## 🔍 Analytics Code Snippets

### Google Analytics (GA4)
Add to `src/_includes/base.njk` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S3P15VX8HX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-S3P15VX8HX');
</script>
```

### Google Tag Manager
Add to `src/_includes/base.njk` after opening `<head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2C89CB4');</script>
<!-- End Google Tag Manager -->
```

And after opening `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2C89CB4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### Facebook Pixel
Add to `src/_includes/base.njk` before `</head>`:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1683333515546002');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1683333515546002&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

---

## 🧪 Testing Checklist

### Pre-Launch Testing:
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] Images load properly
- [ ] Mobile menu opens/closes
- [ ] Contact form submits successfully
- [ ] Booking button works
- [ ] Google Maps loads
- [ ] Social media links work
- [ ] Phone number is clickable (mobile)
- [ ] Email address is clickable

### Performance Testing:
- [ ] Google PageSpeed Insights score 90+
- [ ] Lighthouse audit score 90+
- [ ] Images are optimized
- [ ] CSS/JS are minified
- [ ] No console errors

### SEO Testing:
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is correct
- [ ] Structured data validates

---

## 🆘 Troubleshooting

### Netlify Forms not working:
- Check form has `name` attribute
- Verify `data-netlify="true"` is present
- Add hidden input: `<input type="hidden" name="form-name" value="contact">`
- Deploy changes (forms only work on deployed site, not locally)
- Check Netlify dashboard → Forms for submissions

### Domain not connecting:
- DNS changes take 24-48 hours to propagate
- Check DNS settings at registrar are correct
- Use https://dnschecker.org to check propagation
- Contact Netlify support if issues persist

### Analytics not tracking:
- Check tracking codes are in `base.njk`
- Clear browser cache and test in incognito
- Use browser extensions (Google Tag Assistant) to verify
- Wait 24-48 hours for data to appear in dashboards

### Site won't build:
- Check build logs in Netlify dashboard
- Verify Node.js version is 18+
- Run `npm run build` locally to test
- Check all file paths are correct (case-sensitive)

---

## 📊 Success Metrics

After launch, monitor:
- [ ] Page load speed < 2 seconds
- [ ] Mobile usability score 95+
- [ ] SEO score 90+
- [ ] Search rankings maintain or improve
- [ ] Contact form submissions
- [ ] Booking conversions
- [ ] Newsletter signups

### Tools to Use:
- Google Analytics (traffic, behavior)
- Google Search Console (SEO, search queries)
- Netlify Analytics (simple traffic overview)
- PageSpeed Insights (performance)

---

## 🔄 Monthly Maintenance

### Do This Every Month:
- [ ] Check Google Analytics
- [ ] Review search rankings in Search Console
- [ ] Review contact form submissions
- [ ] Check for broken links
- [ ] Update blog content
- [ ] Review and respond to customer feedback
- [ ] Check for dependency updates (`npm outdated`)

---

## 💰 Cost Breakdown

**Old Setup:**
- Squarespace: $35/month
- SEO services: $80-100/month
- Maintenance: $65-80/month
- **Total: ~$200/month = $2,400/year**

**New Setup (Free Tier):**
- Netlify hosting: $0/month (free tier, 20 builds/month)
- Domain: $15/year ($1.25/month)
- EasyPractice: $30-40/month (unchanged)
- Netlify Forms: $0/month (free tier, 100 submissions/month)
- **Total: ~$40/month = $480/year**
- **Annual Savings: $1,920** 🎉

**If Upgraded to Pro:**
- Netlify Pro: $19/month (300 builds/month)
- Domain: $15/year ($1.25/month)
- EasyPractice: $30-40/month (unchanged)
- **Total: ~$60/month = $720/year**
- **Annual Savings: $1,680** 🎉 (still excellent!)

---

## 📊 Managing Build Limits (Free Tier)

### Netlify Free: 20 Builds/Month

**What counts as a build:**
- Publishing a blog post via CMS = 1 build
- Editing/updating any content via CMS = 1 build
- Pushing changes to GitHub = 1 build
- Manual deploy trigger = 1 build

**Tips to stay under 20 builds:**

1. **Batch blog posts** - Write multiple posts, publish together
2. **Preview before publishing** - Use CMS preview to check before saving
3. **Plan content updates** - Don't make multiple small edits
4. **Test locally first** - Run `npm start` locally before pushing to GitHub
5. **Draft posts offline** - Write in Google Docs first, then publish once

**Monitor your usage:**
- Netlify dashboard → Site → Builds
- Check monthly build count
- Get email alerts when approaching limit

**Realistic monthly usage:**
- 2 blog posts/week = 8 builds
- 3-4 content updates = 4 builds
- 2-3 fixes/updates = 3 builds
- **Total: ~15 builds/month** ✅ (fits in free tier!)

**If you exceed 20 builds:**
- Builds will be queued/blocked
- Upgrade to Pro immediately ($19/month)
- Or wait until next month

---

## ⏰ Launch Timeline

**Note:** Focus on completing tasks, not specific dates

### Phase 1: Setup & Configuration
- Set up analytics tracking
- Configure Netlify Forms
- Deploy to Netlify
- Test all functionality

### Phase 2: Content & Testing
- Add final images and content
- Complete cross-browser testing
- Mobile responsiveness check
- Performance optimization

### Phase 3: Domain & Go-Live
- Connect domain (requires Christina's action)
- Wait for DNS propagation
- Verify SSL certificate
- Final checks

### Phase 4: Post-Launch
- Monitor analytics
- Check for issues
- Gather user feedback
- Make adjustments

**DNS propagation can take 24-48 hours - plan accordingly!**

---

Print this checklist and check off items as you complete them!
