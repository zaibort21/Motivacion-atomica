'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: 'What is your shipping policy?',
      answer: 'We offer free worldwide shipping on orders over $50. Standard shipping typically takes 7-15 business days, while express shipping takes 3-7 business days. All orders include tracking information so you can monitor your package every step of the way.',
    },
    {
      question: 'What is your return and refund policy?',
      answer: 'We offer a 30-day return policy for all items. If you\'re not completely satisfied with your purchase, you can return it for a full refund or exchange. Items must be in original condition with all packaging and accessories included.',
    },
    {
      question: 'Are your products authentic and high quality?',
      answer: 'Absolutely! All our products are sourced from reputable manufacturers and undergo strict quality control checks before shipping. We stand behind the quality of every item we sell and offer manufacturer warranties where applicable.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by location and shipping method. Standard shipping typically takes 7-15 business days, while express shipping takes 3-7 business days. You will receive tracking information once your order ships.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! Our customer support team is available 24/7 to help with any questions or concerns. You can contact us via email, live chat, or phone. We\'re committed to providing exceptional customer service.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and various local payment methods depending on your location. All transactions are secure and encrypted.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on our website or directly with the shipping carrier. You\'ll also receive updates on the status of your delivery.',
    },
    {
      question: 'Do you offer warranty on products?',
      answer: 'Most of our products come with manufacturer warranties ranging from 6 months to 2 years depending on the item. We also offer our own satisfaction guarantee - if any product fails within the first 30 days, we\'ll replace it free of charge.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-primary-600">
            Find answers to the most common questions about our products and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-primary-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-600" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="text-primary-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
              Our customer support team is here to help. Contact us 24/7 for personalized assistance with your questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium">
                Contact Support
              </button>
              <button className="px-8 py-3 rounded-xl border-2 border-primary-200 text-primary-700 font-semibold hover:bg-primary-50 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}