import { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'AEROPAL Tax & Accounting Services | Expert Tax Advisory Manchester',
    template: '%s | AEROPAL Tax & Accounting Services'
  },
  description: 'Expert tax advisory and accounting services in Manchester. Specializing in tax investigations, R&D tax relief, VAT services, and private client tax planning.',
  keywords: ['tax advisory', 'accounting services', 'Manchester', 'R&D tax relief', 'VAT services', 'tax investigations'],
  authors: [{ name: 'AEROPAL Tax & Accounting Services' }],
  creator: 'AEROPAL Tax & Accounting Services',
  publisher: 'AEROPAL Tax & Accounting Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aeropal.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://aeropal.co.uk',
    title: 'AEROPAL Tax & Accounting Services | Expert Tax Advisory Manchester',
    description: 'Expert tax advisory and accounting services in Manchester. Specializing in tax investigations, R&D tax relief, VAT services, and private client tax planning.',
    siteName: 'AEROPAL Tax & Accounting Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEROPAL Tax & Accounting Services | Expert Tax Advisory Manchester',
    description: 'Expert tax advisory and accounting services in Manchester. Specializing in tax investigations, R&D tax relief, VAT services, and private client tax planning.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "AEROPAL Tax & Accounting Services",
              "url": "https://aeropal.co.uk",
              "logo": "https://aeropal.co.uk/logo.png",
              "description": "Expert tax advisory and accounting services in Manchester. Specializing in tax investigations, R&D tax relief, VAT services, and private client tax planning.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Street",
                "addressLocality": "Manchester",
                "postalCode": "M1 2AB",
                "addressCountry": "GB"
              },
              "telephone": "0161-660-0600",
              "email": "info@aeropal.co.uk",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.linkedin.com/company/aeropal-tax",
                "https://twitter.com/aeropaltax"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 53.4808,
                  "longitude": -2.2426
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}