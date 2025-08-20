'use client'

import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif text-primary-800">
                PremiumTech
              </h1>
              <p className="text-xs text-primary-600">Elite Collection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-primary-700 hover:text-primary-800 font-medium transition-colors">
              Catalog
            </a>
            <a href="#features" className="text-primary-700 hover:text-primary-800 font-medium transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-primary-700 hover:text-primary-800 font-medium transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-primary-700 hover:text-primary-800 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-primary-700 hover:text-primary-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary-700 hover:text-primary-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              <a href="#catalog" className="text-primary-700 hover:text-primary-800 font-medium transition-colors py-2">
                Catalog
              </a>
              <a href="#features" className="text-primary-700 hover:text-primary-800 font-medium transition-colors py-2">
                Features
              </a>
              <a href="#testimonials" className="text-primary-700 hover:text-primary-800 font-medium transition-colors py-2">
                Reviews
              </a>
              <a href="#faq" className="text-primary-700 hover:text-primary-800 font-medium transition-colors py-2">
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}