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
   - **Build command:** `npm run build` or `eleventy`
   - **Publish directory:** `_site`
   - **Node version:** 18 or higher (set in Environment variables if needed)
5. Click "Deploy site"
6. Done! Site will be live in 2-3 minutes at a Netlify subdomain

**⚠️ Important - Build Limits:**
- **Netlify Free Tier:** 20 builds per month
- Each blog post Christina publishes = 1 build
- Each content update = 1 build
- Monitor usage in Netlify dashboard → Site → Builds

**If you run out of builds:**
- Upgrade to Netlify Pro ($19/month) for 300 builds/month
- Still saves $181/month vs current $200/month setup

### Step 3: Enable Netlify Identity (for CMS)
**Required for `/admin` CMS access**

1. In Netlify site dashboard, go to **Identity** tab
2. Click "Enable Identity"
3. Settings → Registration → Set to "Invite only" (recommended)
4. Settings → Services → Enable Git Gateway
5. Invite Christina as a user:
   - Identity → Invite users
   - Enter Christina's email
   - She'll receive invitation to set password

### Step 4: Configure Netlify Forms
**For contact form and newsletter**

Forms are automatically detected when you deploy. Just ensure your forms have:
- `name` attribute (e.g., `name="contact"`)
- `data-netlify="true"` attribute
- Hidden input: `<input type="hidden" name="form-name" value="contact">`

**After deployment:**
1. Go to **Forms** tab in Netlify dashboard
2. Settings → Form notifications
3. Add email notification to Christina's email
4. Test the forms on your live site

### Step 5: Connect Domain
1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `harmonicegg.no`
4. Follow instructions to update DNS at your registrar (see DNS section below)
5. Netlify will automatically provision SSL certificate after DNS propagates

**Total deployment time: 15-20 minutes**

---

## 📊 Analytics Setup (Pre or Post-Deployment)

### Google Analytics (GA4)
**Tracking ID:** `G-S3P15VX8HX` (reuse from current site recommended)

1. Open `src/_includes/base.njk`
2. Add before `</head>` tag:
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
3. Commit and push to GitHub (Netlify will auto-deploy)
4. Verify tracking in Google Analytics (may take 24-48 hours)

### Google Tag Manager
**Container ID:** `GTM-N2C89CB4` (reuse from current site recommended)

1. Open `src/_includes/base.njk`
2. Add right after opening `<head>` tag:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2C89CB4');</script>
<!-- End Google Tag Manager -->
```
3. Add right after opening `<body>` tag:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2C89CB4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```
4. Commit and push changes

### Facebook Pixel
**Pixel ID:** `1683333515546002` (reuse from current site recommended)

1. Open `src/_includes/base.njk`
2. Add before `</head>` tag:
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
3. Commit and push changes

**Verification:**
- Use browser extensions (Facebook Pixel Helper, Google Tag Assistant)
- Check in incognito mode to avoid ad blockers
- Allow 24-48 hours for data to appear in dashboards

---

## 🌐 DNS Configuration (For Christina or Domain Admin)

### Prerequisites:
- Access to harmonicegg.no domain registrar account
- Know which service manages the domain (One.com, Namecheap, GoDaddy, etc.)

### Method 1: DNS Records (Recommended)
**Faster and more flexible**

1. Log in to domain registrar
2. Find DNS settings / DNS management
3. Add/Update these records:
   - **A Record:**
     - Name/Host: `@` (or leave blank)
     - Value/Points to: `75.2.60.5` (Netlify's load balancer)
     - TTL: 3600 or Automatic

   - **CNAME Record:**
     - Name/Host: `www`
     - Value/Points to: `your-site-name.netlify.app` (your Netlify subdomain)
     - TTL: 3600 or Automatic

4. Save changes
5. Wait for DNS propagation (2-24 hours, usually faster)

### Method 2: Nameservers
**Use if Method 1 doesn't work with your registrar**

1. In Netlify site settings → Domain management
2. Get Netlify's nameserver addresses (usually 4 DNS servers)
3. Log in to domain registrar
4. Update nameservers to Netlify's nameservers
5. Save changes
6. Wait for propagation (24-48 hours)

### Verify DNS Propagation:
- Use https://dnschecker.org
- Enter `harmonicegg.no`
- Should show Netlify's IP/servers globally
- SSL certificate will auto-provision when DNS is correct

**Important:** DNS changes take time - don't panic if it's not instant!

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
- [ ] Test contact form (submit a test via Netlify Forms)
- [ ] Verify form submissions appear in Netlify dashboard
- [ ] Configure form email notifications
- [ ] Test booking link to EasyPractice
- [ ] Check all links work
- [ ] Test on different browsers
- [ ] Test CMS access at `/admin` (after enabling Identity)

### Within 24 hours:
- [ ] Verify analytics tracking codes are working
  - Google Analytics
  - Google Tag Manager
  - Facebook Pixel
- [ ] Setup Google Search Console
  - Add property for harmonicegg.no
  - Verify ownership
  - Submit sitemap
- [ ] Add site to Google Business Profile
- [ ] Update business hours and contact info

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

## 📧 Netlify Forms Setup (Contact & Newsletter)

### Contact Form Configuration:
1. Open `src/pages/kontakt.njk`
2. Update the form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
     <!-- Add hidden input for form name -->
     <input type="hidden" name="form-name" value="contact">

     <!-- Anti-spam honeypot (hidden field) -->
     <p class="hidden">
       <label>Don't fill this out: <input name="bot-field" /></label>
     </p>

     <!-- Your existing form fields -->
   </form>
   ```
3. Add this CSS to hide the honeypot:
   ```css
   .hidden { display: none; }
   ```
4. Commit and deploy to Netlify
5. Test the form on the live site
6. Check Netlify dashboard → Forms to see submissions

### Email Notifications:
1. In Netlify dashboard → Site → Forms
2. Click "Form notifications"
3. Add notification:
   - Select "Email notification"
   - Enter Christina's email address
   - Choose the form (contact)
   - Save

**Benefits:**
- ✅ Free tier: 100 submissions/month
- ✅ Built-in spam protection
- ✅ Email notifications
- ✅ Export to CSV
- ✅ No external service needed

### Newsletter Form (Optional):
Create a simple newsletter form using the same approach:
```html
<form name="newsletter" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="newsletter">
  <input type="email" name="email" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>
```

Later, integrate with Christina's email service (Mailchimp, ConvertKit, etc.)

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

### Netlify Forms not working:
- Ensure form has `name` attribute
- Verify `data-netlify="true"` is present
- Check hidden input exists: `<input type="hidden" name="form-name" value="contact">`
- Forms only work on deployed site, not localhost
- Check Netlify dashboard → Forms for submissions
- Look for form processing errors in deploy logs

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
