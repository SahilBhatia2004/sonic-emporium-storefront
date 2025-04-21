
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { filters } from '@/data/products';

interface ProductFiltersProps {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedPriceRanges: string[];
  setSelectedPriceRanges: (ranges: string[]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  selectedPriceRanges,
  setSelectedPriceRanges
}) => {
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  return (
    <div className="space-y-6">
      {/* Brands Filter */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">Brands</h3>
        <div className="space-y-2">
          {filters.brands.map(brand => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="ml-2 text-sm font-medium leading-none cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Filter */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">Categories</h3>
        <div className="space-y-2">
          {filters.categories.map(category => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <label
                htmlFor={`category-${category}`}
                className="ml-2 text-sm font-medium leading-none cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">Price Range</h3>
        <div className="space-y-2">
          {filters.priceRanges.map(range => (
            <div key={range} className="flex items-center">
              <Checkbox
                id={`price-${range}`}
                checked={selectedPriceRanges.includes(range)}
                onCheckedChange={() => handlePriceRangeChange(range)}
              />
              <label
                htmlFor={`price-${range}`}
                className="ml-2 text-sm font-medium leading-none cursor-pointer"
              >
                {range}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
