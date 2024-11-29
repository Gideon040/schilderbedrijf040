import React from 'react';
import { Brush, Clock, Shield, ThumbsUp } from 'lucide-react';

export function QuoteRequest() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Over Ons Schildersbedrijf</h2>
            <p className="text-lg mb-8">
              Ons schildersbedrijf in Eindhoven draait om het leveren van de hoogste kwaliteit. 
              En dan bedoelen we niet alleen in ons (schilder)werk, maar ook in onze communicatie, 
              betrouwbaarheid en flexibiliteit.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">25+ Jaar Ervaring</h3>
                  <p className="text-sm text-gray-200">Expertise die telt</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Gecertificeerd</h3>
                  <p className="text-sm text-gray-200">Vakkundig werk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brush className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Totaalpakket</h3>
                  <p className="text-sm text-gray-200">Complete service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ThumbsUp className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Tevreden Klanten</h3>
                  <p className="text-sm text-gray-200">Bewezen kwaliteit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Direct een Offerte Aanvragen</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Type Dienst
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Selecteer een dienst</option>
                  <option value="binnen">Binnenschilderwerk</option>
                  <option value="buiten">Buitenschilderwerk</option>
                  <option value="behang">Behangwerk</option>
                  <option value="wrap">Wrappen</option>
                  <option value="latex">Latex Spuiten</option>
                  <option value="totaal">Totaalpakket</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Projectomschrijving
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Offerte Aanvragen
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}