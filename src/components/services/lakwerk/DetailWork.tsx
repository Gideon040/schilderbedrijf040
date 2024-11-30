import React from 'react';

const applications = [
  'Deuren en kozijnen',
  'Trappen en plinten',
  'Radiatoren',
  'Maatwerk oplossingen',
];

export function DetailWork() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="flex flex-col space-y-2 text-4xl font-bold mb-6">
              <span className="text-gray-900">Lakwerk &</span>
              <span className="text-primary-500">Details</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Ons specialisme in spuittechniek komt optimaal tot zijn recht bij gedetailleerd 
              lakwerk. Van trappen tot kozijnen - we garanderen een perfecte afwerking die jaren 
              meegaat.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Toepassingen:</h3>
              <ul className="space-y-3">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <span className="text-gray-600">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
              alt="Detailwerk"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}