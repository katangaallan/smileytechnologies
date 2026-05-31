# Smiley Technologies - Vue 3 Rebuild

A modern Vue 3 + Vite rebuild of the Smiley Technologies website.

## Features

- **Vue 3** - Latest Vue.js framework
- **Vue Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Responsive Design** - Mobile-friendly layout
- **Component-Based** - Reusable Vue components

## Project Structure

```
├── src/
│   ├── pages/           # Page components (Home, About, Services, etc.)
│   ├── router/          # Vue Router configuration
│   ├── App.vue          # Root component
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview

```bash
npm run preview
```

## Pages

- **Home** - Landing page with hero section
- **About** - Company information
- **Services** - List of services offered
- **Team** - Team members showcase
- **Why Us** - Reasons to choose us

## Deployment

The build output in the `dist/` folder can be deployed to Vercel, Netlify, or any static hosting service.

## License

MIT
