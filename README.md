# GPrint - Modern Holographic Sticker Website

A cutting-edge website for GPrint, a leading manufacturer of premium holographic stickers and materials. Built with modern web technologies and featuring a futuristic holographic design system.

## ✨ Features

### 🎨 Modern Holographic Design

- **Glass Morphism**: Beautiful translucent cards with backdrop blur effects
- **Holographic Elements**: Floating orbs, particle effects, and shimmer animations
- **Dynamic Gradients**: Rainbow color schemes and animated backgrounds
- **3D Transforms**: Subtle rotations and perspective effects

### 🚀 Advanced Animations

- **Framer Motion**: Smooth, performant animations throughout the site
- **Scroll-triggered**: Elements animate as they come into view
- **Hover Effects**: Interactive elements with micro-animations
- **Particle Systems**: Floating background elements for depth

### 📱 Responsive Design

- **Mobile-first**: Optimized for all device sizes
- **Touch-friendly**: Smooth interactions on mobile devices
- **Performance**: Optimized animations and lazy loading

### 🌐 Internationalization

- **Multi-language**: Support for multiple locales
- **Dynamic Content**: Easy content management
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Query
- **Internationalization**: next-intl
- **TypeScript**: Full type safety

## 🎨 Design System

### Color Palette

- **Primary**: Cyan (#00ffff) - Technology and innovation
- **Secondary**: Magenta (#ff00ff) - Creativity and energy
- **Accent**: Yellow (#ffff00) - Premium quality
- **Background**: Dark gradients for contrast
- **Text**: White and light grays for readability

### Typography

- **Headings**: Onest font for modern, clean look
- **Body**: Inter font for excellent readability
- **Holographic Text**: Animated gradient text effects

### Components

- **Glass Cards**: Translucent containers with blur effects
- **Holographic Borders**: Animated rainbow borders
- **Floating Orbs**: Decorative background elements
- **Particle Systems**: Dynamic background animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gprint.git

# Navigate to project directory
cd gprint

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
gprint/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── _sections/          # Page sections
│   │       ├── layout.tsx          # Root layout
│   │       └── page.tsx            # Home page
│   ├── features/
│   │   ├── header/                 # Header component
│   │   └── footer/                 # Footer component
│   ├── shared/
│   │   ├── components/             # Reusable components
│   │   ├── lib/                    # Utilities and configs
│   │   └── ui/                     # UI components
│   └── styles/
│       └── globals.css             # Global styles
├── public/                          # Static assets
├── tailwind.config.ts              # Tailwind configuration
└── package.json
```

## 🎯 Key Components

### Hero Section

- Animated title with holographic text effects
- Floating decorative elements
- Particle background system
- Responsive image with 3D transforms

### Benefits Section

- Grid layout with glass morphism cards
- Color-coded icons with gradients
- Hover animations and shimmer effects
- Call-to-action with holographic styling

### Production Section

- Product showcase with enhanced styling
- Feature highlights with glass cards
- Interactive elements and animations

### Header & Footer

- Fixed header with scroll effects
- Glass morphism navigation
- Comprehensive footer with social links
- Floating decorative elements

## 🎨 Custom CSS Classes

### Holographic Effects

```css
.holo-text-primary      /* Primary holographic text */
.holo-text-secondary    /* Secondary holographic text */
.holo-border           /* Animated border effect */
.holo-orb              /* Floating orb element */
.holo-bg               /* Background pattern */
```

### Glass Morphism

```css
.glass-card            /* Glass effect container */
.glass-card:hover      /* Enhanced hover state */
```

### Animations

```css
.animate-float         /* Floating animation */
.animate-shimmer       /* Shimmer effect */
.text-glow             /* Text glow effect */
```

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- Extended color palette for holographic effects
- Custom animations and keyframes
- Enhanced spacing and shadow utilities
- Responsive design utilities

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP support
- **Lazy Loading**: Components animate only when in viewport
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle analyzer

## 🎯 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Email: support@gprint.com
- Documentation: [docs.gprint.com](https://docs.gprint.com)
- Issues: [GitHub Issues](https://github.com/yourusername/gprint/issues)

---

**Built with ❤️ by the GPrint Team**
