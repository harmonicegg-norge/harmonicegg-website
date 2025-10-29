# Harmonic Egg Website - Complete Modern Redesign

## 🎯 Project Overview

This is a complete redesign of the Harmonic Egg Norge website (harmonicegg.no), built with modern web technologies to replace the current Squarespace site that costs $200/month.

**Current Cost:** $200/month (~2000 NOK)  
**New Cost:** ~$40-60/month (~400-600 NOK)  
**Annual Savings:** ~$1,680-1,920 USD

---

## ✨ What This Website Includes

### Pages Built:
1. ✅ **Homepage** - Hero section, benefits, services, testimonials, CTA
2. ✅ **Priser (Prices)** - All pricing packages, add-on services, FAQ
3. ✅ **Booking** - Integration with EasyPractice, booking info, location
4. ✅ **Kontakt (Contact)** - Contact form, info, map, FAQ

### Pages Still Needed:
- **Om Harmonic Egg** (About) - Detailed explanation of what it is
- **Tjenester** (Services) - Detailed service descriptions
- **Blogg** (Blog) - Blog listing and individual posts
- **Products/Shop** - Crystal bottles and music USB drives

---

## 🛠 Technology Stack

### Core Technologies:
- **11ty (Eleventy)** - Static site generator
- **Nunjucks** - Templating engine
- **Vanilla JavaScript** - No heavy frameworks
- **Modern CSS** - Custom styling with CSS variables

### Why This Stack?
1. **Fast Loading** - Static HTML = instant page loads
2. **Great SEO** - Search engines love static HTML
3. **Easy to Maintain** - Simple, clean code
4. **Cheap Hosting** - Can host for free or $5-10/month
5. **Future-Proof** - Modern but not trendy

---

## 📁 Project Structure

```
harmonicegg-website/
├── src/
│   ├── _includes/          # Reusable components
│   │   └── base.njk        # Base layout (header, footer)
│   ├── _data/              # Site data
│   │   └── site.js         # Prices, services, benefits, etc.
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css   # All styling
│   │   ├── js/
│   │   │   └── main.js     # Mobile menu, animations
│   │   └── images/         # Images (to be added)
│   ├── pages/              # Individual pages
│   │   ├── booking.njk
│   │   ├── kontakt.njk
│   │   └── priser.njk
│   └── index.njk           # Homepage
├── _site/                  # Generated static files
├── .eleventy.js            # 11ty configuration
├── package.json
└── README.md
```

---

## 🚀 How to Use This Project

### Development (Local Testing):
```bash
# Install dependencies
npm install

# Start development server (with live reload)
npm start

# Site will be available at http://localhost:8080
```

### Build for Production:
```bash
# Build static files
npm run build

# Output will be in _site/ folder
```

### Deploy:
Upload the contents of `_site/` folder to any web host, or use:
- **Netlify** (Recommended - Free, automatic builds)
- **Vercel** (Free, automatic builds)
- **GitHub Pages** (Free, but manual)
- **Any hosting** (Upload _site/ folder via FTP)

---

## 🎨 Design Features

### Color Palette:
- **Primary:** #8B7355 (Warm brown - natural, grounding)
- **Secondary:** #A8DADC (Soft blue - calming, spiritual)
- **Accent:** #F1FAEE (Off-white - clean, pure)
- **Dark:** #1D3557 (Deep blue - trust, depth)

### Key Features:
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern, clean design
- ✅ Fast loading
- ✅ Accessible (good contrast, semantic HTML)
- ✅ SEO optimized
- ✅ Smooth animations
- ✅ Mobile menu
- ✅ Google Maps integration
- ✅ Social media links
- ✅ Contact form ready

---

## 🔧 What Needs to Be Done

### Immediate Tasks:
1. **Get Images** - Hero images, service photos, testimonial photos
2. **Setup Contact Form** - Sign up for Formspree (free) and add form ID
3. **Complete Remaining Pages:**
   - Om Harmonic Egg (About page)
   - Tjenester (Services detailed)
   - Blogg (Blog system)
   - Products/Shop section

### Optional Enhancements:
4. **Add CMS** - Decap CMS for easy content editing
5. **Add Analytics** - Google Analytics or Plausible
6. **Optimize Images** - Compress and add actual photos
7. **Add Testimonials** - Real customer quotes
8. **SEO Meta Images** - Create og-image for social sharing

---

## 💰 Hosting & Deployment Options

### Option 1: Netlify (Recommended)
**Cost:** FREE (or $19/month for Pro features)  
**Why:**
- Automatic builds from Git
- Free SSL certificate
- CDN included
- Forms handling (100 submissions/month free)
- Easy domain connection

**Setup:**
1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `_site`
5. Done! Auto-deploys on every push

### Option 2: Vercel
**Cost:** FREE (or $20/month for Pro)  
Similar to Netlify, excellent performance

### Option 3: Traditional Hosting
**Cost:** $5-15/month  
Upload `_site/` folder via FTP to any hosting provider

---

## 🔍 SEO Features Included

✅ **Structured Data** (Schema.org markup)  
✅ **Meta Descriptions** on all pages  
✅ **Open Graph Tags** (Facebook/social sharing)  
✅ **Semantic HTML** (proper heading hierarchy)  
✅ **Fast Loading** (static files)  
✅ **Mobile Responsive** (Google ranking factor)  
✅ **Clean URLs** (/priser/ instead of /priser.html)  
✅ **Sitemap** (automatically generated by 11ty)  
✅ **Alt Text Ready** (just need to add to images)

### SEO Monitoring (Free Tools):
- Google Search Console (free)
- Google Analytics (free)
- Google Business Profile (free)

---

## 📝 Content Editing

### Easy Way (Without Code):
Add **Decap CMS** (formerly Netlify CMS):
- Gives Christina a nice admin panel
- Edit content without touching code
- Works with Netlify hosting
- Free and open-source

### Manual Way:
- Edit `.njk` files in `src/pages/`
- Update data in `src/_data/site.js`
- Images go in `src/assets/images/`
- Rebuild with `npm run build`

---

## 🆚 Comparison: Old vs New

| Feature | Current (Squarespace) | New (11ty) |
|---------|----------------------|------------|
| **Cost** | $200/month | $0-40/month |
| **Speed** | Good | Excellent |
| **SEO** | Good | Excellent |
| **Flexibility** | Limited | Full control |
| **Maintenance** | Need to pay someone | Can DIY or hire cheaper |
| **Ownership** | Locked to platform | Own everything |
| **Performance** | Medium | Fast |

---

## 🎯 Next Steps to Launch

### Week 1: Content Gathering
- [ ] Collect all images (high quality)
- [ ] Write/refine all text content
- [ ] Get customer testimonials
- [ ] Gather product photos

### Week 2: Complete Build
- [ ] Add remaining pages (About, Services, Blog)
- [ ] Add all images
- [ ] Setup contact form (Formspree)
- [ ] Test on mobile devices
- [ ] Get feedback from Christina

### Week 3: SEO & Launch
- [ ] Add Google Analytics
- [ ] Setup Google Search Console
- [ ] Create social sharing images
- [ ] Deploy to Netlify
- [ ] Connect domain name
- [ ] Test everything thoroughly

### Week 4: Monitor
- [ ] Check analytics
- [ ] Monitor search rankings
- [ ] Collect user feedback
- [ ] Make any necessary adjustments

---

## 🤝 Support & Maintenance

### What Christina Can Do Herself:
- Update text content (with CMS)
- Add blog posts (with CMS)
- Add new images
- Check analytics
- Respond to contact forms

### What She Might Need Help With:
- Adding new pages
- Changing design/layout
- Technical troubleshooting
- Advanced SEO work

**Estimated Monthly Maintenance:** 1-2 hours ($50-100 if outsourced)

---

## 📞 Integration Details

### Current Integrations:
- **EasyPractice** - Booking system (external, paid separately)
- **Google Maps** - Location
- **Social Media** - Facebook, Instagram links

### To Add:
- **Formspree** - Contact form handling (free tier sufficient)
- **Google Analytics** - Traffic monitoring (free)
- **Google Search Console** - SEO monitoring (free)

---

## 💡 Key Advantages of This Solution

1. **Massive Cost Savings** - $1,680-1,920 saved per year
2. **Better Performance** - Faster loading = better Google rankings
3. **Full Ownership** - Not locked into any platform
4. **Modern Design** - Fresh, professional look
5. **SEO Optimized** - Built with best practices
6. **Easy to Maintain** - With CMS, Christina can update herself
7. **Scalable** - Easy to add features later
8. **No Vendor Lock-in** - Can move to any host anytime

---

## ⚠️ Important Notes

### Contact Form:
Currently uses placeholder Formspree ID. Need to:
1. Sign up at https://formspree.io (free)
2. Replace `YOUR_FORM_ID` in kontakt.njk
3. First 50 submissions/month are free

### Images:
Placeholder references in code. Need to:
1. Add actual images to `src/assets/images/`
2. Update image paths in templates
3. Add alt text for accessibility

### Domain:
To connect harmonicegg.no:
1. Update DNS settings at current registrar
2. Point to Netlify (they'll provide instructions)
3. SSL certificate will be automatic

---

## 🎓 For Christina: How to Update Content

### Using Decap CMS (Recommended):
1. Go to yoursite.com/admin
2. Log in with GitHub account
3. Click on page you want to edit
4. Make changes in the editor
5. Click "Publish"
6. Changes go live automatically

### Manually:
1. Contact your developer
2. Provide new text/images
3. They update and deploy
4. Changes live in 2-5 minutes

---

## 📊 Success Metrics

After launching, track these monthly:
- [ ] Website traffic (Google Analytics)
- [ ] Search rankings for key terms
- [ ] Booking conversions
- [ ] Contact form submissions
- [ ] Page load speed
- [ ] Mobile usability score

**Expected Results:**
- 30-50% faster page loads
- Similar or better search rankings
- $160/month cost savings
- More control and flexibility

---

## 🙋 Questions?

This README covers the technical side. For questions about:
- **Design decisions** - Check the CSS comments
- **How to edit** - See "Content Editing" section above
- **Deployment** - See "Hosting & Deployment" section
- **Costs** - See comparison tables

---

**Built with ❤️ for Harmonic Egg Norge**  
*A modern, fast, and cost-effective solution for a healing business*
