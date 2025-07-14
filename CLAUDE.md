# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React single-page application (SPA) for Radio Cultural Paraguay, built with Vite. The app streams Paraguayan folk music and cultural content.

### Key Components Structure

- **Layout Component** (`src/components/Layout.jsx`): Main layout wrapper with header, navigation, and fixed radio player. Handles responsive behavior and scroll-based minimization of the radio player.

- **RadioPlayer Component** (`src/components/RadioPlayer.jsx`): Fixed audio player that streams from `/audio/radio-cultural-stream.mp3`. Features play/pause controls, volume adjustment, and responsive minimization behavior.

- **Pages**: Simple page components for different routes:
  - Home: Cultural content about Paraguayan music and polka
  - Programacion: Programming schedule
  - Donaciones: Donation information
  - Contacto: Contact information

### State Management

The app uses React hooks for state management:
- Radio player state (playing, volume) managed in `RadioPlayer.jsx`
- Layout minimization state managed in `Layout.jsx` based on scroll position and screen size
- No external state management library used

### Routing

Uses React Router v7 with simple route structure:
- `/` - Home page
- `/programacion` - Programming schedule
- `/donaciones` - Donations page
- `/contacto` - Contact page

### Key Features

- **Responsive Design**: Mobile-first approach with specific behavior for screen sizes ≤768px
- **Fixed Audio Player**: Persistent radio player that minimizes on scroll (mobile) but stays accessible
- **PWA Support**: Includes manifest.json and install prompt component
- **SEO Hook**: Custom `useSeo` hook for dynamic meta tags

### Styling

- CSS modules approach with component-specific styles
- Responsive breakpoints handled in CSS
- Lucide React icons used throughout

### Audio Streaming

The radio player expects an audio stream at `/audio/radio-cultural-stream.mp3`. This should be configured in your web server or deployment setup.

## Dependencies

- React 19.1.0 with React Router DOM 7.6.3
- Vite for build tooling
- Lucide React for icons
- ESLint with React-specific rules