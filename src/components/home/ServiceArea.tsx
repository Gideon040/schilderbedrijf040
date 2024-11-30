import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Eindhoven en omstreken',
  'Helmond en omstreken',
  'Den Bosch en omstreken',
  'Tilburg en omstreken',
  'Uden en omstreken',
  'Weert en omstreken',
  'Valkenswaard en omstreken',
  'Veldhoven en omstreken',
  'Boxtel en omstreken',
  'Deurne en omstreken',
];

export function ServiceArea() {
  return (
    <section id="werkgebied" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Ons Werkgebied</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Wij zijn actief in Eindhoven en omstreken, tot wel 50 kilometer in de regio
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39813.2542025567!2d5.4534!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d90176aa5579%3A0x8ef7996b9a88094!2sEindhoven!5e0!3m2!1sen!2snl!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Serviceregio's</h3>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}