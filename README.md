# Regalo para Futuras Maestras

An interactive website for future preschool teachers, featuring a special gift journey with animations, beautiful design, and downloadable cards.

## Features

- **4-Screen Interactive Flow**: Welcome → Kit Presentation → Digital Card → Celebration
- **Beautiful Design**: Minimalist and cute with soft pastel colors, rainbow accents, and handwritten fonts
- **Smooth Animations**: Framer Motion powered transitions, floating elements, staggered animations
- **Confetti Celebration**: Joyful confetti animation on the final screen
- **PDF Download**: Download a beautifully formatted A7-sized digital card
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Accessible**: Keyboard navigation and proper ARIA labels

## Technology Stack

- **React 19.2** - Modern React with concurrent features
- **Vite 7** - Lightning-fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **React Canvas Confetti** - High-performance confetti animations
- **@react-pdf/renderer** - PDF generation (A7 size: 74mm × 105mm)
- **Google Fonts** - Pacifico (handwritten) and Quicksand (body)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── screens/          # Screen components
│   │   ├── WelcomeScreen.jsx
│   │   ├── KitPresentation.jsx
│   │   ├── DigitalCard.jsx
│   │   └── CelebrationScreen.jsx
│   ├── cards/           # Card components
│   │   └── ToolCard.jsx
│   ├── ui/              # UI components
│   │   ├── PrimaryButton.jsx
│   │   └── DownloadButton.jsx
│   ├── pdf/             # PDF components
│   │   └── DigitalCardPDF.jsx
│   └── animations/      # Animation wrappers
│       └── FadeIn.jsx
├── hooks/
│   ├── useGiftFlow.js    # Screen progression logic
│   └── useConfetti.js   # Confetti trigger logic
├── App.jsx             # Main application
├── main.jsx            # Entry point
└── index.css           # Tailwind styles
```

## Customization

### Colors

The color palette is defined in `src/index.css`. To change colors:

```css
@theme {
  --color-primary-cream: #FDF8F0;
  --color-primary-pink: #FCE4EC;
  --color-primary-blue: #E3F2FD;
  --color-primary-yellow: #FFF9C4;
  --color-primary-green: #E8F5E9;
  --color-primary-purple: #F3E5F5;
  /* ... */
}
```

### PDF Design

To customize the downloadable PDF card, edit `src/components/pdf/DigitalCardPDF.jsx`. The component uses `@react-pdf/renderer` and creates an A7-sized document.

### Fonts

Fonts are loaded from Google Fonts in `index.html`:
- **Pacifico**: Handwritten style for titles
- **Quicksand**: Clean rounded font for body text

## Building

The project uses modern build tools for optimal performance:

```bash
npm run build
```

Build output is in the `dist/` directory. The build is optimized and includes:
- Code splitting
- Tree shaking
- CSS minification
- Asset optimization

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

AGPL-3
