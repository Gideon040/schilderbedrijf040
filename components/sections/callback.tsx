'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Callback() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mkgovyya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, date: date ? format(date, 'dd-MM-yyyy') : null })
      })
      
      if (response.ok) {
        alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredTime: ''
        })
        setDate(undefined)
      } else {
        alert('Er is iets misgegaan. Probeer het later opnieuw.')
      }
    } catch (error) {
      alert('Er is iets misgegaan. Probeer het later opnieuw.')
    }
  }

  return (
    <section id="terugbellen" className="relative py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/binnenschilderwerk-woonkamer-met-tuindeuren.jpg"
          alt="Woonkamer met strak geschilderde wanden en plafond na binnenschilderwerk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-lg mb-4 block opacity-90">Liever telefonisch contact?</span>
            <h2 id="bel-mij-terug" className="text-4xl md:text-5xl font-bold mb-2">
              BEL MIJ TERUG
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#0088FF]">
              DOEN WE GRAAG!
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Komt het beter uit als wij u terugbellen op een moment dat het u uitkomt? Geen probleem!
              </p>
              <p>
                Laat via het formulier uw telefoonnummer achter en wij bellen u graag terug.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Gewenste datum
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-left focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20",
                          !date && "text-white/50",
                          date && "text-white"
                        )}
                      >
                        {date ? format(date, "dd-MM-yyyy") : "Selecteer datum"}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50 inline-block float-right mt-1" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={nl}
                        className="rounded-md border bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
                    Voorkeurstijd
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full h-12 px-4 rounded-md bg-white/10 border border-white/20 text-white focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                    required
                  >
                    <option value="" className="text-gray-900">Selecteer tijd</option>
                    <option value="ochtend" className="text-gray-900">Ochtend (9:00 - 12:00)</option>
                    <option value="middag" className="text-gray-900">Middag (12:00 - 15:00)</option>
                    <option value="namiddag" className="text-gray-900">Namiddag (15:00 - 17:00)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#0088FF] hover:bg-[#0077E6] text-white font-bebas text-lg tracking-wider rounded-md transition-all duration-200 group"
              >
                VERSTUREN
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}