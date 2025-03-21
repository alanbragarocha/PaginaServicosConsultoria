# Professional Services Website Template

A modern, responsive website template built for professional service providers. This template is designed for professionals such as therapists, consultants, coaches, and other service-based businesses looking for a clean, professional online presence.

## Features

- **Fully Responsive Design** - Looks great on all devices from mobile to desktop
- **Modern UI/UX** - Clean, professional aesthetic with smooth animations and transitions
- **Optimized for SEO** - Built with search engines in mind
- **Fast Loading** - Lightweight and optimized for performance
- **Easy to Customize** - Well-structured and commented code
- **Multiple Pages** - Homepage and About page with easy expandability
- **Dynamic Elements** - Including auto-updating experience counters
- **Accessible** - Built with accessibility in mind

## Pages

- **Home Page** (`inicio.html`) - Main landing page with sections for:
  - Professional introduction
  - Services offered
  - Specialties and expertise areas
  - Differentiators
  - Client testimonials
  - Contact information

- **About Page** (`sobre.html`) - Detailed professional background including:
  - Professional journey
  - Academic background
  - Professional experience
  - Certifications and qualifications
  - Work philosophy and values

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - Custom properties (CSS variables)
  - Flexbox and CSS Grid
  - Responsive design principles
  - Smooth animations and transitions
- **JavaScript** - Enhanced functionality:
  - Dynamic time/experience calculations
  - Navigation and scroll functionality
  - Mobile menu toggle
- **Font Awesome** - For icons
- **Google Fonts** - Inter and Montserrat typefaces
- **JSON-LD** - Structured data for SEO

## File Structure

```
├── assets/
│   ├── css/
│   │   ├── style.css        # Main stylesheet for homepage
│   │   └── sobre.css        # Stylesheet for About page
│   ├── imagem/
│   │   ├── Logo.svg         # Logo file
│   │   ├── pattern.svg      # Background pattern
│   │   ├── self.jpg         # Professional photo
│   │   └── workspace.jpg    # Workspace image
│   ├── js/
│   │   ├── main.js          # Main JavaScript functionality
│   │   ├── ld.json          # Structured data for SEO
│   │   └── tempoDecorridoHabilidades.js # Time calculation script
├── inicio.html              # Homepage
├── sobre.html               # About page
├── politica-privacidade.html # Privacy policy page (not included in repo)
├── termos-servico.html      # Terms of service page (not included in repo)
├── faq.html                 # FAQ page (not included in repo)
└── README.md                # This file
```

## Color Scheme

The site uses a modern color palette defined through CSS variables:

- Primary: `#4361ee` (Blue)
- Secondary: `#f72585` (Pink)
- Accent: `#3a0ca3` (Deep Purple)
- Green Accent: `#4cc9a0` (Teal)
- Various neutrals from white to dark gray

The color scheme can be easily customized by modifying the CSS variables in the `:root` selector in the CSS files.

## Getting Started

1. **Clone or download the repository**
2. **Customize the content**:
   - Replace placeholder text with your own professional information
   - Update images in the `assets/imagem/` directory
   - Modify contact information and social media links
   - Adjust colors in the CSS files if desired
3. **Test locally** by opening `inicio.html` in your browser
4. **Deploy** to your web hosting provider

## Customization Guide

### Changing Personal Information

- Update all placeholder text in `inicio.html` and `sobre.html`
- Replace experience dates in elements with `data-start-date` attributes
- Update contact information in the footer sections

### Changing Images

Replace the following images with your own:
- `Logo.svg` - Your professional logo
- `self.jpg` - Your professional headshot
- `workspace.jpg` - Image of your workspace or relevant professional environment

### Changing Colors

To change the color scheme, modify the CSS variables in the `:root` selector in both CSS files:

```css
:root {
    --primary-color: #4361ee;
    --primary-light: #738eeb;
    --primary-dark: #2b4acb;
    --secondary-color: #f72585;
    --accent-color: #3a0ca3;
    --green-accent: #4cc9a0;
    /* Neutral colors */
    --dark: #1f2937;
    --dark-light: #374151;
    --gray: #9ca3af;
    --light-gray: #e5e7eb;
    --light: #f9fafb;
    --white: #ffffff;
}
```

### Structured Data

Update the `ld.json` file with your business information to enhance SEO and enable rich results in search engines.

## Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This template is available for personal and commercial use.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Inspiration: Modern web design principles and professional service websites

