
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FilterX, Menu, X } from 'lucide-react';
import { getFilteredProducts } from '@/data/products';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const initialSearchTerm = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const products = getFilteredProducts(searchTerm, selectedBrands, selectedCategories, selectedPriceRanges);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already performed reactively
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
  };
  
  const isFiltersApplied = searchTerm || selectedBrands.length > 0 || selectedCategories.length > 0 || selectedPriceRanges.length > 0;

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-heading font-bold mb-4 md:mb-0">Browse Headphones</h1>
            
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-auto">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>
          
          <div className="flex md:hidden justify-between mb-4">
            <Button 
              variant="outline" 
              onClick={toggleFilters} 
              className="flex items-center"
            >
              {showFilters ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            {isFiltersApplied && (
              <Button 
                variant="ghost" 
                onClick={clearFilters} 
                className="flex items-center text-gray-500"
              >
                <FilterX className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Filters */}
            <div className={`md:w-1/4 md:pr-6 mb-6 md:mb-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-heading font-semibold">Filters</h2>
                  {isFiltersApplied && (
                    <Button 
                      variant="ghost" 
                      onClick={clearFilters} 
                      className="text-sm text-gray-500 hidden md:flex items-center"
                    >
                      <FilterX className="h-4 w-4 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>
                
                <ProductFilters
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedPriceRanges={selectedPriceRanges}
                  setSelectedPriceRanges={setSelectedPriceRanges}
                />
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="md:w-3/4">
              <ProductGrid 
                products={products} 
                title={`${products.length} Products${searchTerm ? ` matching "${searchTerm}"` : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
