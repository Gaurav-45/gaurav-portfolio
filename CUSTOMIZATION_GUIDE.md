# Portfolio Customization Guide

## 🎯 Quick Start

Your portfolio is now live at http://localhost:3000! Here's how to customize it with your data.

## 📝 Updating Your Information

### 1. Personal Information (`data/personal.json`)

```json
{
  "personalInfo": {
    "name": "Your Name",
    "email": "your.email@example.com",
    "phone": "+91 XXXXX XXXXX",
    "profileImage": "/images/your-photo.jpg" // Add your photo here
  }
}
```

**To add your professional photo:**

1. Get your photo from LinkedIn or use any professional headshot
2. Save it as `/public/images/profile-photo.jpg`
3. Update `profileImage` in `data/personal.json` to `/images/profile-photo.jpg`

### 2. Work Experience (`data/experience.json`)

Update your work experience with accurate details from your LinkedIn:

- Company names and positions
- Duration and location
- Responsibilities and achievements
- Technologies used

### 3. Projects (`data/projects.json`)

Add your real projects:

- Update descriptions
- Add GitHub links
- Add live demo URLs (if available)
- Update technologies used
- Add project screenshots to `/public/images/projects/`

### 4. Skills (`data/skills.json`)

The skills are already set up with CDN icons. To customize:

- Adjust skill levels (0-100)
- Add/remove skills
- Reorder categories

### 5. Achievements (`data/achievements.json`)

Your achievements are already added:

- Odoo Combat 2024 Winner
- ETHIndia 2024 - 2nd Runner-Up
- JPMC Code for Good 2022 Winner
- AWS Certified Cloud Practitioner

## 🎨 Styling Customization

### Colors

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue
  },
  accent: {
    purple: '#a855f7',  // Purple accent
    green: '#10b981',   // Green accent
    blue: '#3b82f6',    // Blue accent
  },
}
```

### Animations

All animations are already set up with Framer Motion. You can adjust:

- Animation duration in component files
- Delay times
- Animation types (fade, slide, scale, etc.)

## 📸 Adding Images

### Profile Photo

1. Download your LinkedIn profile photo
2. Place it in `/public/images/profile-photo.jpg`
3. Update `data/personal.json`

### Project Images

1. Take screenshots of your projects
2. Optimize them (recommended: 1200x630px)
3. Save in `/public/images/projects/`
4. Update filenames in `data/projects.json`

### Company Logos

1. Download company logos (transparent PNG preferred)
2. Save in `/public/images/logos/`
3. Name them: `barclays.png`, `persistent.png`, etc.

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Gaurav-45/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js and deploy
6. Your site will be live at `your-name.vercel.app`

### Custom Domain

Once deployed, you can add a custom domain in Vercel settings.

## ✨ Features Implemented

✅ **Hero Section**

- Rotating job titles animation
- Professional photo with glowing effect
- Social links (GitHub, LinkedIn, LeetCode)
- CTA buttons

✅ **About Section**

- Bio with statistics
- Animated stat cards
- Smooth scroll animations

✅ **Experience Timeline**

- Vertical timeline with alternating layout
- Company logos and details
- Technologies used
- Interactive hover effects

✅ **Projects Showcase**

- Filterable by category
- Featured projects highlighted
- GitHub and live demo links
- Hover animations

✅ **Skills Section**

- Categorized skills (Frontend, Backend, Database, etc.)
- Technology icons from CDN
- Progress bars with animations
- Hover effects

✅ **Achievements**

- Hackathon wins
- Certifications
- Color-coded categories
- Statistics cards

✅ **Contact Section**

- Contact form (opens email client)
- Social links
- Resume download button
- Professional footer

✅ **Responsive Design**

- Mobile-friendly
- Tablet optimized
- Desktop enhanced

✅ **Dark Theme**

- Professional black background
- Vibrant accent colors (blue, purple, green)
- Glowing effects
- Smooth gradients

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Testing Responsiveness

Test your portfolio on different screen sizes:

1. Desktop: Full width
2. Tablet: Medium width (iPad)
3. Mobile: Small width (iPhone)

Use Chrome DevTools (F12) to test different devices.

## 🎯 Next Steps

1. **Add Your Photo**: Replace the placeholder with your professional photo
2. **Update Experience**: Add accurate details from LinkedIn
3. **Add Project Screenshots**: Capture and add screenshots of your projects
4. **Update Contact Info**: Add your real email and phone number
5. **Test Everything**: Click all links, test all animations
6. **Deploy**: Push to GitHub and deploy on Vercel
7. **Share**: Share your portfolio link on LinkedIn!

## 💡 Tips for Best Results

1. **Use high-quality images**: Optimize them for web (compress without losing quality)
2. **Keep descriptions concise**: Highlight key achievements
3. **Update regularly**: Add new projects and skills as you learn
4. **Test on mobile**: Most recruiters view portfolios on mobile
5. **SEO**: Update meta tags in `app/layout.tsx` for better discoverability

## 🐛 Troubleshooting

### Images not loading?

- Check file paths are correct
- Ensure images are in `/public/images/`
- Verify file extensions match (jpg vs jpeg, png vs PNG)

### Animations not working?

- Clear browser cache
- Check browser console for errors
- Ensure Framer Motion is installed

### Build errors?

- Run `npm install` again
- Delete `node_modules` and `.next` folders, then reinstall

## 📞 Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Review the data JSON files for syntax errors
3. Ensure all required files are present
4. Restart the dev server

---

**Your portfolio is ready to impress! 🚀**

Made with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
