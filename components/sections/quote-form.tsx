'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { bronpagina, trackEvent } from '@/lib/tracking'

const buildingTypes = [
  'Appartement',
  'Tussenwoning',
  'Hoekwoning',
  'Twee-onder-een-kap',
  'Vrijstaande woning',
  'Bedrijfspand'
]

export function QuoteForm() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [formData, setFormData] = useState({
    buildingType: '',
    propertyType: '',
    services: {
      binnenschilderwerk: false,
      buitenschilderwerk: false,
      latexSpuiten: false,
      behang: false,
      traditioneelStucwerk: false,
      exclusiefStucdesign: false
    },
    name: '',
    email: '',
    comments: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const formattedData = {
        ...formData,
        startDate: startDate ? format(startDate, 'dd-MM-yyyy') : null,
        endDate: endDate ? format(endDate, 'dd-MM-yyyy') : null,
        services: Object.entries(formData.services)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(', ')
      }

      const response = await fetch('https://formspree.io/f/mkgovyya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formattedData, bronpagina: bronpagina(), formulier: 'offerte' })
      })
      
      if (response.ok) {
        trackEvent('generate_lead', { form: 'offerte' })
        alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
        setFormData({
          buildingType: '',
          propertyType: '',
          services: {
            binnenschilderwerk: false,
            buitenschilderwerk: false,
            latexSpuiten: false,
            behang: false,
            traditioneelStucwerk: false,
            exclusiefStucdesign: false
          },
          name: '',
          email: '',
          comments: ''
        })
        setStartDate(undefined)
        setEndDate(undefined)
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch (error) {
      alert('Er is iets misgegaan. Probeer het later opnieuw.')
    }
  }

  return (
    <section id="quote-form" className="py-24 bg-accent-light">
      <div className="container max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vraag direct een offerte aan
            </h2>
            <p className="text-gray-600">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">Type woning</label>
                <select
                  value={formData.buildingType}
                  onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                >
                  <option value="">Selecteer type woning</option>
                  {buildingTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Gewenste startdatum</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full h-11 px-4 rounded-md border border-gray-300 text-left focus:border-primary focus:ring-2 focus:ring-primary/20",
                        !startDate && "text-gray-500"
                      )}
                    >
                      {startDate ? format(startDate, "dd-MM-yyyy") : "Selecteer datum"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50 inline-block float-right mt-1" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      locale={nl}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium mb-2">Gewenste diensten</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData.services).map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setFormData({
                        ...formData,
                        services: {
                          ...formData.services,
                          [key]: e.target.checked
                        }
                      })}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-700">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">Naam</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Opmerkingen</label>
              <textarea
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full min-h-[120px] px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-vertical"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bebas text-lg tracking-wider rounded-md transition-all duration-200 group"
            >
              Gratis offerte aanvragen
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}