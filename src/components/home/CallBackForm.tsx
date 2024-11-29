import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Phone } from 'lucide-react';
import { Toast } from '../common/Toast';

export function CallBackForm() {
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
        message: 'Bedankt! We bellen u terug op het aangegeven tijdstip.',
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
    <section className="relative py-8">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-primary-300">Liever telefonisch contact?</span>
              </div>
              <h2 className="text-4xl font-bold mb-3">
                BEL MIJ TERUG<br />
                <span className="text-primary-400">DOEN WE GRAAG!</span>
              </h2>
              <p className="text-gray-300 text-sm mb-2">
                Komt het beter uit als we je terugbellen op een moment dat het jou uitkomt? Geen probleem!
              </p>
              <p className="text-gray-300 text-sm">
                Laat via het formulier je telefoonnummer achter en we bellen je graag terug.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="callback-name" className="block text-sm font-medium text-white mb-1">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="callback-name"
                      name="name"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="callback-phone" className="block text-sm font-medium text-white mb-1">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="callback-phone"
                      name="phone"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="callback-email" className="block text-sm font-medium text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="callback-email"
                    name="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="callback-date" className="block text-sm font-medium text-white mb-1">
                      Gewenste datum
                    </label>
                    <input
                      type="date"
                      id="callback-date"
                      name="callback_date"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="callback-time" className="block text-sm font-medium text-white mb-1">
                      Voorkeurstijd
                    </label>
                    <select
                      id="callback-time"
                      name="callback_time"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:ring-primary-500 focus:border-primary-500 [&>option]:text-gray-900"
                      required
                    >
                      <option value="">Selecteer tijd</option>
                      <option value="morning">09:00 - 12:00</option>
                      <option value="afternoon">12:00 - 17:00</option>
                    </select>
                  </div>
                </div>
                
                <Button type="submit" variant="primary" fullWidth showArrow>
                  VERSTUREN
                </Button>

                <input type="hidden" name="_subject" value="Terugbelverzoek via website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
              </form>
            </div>
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