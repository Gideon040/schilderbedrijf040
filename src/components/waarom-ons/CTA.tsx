import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar om Samen te Werken?
          </h2>
          <p className="text-gray-600 mb-8">
            Laat ons uw volgende schilderproject verzorgen met de kwaliteit en service 
            die u verdient.
          </p>
          <Link to="/contact">
            <Button variant="primary" showArrow>
              Vraag een Offerte Aan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}