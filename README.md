# Texas BPOC Training Topics

A comprehensive interactive training platform for Basic Peace Officer Course (BPOC) topics, featuring modern web technologies and mobile-friendly design.

## Features

- **Modern UI/UX**: Clean, responsive design using Tailwind CSS
- **Interactive Elements**: Quizzes, collapsible sections, and dynamic content
- **Mobile-Friendly**: Fully responsive design that works on all devices
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Production-Ready**: Optimized CSS build process

## Topics Covered

1. **Civilian Interaction** - Professional contact methods and de-escalation techniques
2. **Texas Penal Code** - Essential criminal offenses and classifications
3. **Traffic Law** - Comprehensive TRC study guide
4. **Officer Fitness, Wellness, & Stress** - Health and wellness guidelines
5. **Constitution & CCP** - Constitutional rights and criminal procedure
6. **Traffic Stops** - Procedures and safety protocols
7. **Police Mindset** - Tactical thinking and decision-making
8. **Arrest & Frisking** - Legal procedures and authority
9. **Criminal Investigation** - Interrogation tactics and Miranda rights
10. **Racial Profiling** - Legal framework and bias prevention
11. **Firearms & Tactics** - Safety and marksmanship fundamentals
12. **Texas Court System** - Interactive guide to court structure
13. **Report Writing** - Documentation and communication skills
14. **Interview Techniques** - Professional interview methods

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the CSS:
   ```bash
   npm run build-css-prod
   ```

4. For development with watch mode:
   ```bash
   npm run build-css
   ```

### Running the Project

You can serve the files using any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js serve
npx serve .

# Using npm script
npm run serve
```

Then open `http://localhost:8000` in your browser.

### Building for Production

The project uses a local Tailwind CSS build instead of CDN for production:

```bash
npm run build-css-prod
```

This creates an optimized, minified CSS file in `dist/output.css`.

## File Structure

```
├── index.html              # Main landing page
├── topics/                 # Individual topic pages
│   ├── civilian-interaction.html
│   ├── penal-code.html
│   ├── fitness-wellness.html
│   └── ... (other topics)
├── src/
│   └── input.css          # Tailwind CSS source
├── dist/
│   └── output.css         # Built CSS file
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind configuration
```

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Inter Font** - Modern typography
- **Responsive Design** - Mobile-first approach

## License

This project is for educational and training purposes.