import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Toast } from '../common/Toast';

export function EstimateForm() {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as const
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@schildersbedrijf040.nl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

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
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold text-white mb-6">
          Vraag een Gratis Offerte Aan
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Naam
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Telefoon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-white mb-1">
            Project Omschrijving
          </label>
          <textarea
            id="project"
            name="project"
            rows={4}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <Button type="submit" variant="primary" fullWidth showArrow>
          Verstuur Aanvraag
        </Button>
        
        <input type="hidden" name="_subject" value="Nieuwe offerte aanvraag via website" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
      </form>

      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </>
  );
}