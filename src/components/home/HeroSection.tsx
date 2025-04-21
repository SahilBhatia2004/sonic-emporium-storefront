
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute transform -rotate-12 -left-40 -top-40 bg-accent/20 rounded-full w-96 h-96"></div>
        <div className="absolute right-10 bottom-20 bg-accent/30 rounded-full w-72 h-72"></div>
        <div className="absolute -left-20 bottom-10 bg-accent/10 rounded-full w-64 h-64"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Experience Audio <span className="text-accent">Perfection</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Discover our collection of premium headphones crafted for audiophiles and designed for comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="Premium Headphones" 
              className="max-w-full rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
