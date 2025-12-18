# SEO Migration Checklist for Harmonic Egg Website

## Overview
When taking over an existing domain (harmonicegg.no) with a new website, you need to ensure SEO doesn't drop. This checklist will help you maintain and improve your search rankings.

---

## ✅ CRITICAL - Do BEFORE Launch

### 1. Document Current Site Structure
- [ ] Make a list of ALL URLs on the current harmonicegg.no site
- [ ] Note which pages get the most traffic (check Google Analytics)
- [ ] Identify top-ranking pages (check Google Search Console)
- [ ] Save a copy of the current sitemap (usually at harmonicegg.no/sitemap.xml)

### 2. Map Old URLs to New URLs
Create a spreadsheet:
```
Old URL                    → New URL                  → Status
/index.html               → /                        → 301
/about.html               → /om-harmonic-egg         → 301
/services.html            → /fordeler                → 301
/contact.html             → /kontakt                 → 301
/prices.html              → /priser                  → 301
/blog/post-name.html      → /blogg/post-name         → 301
```

### 3. Setup 301 Redirects
In `netlify.toml`, add redirects for EVERY old URL:
```toml
[[redirects]]
  from = "/about.html"
  to = "/om-harmonic-egg"
  status = 301

[[redirects]]
  from = "/services.html"
  to = "/fordeler"
  status = 301
```

**Why 301?** Tells Google "this page permanently moved" and transfers ~90-99% of SEO value.

### 4. Preserve Important Content
- [ ] Copy ALL important text from old site
- [ ] Keep the same keywords and topics
- [ ] Maintain similar heading structure (H1, H2, etc.)
- [ ] Don't remove content that ranks well

### 5. Meta Data Migration
For each important old page:
- [ ] Copy the title tag
- [ ] Copy the meta description
- [ ] Use similar (or better) keywords
- [ ] Update to Norwegian if old site was English

---

## ✅ Do ON Launch Day

### 6. Google Search Console
- [ ] Add new site to Google Search Console
- [ ] Verify ownership (use DNS or meta tag method)
- [ ] Submit new sitemap (yoursite.com/sitemap.xml)
- [ ] Check for crawl errors

### 7. Google Analytics
- [ ] Verify GA4 tracking code is installed (G-S3P15VX8HX)
- [ ] Check real-time data to confirm it's working
- [ ] Set up important goals/conversions

### 8. Test Redirects
- [ ] Test EVERY old URL manually - does it redirect?
- [ ] Use online redirect checker tool
- [ ] Check that they're 301 (not 302) redirects

---

## ✅ Do WITHIN First Week

### 9. Monitor Rankings
- [ ] Check Google Search Console daily
- [ ] Watch for ranking drops
- [ ] Look for crawl errors
- [ ] Monitor page indexing status

### 10. Request Re-indexing
In Google Search Console:
- [ ] Request indexing for homepage
- [ ] Request indexing for important pages
- [ ] Submit sitemap (if not already done)

### 11. Update External Links
- [ ] Update social media profile links
- [ ] Update Google Business Profile
- [ ] Contact important backlink sources to update URLs (if needed)

---

## ✅ Do WITHIN First Month

### 12. Content Optimization
- [ ] Add more content to thin pages
- [ ] Optimize images (alt text, compression)
- [ ] Add internal links between pages
- [ ] Create new blog posts

### 13. Technical SEO
- [ ] Check site speed (use PageSpeed Insights)
- [ ] Verify mobile-friendliness
- [ ] Fix any broken links
- [ ] Add structured data (Schema.org) - already done ✓

### 14. Local SEO
- [ ] Verify Google Business Profile
- [ ] Update address/phone if changed
- [ ] Add to local directories
- [ ] Encourage customer reviews

---

## Expected Results Timeline

### Week 1-2:
- Some ranking fluctuation (normal)
- Google re-crawling the site
- New pages getting indexed

### Week 3-4:
- Rankings should stabilize
- Old URLs properly redirecting
- Traffic returning to normal levels

### Month 2-3:
- Rankings should match or exceed old site
- New content starting to rank
- Improved user metrics (if site is faster/better)

---

## Red Flags to Watch For

🚨 **Immediate action needed if:**
- Traffic drops more than 30%
- Important pages not indexed after 2 weeks
- Redirects returning 404 errors
- Google Search Console shows many errors

---

## Tools You'll Need

**Free:**
- Google Search Console (essential)
- Google Analytics (essential)
- PageSpeed Insights (speed testing)
- Mobile-Friendly Test (mobile check)

**Optional Paid:**
- Ahrefs/SEMrush (advanced tracking)
- Screaming Frog (technical SEO audit)

---

## Quick SEO Health Check

After launch, verify:
```
✓ Old URLs redirect to new URLs (301)
✓ Sitemap submitted to Google
✓ All pages have title tags
✓ All pages have meta descriptions
✓ Images have alt text
✓ Site loads fast (< 3 seconds)
✓ Mobile-friendly
✓ Google Analytics working
✓ No broken links
✓ Structured data validates
```

---

## Common Mistakes to Avoid

❌ Using 302 redirects instead of 301
❌ Forgetting to redirect old blog posts
❌ Removing content that ranked well
❌ Not submitting new sitemap
❌ Not monitoring Search Console
❌ Changing URLs without redirects
❌ Deleting old content completely

---

## Your Specific Situation

**Domain:** harmonicegg.no (keeping same domain ✓)
**Platform:** Squarespace → 11ty/Netlify
**Language:** Staying Norwegian ✓

**Advantages:**
- Same domain = domain authority preserved
- Faster site = better rankings
- Better mobile experience = better rankings
- Clean code = easier for Google to crawl

**Risks:**
- URL structure might change
- Content might be reorganized
- Need proper redirects

**Action Items:**
1. Get a list of all current URLs from Squarespace
2. Map them to new 11ty URLs
3. Add 301 redirects for each one
4. Keep the same content and keywords
5. Launch and monitor closely

---

## Need Help?

If rankings drop:
1. Check Google Search Console for errors
2. Verify all redirects are working
3. Make sure important content wasn't removed
4. Check that new pages are being indexed
5. Consider consulting an SEO specialist if drop > 30%

---

**Remember:** A well-executed migration can actually IMPROVE SEO because:
- Faster site = better rankings
- Better mobile = better rankings
- Cleaner code = better crawlability
- Better UX = lower bounce rate = better rankings
