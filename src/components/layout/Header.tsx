import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../common/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top Bar - Hidden on Mobile */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm ml-1">19+ reviews</span>
              </div>
              <a 
                href="tel:+31638903004" 
                className="flex items-center hover:text-primary-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>06-38903004</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/faq" className="hover:text-primary-300">FAQ</Link>
              <a href="mailto:info@schildersbedrijf040.nl" className="hover:text-primary-300">
                info@schildersbedrijf040.nl
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <span className="text-gray-700 hover:text-primary-500 cursor-pointer py-8">
                Diensten
              </span>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/diensten/binnenschilderwerk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Binnenschilderwerk
                </Link>
                <Link to="/diensten/buitenschilderwerk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Buitenschilderwerk
                </Link>
                <Link to="/diensten/behangen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Behangen
                </Link>
                <Link to="/diensten/houtrot-sanering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Houtrot Sanering
                </Link>
              </div>
            </div>

            <div className="relative group">
              <span className="text-gray-700 hover:text-primary-500 cursor-pointer py-8">
                Projecten
              </span>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/projecten" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Alle Projecten
                </Link>
                <Link to="/projecten?category=binnenschilderwerk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Binnenschilderwerk
                </Link>
                <Link to="/projecten?category=buitenschilderwerk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Buitenschilderwerk
                </Link>
              </div>
            </div>

            <Link to="/over-ons" className="text-gray-700 hover:text-primary-500">
              Over Ons
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-500">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="primary">
                Offerte aanvragen
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full bg-white shadow-lg z-50`}>
          <div className="py-4 px-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500">Diensten</h3>
              <Link to="/diensten/binnenschilderwerk" className="block py-2 text-gray-700">
                Binnenschilderwerk
              </Link>
              <Link to="/diensten/buitenschilderwerk" className="block py-2 text-gray-700">
                Buitenschilderwerk
              </Link>
              <Link to="/diensten/behangen" className="block py-2 text-gray-700">
                Behangen
              </Link>
              <Link to="/diensten/houtrot-sanering" className="block py-2 text-gray-700">
                Houtrot Sanering
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500">Projecten</h3>
              <Link to="/projecten" className="block py-2 text-gray-700">
                Alle Projecten
              </Link>
              <Link to="/projecten?category=binnenschilderwerk" className="block py-2 text-gray-700">
                Binnenschilderwerk
              </Link>
              <Link to="/projecten?category=buitenschilderwerk" className="block py-2 text-gray-700">
                Buitenschilderwerk
              </Link>
            </div>

            <div className="space-y-2">
              <Link to="/over-ons" className="block py-2 text-gray-700">
                Over Ons
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700">
                Contact
              </Link>
            </div>

            <div className="pt-4">
              <Link to="/contact" className="w-full">
                <Button variant="primary" fullWidth>
                  Offerte aanvragen
                </Button>
              </Link>
            </div>

            <div className="pt-4 space-y-2">
              <a href="tel:+31638903004" className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                <span>06-38903004</span>
              </a>
              <a href="mailto:info@schildersbedrijf040.nl" className="text-gray-700">
                info@schildersbedrijf040.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}