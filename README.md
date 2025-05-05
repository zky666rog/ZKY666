# Portfolio Website

A modern portfolio website with responsive design, supporting dynamic content loading and smooth interaction experience.

## Project Structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # Style file
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── resume-filter.js # Resume section filtering functionality
│   └── portfolio-filter.js # Portfolio section filtering functionality
└── images/
    └── projects/       # Project images
```

## Features

- Responsive design for all devices
- Dynamic loading of projects and content
- Smooth scroll navigation
- Elegant animation effects
- Interactive resume filtering system
- Portfolio project filtering functionality
- Modern black and yellow color scheme
- Contact form with validation

## Usage

1. Clone the project locally
2. Update project data in `js/main.js`
3. Add project images to `images/projects/` directory
4. Open `index.html` in browser to preview

## Customization

### Project Data
Modify the `projects` array in `js/main.js` to update project showcase:

```javascript
{
    title: "Project Title",
    category: "Project Category",
    image: "Image Path",
    description: "Project Description"
}
```

### Resume Content
Update resume content in `index.html`:
- Education section
- Experience section
- Skills section

### Contact Information
Update contact details in `index.html`:
- Email
- Phone
- Social media links

## Technology Stack

- HTML5
- CSS3 (using CSS variables and modern layout techniques)
- JavaScript (vanilla JS, no framework dependency)
- Responsive design with media queries
- Modern CSS animations and transitions

## Browser Support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## License

MIT License 