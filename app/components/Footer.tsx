'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">PremiumTech</h3>
                <p className="text-primary-300 text-sm">Elite Collection</p>
              </div>
            </div>
            <p className="text-primary-300 leading-relaxed">
              Your trusted source for premium electronics and tech accessories. 
              We curate the finest products to enhance your digital lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#catalog" className="text-primary-300 hover:text-white transition-colors">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-300 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-300 hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="text-primary-300 hover:text-white transition-colors">
                  Tech Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-primary-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-primary-300 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-primary-300 hover:text-white transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-primary-300 hover:text-white transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="/support" className="text-primary-300 hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-300">Email</p>
                  <a href="mailto:support@premiumtech.com" className="text-white hover:text-accent-400 transition-colors">
                    support@premiumtech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-300">Phone</p>
                  <a href="tel:+1-800-PREMIUM" className="text-white hover:text-accent-400 transition-colors">
                    +1 (800) PREMIUM
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-300">Address</p>
                  <p className="text-white">
                    123 Tech Avenue<br />
                    Digital City, DC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-primary-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-300 mb-6">
              Subscribe to our newsletter for the latest tech deals, product launches, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-800 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button className="btn-premium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-400 text-sm">
              © {currentYear} PremiumTech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-primary-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-primary-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}