# Farhan Khan - 3D Glassmorphism Portfolio

A modern, high-performance portfolio website built with React, featuring glassmorphism UI, 3D animations, and smooth transitions.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D elements
- **React Router** - Routing
- **EmailJS** - Contact form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel

Connect your repo to Vercel. The `vercel.json` is pre-configured.

### Netlify

Connect your repo to Netlify. The `netlify.toml` handles SPA routing.

## Customization

- Update social links in `src/components/ContactSection.jsx`
- Add your project details in `src/components/ProjectsSection.jsx`
- Add your `resume.pdf` to the `public/` folder for the Download Resume button
- Update profile image placeholder in `src/components/AboutSection.jsx`

## Features

- ✅ Glassmorphism design
- ✅ 3D rotating sphere (Three.js)
- ✅ Dark/Light mode toggle
- ✅ Scroll progress bar
- ✅ Typing effect
- ✅ Animated counters
- ✅ Project filter
- ✅ Contact form with validation
- ✅ Fully responsive
- ✅ SEO meta tags
