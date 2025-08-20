import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from './components/Analytics'
import { AdSense } from './components/AdSense'

export const metadata: Metadata = {
  title: 'Premium Tech Store | Top Quality Electronics & Gadgets',
  description: 'Discover premium tech products at unbeatable prices. Wireless earbuds, smartwatches, gaming accessories, and more. Fast shipping worldwide.',
  keywords: 'electronics, gadgets, wireless earbuds, smartwatch, gaming, tech accessories, premium quality',
  authors: [{ name: 'Premium Tech Store' }],
  openGraph: {
    title: 'Premium Tech Store | Top Quality Electronics & Gadgets',
    description: 'Discover premium tech products at unbeatable prices. Wireless earbuds, smartwatches, gaming accessories, and more.',
    type: 'website',
    url: 'https://zaibort21.github.io/Elysiam',
    siteName: 'Premium Tech Store',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Premium Tech Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Tech Store | Top Quality Electronics & Gadgets',
    description: 'Discover premium tech products at unbeatable prices. Wireless earbuds, smartwatches, gaming accessories, and more.',
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&h=630'],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Analytics />
        
        {/* Google AdSense */}
        <AdSense />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Premium Tech Store",
              "description": "Premium electronics and tech accessories at competitive prices",
              "url": "https://zaibort21.github.io/Elysiam",
              "logo": "https://zaibort21.github.io/Elysiam/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@premiumtechstore.com"
              },
              "sameAs": [
                "https://facebook.com/premiumtechstore",
                "https://instagram.com/premiumtechstore",
                "https://twitter.com/premiumtechstore"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}