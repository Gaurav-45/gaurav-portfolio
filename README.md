# Gaurav Parulekar - Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Professional dark theme with vibrant accent colors
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Hover effects, transitions, and dynamic content
- **Easy Data Management**: All content stored in JSON files for easy updates
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance**: Optimized images and code splitting for fast loading

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── About.tsx             # About section
│   ├── Achievements.tsx      # Achievements section
│   ├── Contact.tsx           # Contact section
│   ├── Experience.tsx        # Experience timeline
│   ├── Hero.tsx              # Hero section with rotating titles
│   ├── Navbar.tsx            # Navigation bar
│   ├── Projects.tsx          # Projects showcase
│   └── Skills.tsx            # Skills visualization
├── data/
│   ├── achievements.json     # Achievements data
│   ├── experience.json       # Work experience data
│   ├── personal.json         # Personal information
│   ├── projects.json         # Projects data
│   └── skills.json           # Skills data
├── public/
│   └── images/               # Static images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Updating Personal Information

Edit `data/personal.json` to update:

- Name, title, bio
- Profile image
- Social links
- Resume link
- Rotating titles

### Updating Experience

Edit `data/experience.json` to add/update work experiences

### Updating Projects

Edit `data/projects.json` to showcase your projects

### Updating Skills

Edit `data/skills.json` to add/update your skills and technologies

### Updating Achievements

Edit `data/achievements.json` to add your achievements and certifications

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

- Primary colors
- Accent colors
- Gradient styles

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gaurav Parulekar**

- LinkedIn: [gaurav-parulekar](https://www.linkedin.com/in/gaurav-parulekar-80a1aa217/)
- GitHub: [@Gaurav-45](https://github.com/Gaurav-45)

---

Made with ❤️ by Gaurav Parulekar
