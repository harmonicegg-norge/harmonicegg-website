# ⚡ QUICK START GUIDE

## 🎯 I Want To: See The Website Right Now!

```bash
# 1. Open terminal in this folder
# 2. Install dependencies (one time only):
npm install

# 3. Start the development server:
npm start

# 4. Open browser to: http://localhost:8080
```

**That's it!** The website is running locally.

---

## 🎯 I Want To: Deploy This Live!

### Fastest Way (15 minutes):

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub, then:
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect GitHub
   - Select repo
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Click "Deploy"

3. **Done!** Site is live in 2 minutes.

See `DEPLOYMENT.md` for detailed instructions.

---

## 🎯 I Want To: Edit Content

### Easy Way:
- Edit files in `src/pages/` folder
- Change text in `src/_data/site.js` for prices, services, etc.
- Save and rebuild

### What To Edit:
- **Prices:** `src/_data/site.js` (line 25-80)
- **Services:** `src/_data/site.js` (line 15-23)
- **Homepage text:** `src/index.njk`
- **Contact info:** `src/_data/site.js` (line 1-13)

---

## 🎯 I Want To: Add Images

1. Put images in: `src/assets/images/`
2. Reference in templates like: `/assets/images/your-image.jpg`
3. Rebuild

---

## 🎯 I Want To: Change Colors

Edit `src/assets/css/style.css` (lines 1-13)

Current colors:
- Primary: `#8B7355` (warm brown)
- Secondary: `#A8DADC` (soft blue)
- Dark: `#1D3557` (deep blue)

---

## 🎯 I Need Help!

1. Check `README.md` for full documentation
2. Check `DEPLOYMENT.md` for deployment steps
3. Check `PROJECT-SUMMARY.md` for overview
4. Search in the code - it's well commented!

---

## 📁 Important Files

```
harmonicegg-website/
├── src/
│   ├── index.njk         ← Homepage
│   ├── pages/            ← Other pages
│   ├── _data/site.js     ← Edit content here!
│   └── assets/css/       ← Styling
├── README.md             ← Full docs
├── DEPLOYMENT.md         ← Deploy guide
└── PROJECT-SUMMARY.md    ← Project overview
```

---

## ⚡ Common Commands

```bash
npm start          # Development server
npm run build      # Build for production
npm run clean      # Clean build files
```

---

## 🚨 Before Going Live:

- [ ] Add real images
- [ ] Update contact form (Formspree ID)
- [ ] Review all text content
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Add Google Analytics (optional)

---

**That's it! You're ready to go!** 🎉

For detailed information, check the other .md files.
