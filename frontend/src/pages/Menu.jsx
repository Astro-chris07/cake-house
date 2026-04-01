import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-surface min-h-screen py-32 pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-left w-full mb-16">
          <span className="font-label text-sm uppercase tracking-widest text-primary mb-4 block">The 2024 Collection</span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6">Our Full Selection</h1>
          <p className="font-body text-secondary text-lg max-w-xl">
            Discover our delectable range of artisanal cakes, cupcakes, and pastries baked fresh every day.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto hide-scrollbar">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-8 py-3 rounded-full whitespace-nowrap font-label text-sm uppercase tracking-wider transition-all border ${
                activeCategory === 'All' ? 'bg-primary-container text-on-primary-container border-transparent' : 'bg-surface text-on-surface border-outline-variant/30 hover:bg-surface-container'
              }`}
            >
              All Treats
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full whitespace-nowrap font-label text-sm uppercase tracking-wider transition-all border ${
                  activeCategory === category ? 'bg-primary-container text-on-primary-container border-transparent' : 'bg-surface text-on-surface border-outline-variant/30 hover:bg-surface-container'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-outline" size={20} />
            <input 
              type="text" 
              placeholder="Search treats..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant/30 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body text-on-surface placeholder:text-outline"
            />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-xl shadow-sm border border-outline-variant/30">
            <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="text-primary" size={32} />
            </div>
            <h3 className="font-headline text-2xl mb-2 text-on-surface">No treats found</h3>
            <p className="font-body text-secondary">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 px-8 py-3 rounded-full border border-primary text-primary font-label text-sm hover:bg-primary-container transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
