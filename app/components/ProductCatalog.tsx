'use client'

import { useState, useEffect } from 'react'
import { Star, ShoppingCart, Heart, Filter } from 'lucide-react'
import { trackAddToCart } from './Analytics'

interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  description: string
  images: string[]
  category: string
  subcategory: string
  features: string[]
  ratings: number
  reviews: number
  inStock: boolean
  trending?: boolean
  tags: string[]
}

export function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load products from JSON file
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading products:', err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.ratings - a.ratings)
        break
      case 'featured':
      default:
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0))
        break
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategory, sortBy])

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  const handleAddToCart = (product: Product) => {
    trackAddToCart(product)
    // Add to cart logic here
    console.log('Added to cart:', product)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  if (loading) {
    return (
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="skeleton w-64 h-8 mx-auto mb-4 rounded-lg" />
            <div className="skeleton w-96 h-6 mx-auto rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="card-premium">
                <div className="skeleton w-full h-48 rounded-xl mb-4" />
                <div className="skeleton w-3/4 h-6 mb-2 rounded" />
                <div className="skeleton w-1/2 h-4 mb-4 rounded" />
                <div className="skeleton w-full h-10 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="catalog" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
            Premium Product Collection
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium tech products. 
            Each item is selected for quality, innovation, and value.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-primary-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-primary-200 rounded-lg px-4 py-2 text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-primary-200 rounded-lg px-4 py-2 text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="card-premium group">
              {/* Product Image */}
              <div className="relative mb-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-xl"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.trending && (
                    <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Trending
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-primary-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-primary-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                <p className="text-primary-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.ratings)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-primary-600">
                    {product.ratings} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map(feature => (
                      <span
                        key={feature}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-primary-500 line-through ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed group-hover:scale-105 transition-transform"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-outline-premium">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  )
}