# Nirmiti Hackathon Results Portal

A modern web application to display the results of the Nirmiti Hackathon 2025.

## Features
- Live countdown to results announcement
- Animated reveal of winners
- Responsive design with neon theme
- Detailed team and project information

## Deployment Instructions

### Local Development
1. Clone the repository
2. Navigate to app directory: `cd landing-page-app`
3. Clean existing dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
4. Run development server: `npm start`
5. Open browser at `http://localhost:4200`

### Production Deployment (Render)
1. Fork this repository
2. Create a new Static Site on Render
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `cd landing-page-app && npm install --legacy-peer-deps && npm run build -- --configuration production`
   - Publish Directory: `landing-page-app/dist/landing-page-app/browser`
   - Environment: Static Site
   - Node Version: 18.x (Set in Environment Variables)

## Technology Stack
- Angular 17.3
- TypeScript 5.2.2
- Node.js 18.x
- SCSS
- Render (Hosting)

## Environment Requirements
- Node.js: 18.x
- npm: 9.x 