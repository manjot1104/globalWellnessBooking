# MindCare - Mental Health Counselling Website

A modern, responsive mental health counselling website built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Hero section, services overview, benefits, therapists, testimonials, and blog preview
- 📄 **About Us** - Mission, values, and team information
- 🩺 **Services** - Detailed information about all counselling services
- 💻 **Online Counselling** - How it works, session types, and benefits
- 📝 **Blog** - Article listings with categories and reading time
- 📞 **Contact** - Contact form and information
- 📅 **Book Appointment** - Comprehensive booking form
- ❓ **FAQ** - Frequently asked questions with expandable answers

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── blog/           # Blog listing page
│   ├── book-appointment/ # Booking page
│   ├── contact/        # Contact page
│   ├── faq/            # FAQ page
│   ├── online-counselling/ # Online counselling info
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── sections/       # Home page sections
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation bar
└── public/             # Static assets
```

## Design Features

- Clean, modern UI with soft color palette
- Smooth hover effects and transitions
- Fully responsive design
- SEO-friendly pages with meta tags
- Accessible components
- Reusable component structure

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content

All content can be easily modified in the respective page components and section files.

## License

This project is open source and available for use.
