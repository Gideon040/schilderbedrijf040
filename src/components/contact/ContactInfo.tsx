import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Telefoon',
      info: '06-38903004',
      link: 'tel:+31638903004',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@schildersbedrijf040.nl',
      link: 'mailto:info@schildersbedrijf040.nl',
    },
    {
      icon: MapPin,
      title: 'Adres',
      info: 'Jacob van Campenweg 22, 5624CD Eindhoven',
      link: 'https://maps.google.com/?q=Jacob+van+Campenweg+22,+5624CD+Eindhoven',
    },
    {
      icon: Clock,
      title: 'Openingstijden',
      info: 'Ma-Vr: 08:00 - 17:00\nZa-Zo: Gesloten',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contactgegevens</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  <detail.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{detail.title}</h3>
                  {detail.link ? (
                    <a 
                      href={detail.link}
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                      target={detail.icon === MapPin ? "_blank" : undefined}
                      rel={detail.icon === MapPin ? "noopener noreferrer" : undefined}
                    >
                      {detail.info}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{detail.info}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <span className="font-semibold">KVK-nummer:</span> 81740999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}