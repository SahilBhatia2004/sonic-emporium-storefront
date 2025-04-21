
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'over-ear',
    name: 'Over-ear Headphones',
    description: 'Full-sized headphones for immersive sound experience.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    link: '/products?category=Over-ear'
  },
  {
    id: 'on-ear',
    name: 'On-ear Headphones',
    description: 'Compact headphones with great sound and comfort.',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    link: '/products?category=On-ear'
  },
  {
    id: 'in-ear',
    name: 'In-ear Headphones',
    description: 'Portable earbuds for music on the go.',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    link: '/products?category=In-ear'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of headphones categorized by style and fit to find your perfect match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={category.link}>
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      Explore {category.name}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="text-accent font-medium hover:underline flex items-center"
                >
                  View Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
