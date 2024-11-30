import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Button } from '../common/Button';

export function SocialShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Volg Onze Projecten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dagelijkse updates en inspiratie op social media
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Phone Mockups */}
          <div className="relative order-2 md:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl -z-10" />
            
            {/* Instagram Phone */}
            <div className="relative inline-block transform -rotate-6 translate-x-8">
              <div className="w-64 h-[500px] bg-white rounded-[3rem] shadow-xl p-3 border-8 border-gray-800">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80" 
                    alt="Instagram post" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">schildersbedrijf040</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Facebook Phone */}
            <div className="relative inline-block transform rotate-6 -translate-x-8 translate-y-12">
              <div className="w-64 h-[500px] bg-white rounded-[3rem] shadow-xl p-3 border-8 border-gray-800">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" 
                    alt="Facebook post" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Facebook className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">Schildersbedrijf040</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="order-1 md:order-2 space-y-12">
            <div className="relative">
              <div className="flex items-center space-x-6 mb-6">
                <Instagram className="w-8 h-8 text-primary-500" />
                <div>
                  <h3 className="text-2xl font-bold">Instagram</h3>
                  <p className="text-gray-600">3K+ volgers</p>
                </div>
              </div>
              <div className="pl-14">
                <p className="text-gray-600 mb-4">
                  Dagelijkse inspiratie en behind-the-scenes van onze projecten. 
                  Volg ons voor de mooiste transformaties!
                </p>
                <Button variant="primary" showArrow>
                  Volg op Instagram
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-6 mb-6">
                <Facebook className="w-8 h-8 text-primary-500" />
                <div>
                  <h3 className="text-2xl font-bold">Facebook</h3>
                  <p className="text-gray-600">2.5K+ volgers</p>
                </div>
              </div>
              <div className="pl-14">
                <p className="text-gray-600 mb-4">
                  Voor en na foto's, klantervaringen en de laatste updates 
                  over onze projecten in Eindhoven en omgeving.
                </p>
                <Button variant="primary" showArrow>
                  Volg op Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}