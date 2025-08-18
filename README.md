# Harinwin Solutions - Travel Booking Landing Page

A pixel-perfect, responsive landing page for Harinwin Solutions, a company specializing in travel booking system maintenance. Built with Next.js 14, Tailwind CSS, and modern React patterns.

## 🚀 Features

- **Fully Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI/UX** - Clean, professional design matching the provided mockup
- **Performance Optimized** - Built with Next.js App Router and optimized components
- **Accessibility** - Semantic HTML and proper ARIA attributes
- **SEO Ready** - Meta tags, structured content, and optimized for search engines

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#042460` - Main brand color
- **Light Blue**: `#4A90E2` - Accent color for icons and highlights
- **Dark Blue**: `#0A1B3D` - Footer background
- **Cream**: `#F8F6F0` - Section backgrounds
- **White**: `#FFFFFF` - Content sections

### Typography
- **Font Family**: Plus Jakarta Sans (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## 🏗️ Project Structure

```
harin/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
├── components/
│   ├── layout/
│   │   ├── Header/          # Navigation header
│   │   └── Footer/          # Site footer
│   ├── sections/
│   │   ├── HeroSection/     # Hero banner
│   │   ├── AboutSection/    # Company overview
│   │   ├── ServicesSection/ # Services showcase
│   │   ├── WhyChooseSection/ # Features and benefits
│   │   └── CTASection/      # Call-to-action
│   └── ui/
│       ├── Button/          # Reusable button component
│       └── ServiceCard/     # Service card component
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column grid
- **Desktop**: `> 1024px` - Full layout with side-by-side sections

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### Button Component
Reusable button with multiple variants:
- `primary` - Solid blue background
- `outline` - Transparent with blue border
- `secondary` - Light blue background

### ServiceCard Component
Displays service information with:
- Icon (Lucide React)
- Title and description
- Call-to-action button
- Highlighted state option

### Layout Components
- **Header**: Sticky navigation with logo and menu
- **Footer**: Company information, links, and social media

## 🎨 Styling Approach

- **Tailwind CSS** for layout, spacing, and utilities
- **Component-based styling** for complex interactions
- **Responsive design** with mobile-first approach
- **Smooth transitions** and hover effects

## 📱 Mobile Features

- Collapsible navigation
- Stacked layouts for small screens
- Touch-friendly button sizes
- Optimized typography scaling

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#042460',
  'light-blue': '#4A90E2',
  'dark-blue': '#0A1B3D',
  cream: '#F8F6F0'
}
```

### Content
Modify text content in individual component files under `components/sections/`

### Styling
Adjust Tailwind classes in component JSX files or extend the design system in `tailwind.config.js`

## 📄 License

This project is proprietary to Harinwin Solutions.

## 🤝 Contributing

For internal development and updates, follow the established coding standards:
- Use functional components
- Follow Standard.js rules
- Implement responsive design
- Maintain accessibility standards

## 📞 Support

For technical questions or support, contact the development team.
