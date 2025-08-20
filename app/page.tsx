'use client'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductCatalog } from './components/ProductCatalog'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { AdBanner } from './components/AdBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Ad Banner - Top */}
      <AdBanner slot="top-banner" />
      
      <ProductCatalog />
      
      {/* Ad Banner - Middle */}
      <AdBanner slot="middle-banner" />
      
      <Features />
      <Testimonials />
      <FAQ />
      
      {/* Ad Banner - Bottom */}
      <AdBanner slot="bottom-banner" />
      
      <Footer />
    </main>
  )
}