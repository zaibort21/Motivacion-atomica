'use client'

import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: 'Absolutely love my wireless earbuds! The sound quality is incredible and they arrived faster than expected. Premium quality at an amazing price.',
      product: 'Wireless Earbuds Pro Max',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'California, USA',
      rating: 5,
      comment: 'The smartwatch exceeded my expectations. Great battery life, accurate fitness tracking, and the customer service team was super helpful.',
      product: 'SmartWatch Fitness Tracker Elite',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Texas, USA',
      rating: 5,
      comment: 'Fast shipping, excellent packaging, and the product quality is top-notch. This is now my go-to store for tech accessories.',
      product: 'Gaming Mechanical Keyboard RGB',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Florida, USA',
      rating: 5,
      comment: 'Great value for money! The wireless charger works perfectly and the LED display is a nice touch. Highly recommend this store.',
      product: 'Portable Wireless Charger 20000mAh',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Washington, USA',
      rating: 5,
      comment: 'The LED strip lights transformed my room! Easy to install, great app control, and vibrant colors. Customer support was excellent too.',
      product: 'Smart LED Strip Lights 16ft RGB',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Colorado, USA',
      rating: 5,
      comment: 'Impressive build quality and performance. The gaming mouse is precise and responsive. Delivery was quick and packaging was secure.',
      product: 'Wireless Gaming Mouse High Precision',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for premium quality tech products and exceptional service.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary-900">4.9</span>
            <span className="text-primary-600">out of 5 stars</span>
            <span className="text-primary-500">•</span>
            <span className="text-primary-600">Based on 10,000+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-premium relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-primary-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Product */}
              <div className="text-sm text-accent-600 font-medium mb-4">
                {testimonial.product}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-primary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-primary-600 mb-6">
              Experience premium quality and exceptional service. Start shopping today!
            </p>
            <button className="btn-premium">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}