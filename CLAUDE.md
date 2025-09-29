# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Joseph Metzen, a Computer Engineering student at Iowa State University. The site showcases projects, skills, and provides contact information.

## Tech Stack

- **React 18** with React Router for navigation
- **Vite** as the build tool and dev server
- **TailwindCSS v4** for styling (using new @tailwindcss/vite plugin)
- **Lucide React** for icons
- **Radix UI** for accessible toast notifications

## Key Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Build & Deploy
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## Architecture

### Single-Page Application Structure

The app uses React Router with a simple two-route setup:
- `/` - Home page (main portfolio)
- `*` - 404 Not Found page

### Component Organization

**Pages** (`src/pages/`):
- `Home.jsx` - Main portfolio page containing all sections as inline components
- `NotFound.jsx` - 404 error page

**Key Components in Home.jsx**:
All major sections are defined as components within the Home.jsx file:
- `AnimatedBackground` - Dynamic background with gradients, particles, and SVG patterns
- `ThemeToggle` - Light/dark mode toggle with system preference detection
- `Navbar` - Responsive navigation with mobile menu
- `HeroSection` - Landing section with name and introduction
- `AboutSection` - Bio and key skills cards
- `SkillsSection` - Filterable skills grid with star ratings (categories: all/programming/frameworks/tools)
- `ProjectsSection` - Featured projects grid with images and tags
- `ContactSection` - Contact form and information
- `Footer` - Bottom section with copyright and back-to-top button

**Reusable UI** (`src/components/ui/`):
- Toast notification system using Radix UI

### Styling Approach

- **TailwindCSS v4** with utility-first classes
- Dark mode using `dark:` class variants (toggled via `document.documentElement.classList`)
- Glassmorphism effects with `backdrop-blur-*` utilities
- Custom animations using Tailwind's animation utilities
- Gradient backgrounds throughout for visual interest

### Path Aliases

The `@` alias maps to `src/` directory (configured in vite.config.js):
```javascript
import { Toaster } from "@/components/ui/toaster";
```

## Project Data

### Projects Array (Home.jsx lines 439-467)

Currently has 3 featured projects:
1. Android Application Development (2025)
2. Autonomous Vehicle Project (2024) - uses `/projects/cybot.png`
3. Senior Design Project (2025)

Each project has: `id`, `title`, `description`, `image`, `tags`, `demoUrl`, `year`

### Skills Array (Home.jsx lines 356-372)

Skills are categorized as:
- `programming` - Languages (C/C++, Java, SQL, VHDL, Verilog)
- `frameworks` - Frameworks/Platforms (Spring Boot, Hibernate, Android, Linux)
- `tools` - Development Tools (Git, Network Design, Virtualization, Cloud, POSTMAN)

Each skill has: `name`, `level` (1-5 stars), `category`

## Theme System

Dark mode is implemented with:
1. System preference detection on mount
2. Manual toggle via `ThemeToggle` component
3. Class-based theming (`.dark` on `<html>` element)
4. No localStorage persistence currently

## Important Notes

- Project images should be placed in `public/projects/`
- The site is deployed/intended for Vercel (per README.md)
- Contact form currently uses `alert()` - not connected to backend
- All navigation uses hash-based anchors (`#hero`, `#about`, etc.)