import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo isLinked={false} className="brightness-0 invert" />
            <p className="mt-4 text-gray-400">
              Professioneel schilderwerk voor particulieren en bedrijven in Eindhoven en omgeving.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li><a href="/diensten/binnenschilderwerk" className="text-gray-400 hover:text-white">Binnenschilderwerk</a></li>
              <li><a href="/diensten/buitenschilderwerk" className="text-gray-400 hover:text-white">Buitenschilderwerk</a></li>
              <li><a href="/diensten/behangen" className="text-gray-400 hover:text-white">Behangwerk</a></li>
              <li><a href="/diensten/houtrot-sanering" className="text-gray-400 hover:text-white">Houtrot Sanering</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Tel: 06-38903004</li>
              <li className="text-gray-400">info@schildersbedrijf040.nl</li>
              <li className="text-gray-400">Jacob van Campenweg 22</li>
              <li className="text-gray-400">5624CD Eindhoven</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Volg Ons</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Schildersbedrijf040-100064851917826/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/schildersbedrijf040/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Schildersbedrijf040. KvK: 81740999
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Algemene Voorwaarden</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}