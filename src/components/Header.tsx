import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full purple-gradient flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h1 className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emoflow-purple to-emoflow-purple-dark">
                EmoFlow
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-emoflow-purple transition-colors">
              Home
            </Link>
            <Link to="/chatbot" className="text-sm font-medium text-gray-700 hover:text-emoflow-purple transition-colors">
              AI Advisor
            </Link>
            <Link to="/schedule" className="text-sm font-medium text-gray-700 hover:text-emoflow-purple transition-colors">
              Schedule
            </Link>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-emoflow-purple transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-emoflow-purple transition-colors">
              How It Works
            </a>
          </nav>
          
          <Link to="/chatbot" className="hidden md:block px-5 py-2.5 rounded-full text-sm font-medium text-white purple-gradient transition-all hover:shadow-lg hover:scale-105 active:scale-95">
            Boost Productivity
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emoflow-purple hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/chatbot" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emoflow-purple hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Advisor
              </Link>
              <Link 
                to="/schedule" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emoflow-purple hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <a 
                href="#features" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emoflow-purple hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emoflow-purple hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
