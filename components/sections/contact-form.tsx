'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { bronpagina, trackEvent } from '@/lib/tracking'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefoon',
    value: '06-38903004'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@schildersbedrijf040.nl'
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Straatsburglaan 26, 5627DB Eindhoven'
  },
  {
    icon: Clock,
    label: 'Openingstijden',
    value: ['Ma-Vr: 08:00 - 17:30', 'Za-Zo: Gesloten']
  }
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xdkalqlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, bronpagina: bronpagina(), formulier: 'contact' })
      })
      
      if (response.ok) {
        trackEvent('generate_lead', { form: 'contact' })
        alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch (error) {
      alert('Er is iets misgegaan. Probeer het later opnieuw.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="contact-opnemen" className="text-4xl md:text-5xl font-bold mb-4">CONTACT</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Neem gerust contact met ons op voor een vrijblijvende offerte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="bg-accent-light rounded-xl p-8">
            <h3 className="text-2xl font-bebas mb-8">CONTACTGEGEVENS</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{info.label}</p>
                    {Array.isArray(info.value) ? (
                      info.value.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bebas mb-8">STUUR ONS EEN BERICHT</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px] px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-vertical"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full group"
              >
                VERSTUUR BERICHT
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}