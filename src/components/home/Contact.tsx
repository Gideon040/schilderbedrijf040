import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Button } from '../common/Button';
import { Toast } from '../common/Toast';

export function Contact() {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as const
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://formsubmit.co/info@schildersbedrijf040.nl', {
        method: 'POST',
        body: formData,
      });
      setToast({
        show: true,
        message: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.',
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Neem contact met ons op voor een vrijblijvende offerte
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold">Telefoon</p>
                  <a href="tel:+31612345678" className="text-primary-500">06-12345678</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@schildersbedrijf040.nl" className="text-primary-500">
                    info@schildersbedrijf040.nl
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold">Adres</p>
                  <p>Eindhovenseweg 123</p>
                  <p>5611 AB Eindhoven</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold">Openingstijden</p>
                  <p>Ma-Vr: 08:00 - 17:00</p>
                  <p>Za-Zo: Gesloten</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Stuur ons een bericht</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <Button type="submit" variant="primary" fullWidth showArrow>
                Verstuur Bericht
              </Button>

              <input type="hidden" name="_subject" value="Nieuw bericht via contactformulier" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
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