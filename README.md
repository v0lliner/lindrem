# Lindrem Frontend

A modern React application for Lindrem, a Finnish/Estonian construction company specializing in plastering and rendering work.

## Features

- **Multilingual Support**: Finnish and Estonian languages
- **Modern Design**: Clean, Nordic minimalist aesthetic
- **Responsive Layout**: Mobile-first design approach
- **React Router**: Client-side routing for SPA experience
- **Glassmorphism UI**: Modern visual effects with backdrop filters

## Tech Stack

- **React 18.3.1**: Modern React with hooks
- **React Router DOM 6.30.1**: Client-side routing
- **React Scripts 5.0.1**: Build tooling and development server
- **CSS3**: Modern styling with custom properties and advanced layouts

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── HeroSection.jsx # Hero banner
│   ├── ServiceTiles.jsx # Service cards grid
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── InWork.jsx      # Current projects
│   ├── References.jsx  # Portfolio/references
│   └── Contact.jsx     # Contact information
├── translations/       # i18n translation files
│   ├── fi/            # Finnish translations
│   └── et/            # Estonian translations
├── assets/            # Static assets
├── i18nContext.jsx    # Internationalization context
├── styles.css         # Global styles
└── index.jsx          # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

The application is built using Create React App and can be deployed to any static hosting service.

## License

Private project for Lindrem construction company.
