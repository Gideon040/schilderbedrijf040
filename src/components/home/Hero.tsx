import React from 'react';
import { EstimateForm } from '../forms/EstimateForm';
import { Button } from '../common/Button';
import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center py-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://www.thisiseindhoven.com/getmedia/9991327e-5a5a-49ce-9fce-c978c0d5b6e1/Blob_Lichttoren_foto-Nadia-ten-Wolde.jpg?height=823&resizemode=force")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
              <Phone className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300">Professioneel Schilderwerk</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-white block">VAKKUNDIG SCHILDERWERK</span>
              <span className="text-primary-400 block">IN EINDHOVEN</span>
            </h1>
            <p className="text-gray-300 text-sm mb-8">
              Transformeer uw ruimte met onze professionele schilderdiensten.<br />
              5+ jaar ervaring in het leveren van hoogwaardige resultaten.
            </p>
            <div className="flex space-x-4">
              <Button to="/contact" variant="primary" showArrow>
                Start Uw Project
              </Button>
              <Button to="/projecten" variant="outline">
                Onze Projecten
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-md mx-auto w-full">
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}