
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { MOCK_PRODUCTS } from './constants';
import { Category, FilterState, Product } from './types';

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: Category.ALL,
    priceRange: [10, 450],
    availability: {
      inStock: true,
      preOrder: false,
    },
    searchQuery: '',
  });

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const categoryMatch = filters.category === Category.ALL || product.category === filters.category;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const stockMatch = filters.availability.inStock ? product.inStock : true;
      const searchMatch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return categoryMatch && priceMatch && stockMatch && searchMatch;
    });
  }, [filters]);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const handleCategorySelect = (category: Category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handlePriceChange = (range: [number, number]) => {
    setFilters(prev => ({ ...prev, priceRange: range }));
  };

  const toggleAvailability = (type: 'inStock' | 'preOrder') => {
    setFilters(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [type]: !prev.availability[type]
      }
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        onSearch={handleSearch} 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
      />
      
      <main className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-10 flex-grow">
        <Sidebar 
          filters={filters}
          onCategorySelect={handleCategorySelect}
          onPriceChange={handlePriceChange}
          onToggleAvailability={toggleAvailability}
        />
        
        <div className="flex-1">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
              Poultry & Egg Catalog
            </h1>
            <p className="text-slate-500 dark:text-[#cccc8e] text-base">
              High-quality livestock and farm-fresh produce.
            </p>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </div>
      </main>

      <Footer />
      <GeminiAssistant />
    </div>
  );
};

export default App;
