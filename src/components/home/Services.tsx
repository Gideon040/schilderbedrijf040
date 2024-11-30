import React from 'react';
import { ServiceGrid } from './services/ServiceGrid';

export function Services() {
  return (
    <section id="diensten" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Onze Diensten</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Van binnenschilderwerk tot complete renovaties - wij zijn uw partner voor elk schilderproject
        </p>
        <ServiceGrid />
      </div>
    </section>
  );
}