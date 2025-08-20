'use client'

import { Star, ArrowRight } from 'lucide-react'
import { trackEvent } from './Analytics'

export function Hero() {
  const handleCtaClick = () => {
    trackEvent('cta_hero_click', {
      button_text: 'Shop Premium Collection',
      location: 'hero_section'
    })
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[length:60px_60px] bg-repeat" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Quality Guaranteed</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-900 leading-tight mb-6">
              Premium Tech
              <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                {' '}Collection
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-primary-600 mb-8 leading-relaxed">
              Discover cutting-edge electronics and premium gadgets at unbeatable prices. 
              From wireless earbuds to gaming accessories - everything you need for the modern lifestyle.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-primary-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-primary-600">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm text-primary-600">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleCtaClick}
                className="btn-premium group inline-flex items-center justify-center space-x-2"
              >
                <span>Shop Premium Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 rounded-xl border-2 border-primary-200 text-primary-700 font-semibold hover:bg-primary-50 transition-colors">
                View Catalog
              </button>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 card-premium p-8">
                <img
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop&auto=format"
                  alt="Premium Wireless Earbuds"
                  className="w-full h-80 object-cover rounded-xl"
                  loading="eager"
                />
                
                {/* Floating price tag */}
                <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                  <div className="text-xs opacity-80">From</div>
                  <div className="text-lg">$49.99</div>
                </div>
                
                {/* Floating rating */}
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold text-primary-800">4.8</span>
                    <span className="text-sm text-primary-600">(2.5k reviews)</span>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-accent-200 rounded-full opacity-20 -z-10" />
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-primary-200 rounded-full opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}