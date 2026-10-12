'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mkgovyya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch (error) {
      alert('Er is iets misgegaan. Probeer het later opnieuw.')
    }
  }

  return (
    <section id="hero" className="relative min-h-[60vh] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Lichttoren_Eindhoven_1_-_Cropped.jpg"
          alt="Lichttoren Eindhoven"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between py-12">
        {/* Hero Content */}
        <div className="text-white max-w-2xl mb-12 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-bold tracking-wide drop-shadow-lg">
            SCHILDERSBEDRIJF040. VAKKUNDIG SCHILDERWERK<br />
            <span className="eindhoven-text">IN EINDHOVEN</span>
          </h1>
          <p className="text-sm sm:text-base mb-8 text-gray-200 leading-relaxed">
            Schildersbedrijf040 is uw schildersbedrijf in Eindhoven voor binnenschilderwerk,
            buitenschilderwerk, behangen, lakwerk, latex spuiten en houtrot sanering.
            Eigenaar Jordy Jacobs werkt met Boonstoppel verf voor een
            resultaat dat jaren meegaat, beoordeeld met 5 sterren op Google.
            Vraag vandaag nog een gratis inspectie en vrijblijvende offerte aan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start Uw Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+31638903004" 
              className="btn-secondary text-white border-white hover:bg-white hover:text-primary"
            >
              <Phone className="mr-2 w-5 h-5" />
              BEL DIRECT
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-[400px] bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-8 transition-all duration-200 sm:w-full md:w-[480px]">
          <h3 className="text-2xl font-bebas text-white tracking-wider uppercase mb-6">
            Vraag een offerte aan
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-200"
                  placeholder="Uw naam"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-200"
                  placeholder="uw@email.nl"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-200"
                placeholder="+31 6 1234 5678"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2 text-white">
                Dienst
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full h-11 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-200"
                required
              >
                <option value="" className="text-text-dark">Selecteer een dienst</option>
                <option value="binnenschilderwerk" className="text-text-dark">Binnenschilderwerk</option>
                <option value="buitenschilderwerk" className="text-text-dark">Buitenschilderwerk</option>
                <option value="behangen" className="text-text-dark">Behangen</option>
                <option value="lakwerk" className="text-text-dark">Lakwerk</option>
                <option value="latex-spuiten" className="text-text-dark">Latex Spuiten</option>
                <option value="houtrot-sanering" className="text-text-dark">Houtrot Sanering</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[120px] px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white/15 transition-all duration-200 resize-vertical"
                rows={4}
                placeholder="Uw bericht"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-[#0061D1] active:bg-[#004FB2] text-white font-bebas text-lg uppercase tracking-wider transition-all duration-200 rounded-md hover:-translate-y-[1px] active:translate-y-0"
            >
              Verstuur Aanvraag
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}