import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { Phone } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
            <Phone className="w-5 h-5 text-primary-500" />
            <span className="text-primary-500">Nog vragen?</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Staat uw vraag er niet tussen?
          </h2>
          <p className="text-gray-600 mb-8">
            Neem gerust contact met ons op. We helpen u graag verder met al uw vragen 
            over onze schilderdiensten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" showArrow>
                Contact Opnemen
              </Button>
            </Link>
            <Link to="/diensten/binnenschilderwerk">
              <Button variant="primary">
                Bekijk Onze Diensten
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}