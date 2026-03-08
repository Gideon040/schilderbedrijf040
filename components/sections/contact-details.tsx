'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'TELEFOON',
    content: '06-36803004'
  },
  {
    icon: Mail,
    title: 'EMAIL',
    content: 'info@schildersbedrijf040.nl'
  },
  {
    icon: MapPin,
    title: 'ADRES',
    content: 'Jacob van Campenweg 25, 5624CD Eindhoven'
  },
  {
    icon: Clock,
    title: 'OPENINGSTIJDEN',
    content: ['Ma-Vr: 08:00 - 17:30', 'Za-Zo: Gesloten']
  }
]

export function ContactDetails() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-12">CONTACTGEGEVENS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 rounded-lg bg-accent-light"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bebas mb-3">{item.title}</h3>
                  {Array.isArray(item.content) ? (
                    item.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.0887565670387!2d5.4834!3d51.4334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d91b5579c39f%3A0x73bce9a1f4a3c91a!2sJacob%20van%20Campenweg%2025%2C%205624%20CD%20Eindhoven!5e0!3m2!1sen!2snl!4v1647870000000!5m2!1sen!2snl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}