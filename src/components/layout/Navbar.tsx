
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold">Sonic<span className="text-accent">Emporium</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-accent transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-accent transition-colors">Shop</Link>
            <Link to="/about" className="font-medium hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="font-medium hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Search and Cart (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <Link to="/cart">
              <Button variant="ghost" className="relative p-2">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-accent transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/products" className="font-medium hover:text-accent transition-colors" onClick={toggleMenu}>Shop</Link>
              <Link to="/about" className="font-medium hover:text-accent transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="font-medium hover:text-accent transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
