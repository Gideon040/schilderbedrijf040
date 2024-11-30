import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Toast } from '../common/Toast';

export function ContactForm() {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as const
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/info@schildersbedrijf040.nl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setToast({
        show: true,
        message: 'Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.',
        type: 'success'
      });
      e.currentTarget.reset();
    } catch (error) {
      setToast({
        show: true,
        message: 'Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.',
        type: 'error'
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Ben jij er klaar voor om binnen 1 minuut een offerte aan te vragen?
              </h2>
              <p className="text-gray-600">
                Dit is hoe het werkt! Vraag geheel gratis en vrijblijvend een offerte aan en weet binnen 1 minuut al waar je aan toe bent. 
                Kies je pakketvorm en vul het aantal vierkante meters in per pakketvorm. Heb je een plattegrond ter verduidelijking? 
                Deel die dan ook gelijk zodat we een nog betere offerte kunnen maken. Ready? Let's go!
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Soort bouw
                  </label>
                  <select 
                    name="building_type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Selecteer soort bouw</option>
                    <option value="nieuwbouw">Nieuwbouw (Jonger dan 2 jaar)</option>
                    <option value="bestaand">Bestaande bouw (Ouder dan 2 jaar)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type woning
                  </label>
                  <select 
                    name="house_type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Selecteer type woning</option>
                    <option value="huis">Huis</option>
                    <option value="appartement">Appartement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gewenste diensten (meerdere keuze mogelijk)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Binnenschilderwerk',
                    'Buitenschilderwerk',
                    'Latex spuiten',
                    'Behang',
                    'Traditioneel stucwerk',
                    'Exclusief stucdesign'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        name="services[]" 
                        value={service}
                        className="rounded border-gray-300 text-primary-500 focus:ring-primary-500" 
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gewenste startdatum
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gewenste opleverdatum
                  </label>
                  <input
                    type="date"
                    name="end_date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Opmerkingen
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" variant="primary" showArrow>
                  Verstuur Aanvraag
                </Button>
              </div>

              <input type="hidden" name="_subject" value="Nieuwe offerte aanvraag via website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />
            </form>
          </div>
        </div>
      </div>

      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </section>
  );
}