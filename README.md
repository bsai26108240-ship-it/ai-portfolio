# Sameer Shah — AI & Ideas Portfolio

A production-ready personal portfolio for **Sameer Shah**, a BS Artificial Intelligence student at SZABIST. Built with **Next.js App Router**, React 19, and modern CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Graphics & Visuals**: WebGL / OGL scientific shader veil (`<DitherVeil />`)
- **Styling**: Vanilla CSS design system with CSS custom properties (high-contrast pitch-black wallpaper, silver typography, electric-blue and violet accents)
- **Deployment**: Vercel-ready

## 📁 Architecture Overview

```text
AI-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx      # Root layout, metadata, SEO, Google Fonts preconnect
│   │   ├── page.jsx        # Server component assembling page sections
│   │   └── globals.css     # Design tokens, responsive typography, ticker keyframes
│   ├── components/
│   │   ├── Navbar.jsx      # Pure typography header (no icons/monograms)
│   │   ├── Hero.jsx        # Status pill, scramble text headline, coordinate telemetry
│   │   ├── DitherVeil.jsx  # WebGL mathematical interactive canvas
│   │   ├── ScrambleText.jsx# Custom character scrambler with scroll & hover triggers
│   │   ├── TechTicker.jsx  # Continuous right-to-left seamless looping ticker
│   │   ├── About.jsx       # Academic background (O/A Levels, SZABIST BSAI)
│   │   ├── Skills.jsx      # Categorized capabilities & research roadmap
│   │   ├── Projects.jsx    # Project showcase cards with live demo/repo links
│   │   ├── Contact.jsx     # Interactive copy-to-clipboard email & social channels
│   │   └── Footer.jsx      # Pure typography footer with status telemetry
│   └── data/
│       └── portfolioData.js# Centralized configuration & personalization store
├── public/
│   └── favicon.svg         # Scientific orbital SVG favicon (no initials)
├── next.config.mjs
└── package.json
```

## 🛠️ Development & Build

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📝 Customization

To personalize profile data, links, or projects, edit `src/data/portfolioData.js`.
