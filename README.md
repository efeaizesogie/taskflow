# Taskflow - React + Vite + Tailwind CSS

This project is a React application built with Vite and styled with Tailwind CSS. It includes custom fonts (Pacifico, Inter, and Poppins) and a component-based architecture.

## Prerequisites

- **Node.js**: Version 20.19.0 or higher (or 22.12.0+)
  - Current project requires a newer version of Node.js than 20.14.0
  - [Download Node.js](https://nodejs.org/en/download/)

## Node.js Version Upgrade Instructions

### For Windows:
1. Download the latest Node.js LTS installer from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the installation wizard
3. Restart your terminal/command prompt
4. Verify the installation with `node -v` (should show 20.19.0 or higher)

### For macOS/Linux:
1. Using nvm (recommended):
   ```
   nvm install 20.19.0
   nvm use 20.19.0
   ```
2. Or download from [nodejs.org](https://nodejs.org/)

## Setup Instructions

1. Ensure you have the correct Node.js version installed (20.19.0+ or 22.12.0+)
2. Clone this repository
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Features

- React 19 with latest features
- Vite for fast development and building
- Tailwind CSS for styling
- Custom Google Fonts:
  - Pacifico (decorative font)
  - Inter (sans-serif font)
  - Poppins (sans-serif font)
- Component-based architecture
- Responsive design

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Troubleshooting

If you encounter the error about missing native bindings or Node.js version requirements:

1. Make sure you've upgraded Node.js to version 20.19.0 or higher
2. Delete the `node_modules` directory and `package-lock.json` file
3. Run `npm install` again
4. Start the development server with `npm run dev`
