# Portfolio Website

A clean, modern portfolio website built with React 18 and MUI v6.

**Live Demo:** https://Pravinlsiye.github.io/myportfolio.github.io

## Tech Stack

- React 18
- MUI (Material-UI) v6
- CSS3
- GitHub Actions (CI/CD)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node 20)
- npm

### Installation

```shell
npm install
```

### Development

```shell
npm start
```

### Build

```shell
npm run build
```

## Deployment

### Automatic Deployment (GitHub Actions)

This project uses GitHub Actions for automatic deployment. Every push to the `main` branch triggers:

1. Install dependencies
2. Build production version
3. Deploy to GitHub Pages

**No manual deployment needed!** Just push your code.

### First-time Setup on GitHub

1. Go to your repo **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source:** GitHub Actions
3. Push to `main` branch - deployment will start automatically

### Manual Deployment (Optional)

If you prefer manual deployment:

```shell
npm run deploy
```

## Customization

Edit `src/portfolio.js` to update:
- Personal info
- Projects
- Skills
- Contact details

## License

MIT
