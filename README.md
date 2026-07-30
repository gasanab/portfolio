# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, Tailwind CSS, and JavaScript. Features include dark/light mode toggle, animated transitions with GSAP, and responsive design.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Animated Transitions**: Smooth animations powered by GSAP
- **SEO Optimized**: Proper meta tags for better search engine visibility
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Fast Loading**: Optimized for performance

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory, ready to be deployed.

## Deployment

This portfolio is ready to be deployed to services like:

- Netlify
- Vercel
- GitHub Pages

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Customization

### Changing Personal Information

Edit the content in the HTML files to reflect your own information:

- `index.html` - Main landing page
- `src/pages/about.html` - About page
- `src/pages/projects.html` - Projects showcase
- `src/pages/contact.html` - Contact information

### Modifying Styles

The main styling is handled through Tailwind CSS. You can customize the design by:

1. Editing the `tailwind.config.js` file to change colors, fonts, etc.
2. Modifying the custom styles in `src/assets/css/styles.css`

### Adding Projects

To add new projects, copy an existing project card in `src/pages/projects.html` and update the content.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) for animations
- [Font Awesome](https://fontawesome.com/) for icons
