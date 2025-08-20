'use client'

import { Shield, Truck, HeadphonesIcon, RefreshCw } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'All products are carefully tested and verified for quality before shipping. We guarantee premium materials and craftsmanship.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Truck,
      title: 'Fast Worldwide Shipping',
      description: 'Free shipping on orders over $50. Express delivery available. Track your order every step of the way.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is available around the clock to help with any questions or concerns.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: RefreshCw,
      title: '30-Day Returns',
      description: 'Not satisfied? Return any item within 30 days for a full refund. No questions asked.',
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            Why Choose PremiumTech?
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with premium quality products and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-premium text-center group hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-900">10K+</div>
            <div className="text-primary-600">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-900">99%</div>
            <div className="text-primary-600">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-900">24/7</div>
            <div className="text-primary-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}