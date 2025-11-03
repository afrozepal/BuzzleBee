# AEROPAL Tax & Accounting Services Website

A modern, professional website for AEROPAL Tax & Accounting Services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design inspired by Weightmans with a trustworthy blue/teal color palette
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Server-side rendering, structured data, and comprehensive meta tags
- **Performance**: Optimized for Core Web Vitals with fast loading times
- **Accessibility**: Semantic HTML5 and ARIA attributes for full accessibility
- **Interactive Components**: Smooth animations and transitions using Framer Motion

## Pages

- **Home**: Hero section, services overview, testimonials, and trust elements
- **Services**: Comprehensive service listings with detailed service pages
- **About Us**: Company story, team information, and values
- **News & Insights**: Blog with dynamic routing and article pages
- **Contact**: Contact form, company information, and map integration
- **Testimonials**: Client testimonials and success stories

## Services

- Tax Investigations
- Private Client Services
- R&D Tax Relief
- VAT Services
- Payroll Services
- Self Assessment

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── insights/          # Blog pages
│   ├── services/          # Services pages
│   ├── testimonials/      # Testimonials page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialSlider.tsx
├── data/                  # Static data
│   ├── blog.ts
│   ├── services.ts
│   ├── team.ts
│   └── testimonials.ts
├── lib/                   # Utility functions
│   └── utils.ts
└── types/                 # TypeScript type definitions
    └── index.ts
```

## SEO Features

- Server-side rendering (SSR) and static generation (SSG)
- Structured data (JSON-LD) for search engines
- Comprehensive meta tags and OpenGraph data
- Semantic HTML5 markup
- Optimized images and performance

## Deployment

The website is ready for deployment on platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## Contact

For questions about this website or AEROPAL's services, please contact:

- **Phone**: 0161-660-0600
- **Email**: info@aeropal.co.uk
- **Address**: 123 Business Street, Manchester M1 2AB, UK