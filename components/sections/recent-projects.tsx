'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

const projects = [
  {
    title: "BINNEN- EN BUITENSCHILDERWERK",
    location: "Eindhoven",
    service: "Complete Renovatie",
    image: "https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.55.12_amqj6v.jpg"
  },
  {
    title: "LATEX SPUITEN",
    location: "Blixembosch, Eindhoven",
    service: "Benedenverdieping",
    image: "https://res.cloudinary.com/dbtaisgda/image/upload/v1743873387/WhatsApp_Image_2025-03-27_at_08.02.10_b2hjuj.jpg"
  },
  {
    title: "BINNENWERK RESTARIA",
    location: "Oude Gracht, Eindhoven",
    service: "Houtrot Sanering",
    image: "https://res.cloudinary.com/dbtaisgda/image/upload/v1743873386/WhatsApp_Image_2025-03-27_at_07.54.37_htpaan.jpg"
  }
]

export function RecentProjects() {
  return (
    <section id="projecten" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="recente-projecten" className="text-4xl md:text-5xl font-bold mb-4">RECENTE PROJECTEN</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ontdek onze recent voltooide projecten en zie hoe wij ruimtes transformeren met vakkundig schilderwerk en oog voor detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href="/projecten"
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Project Image */}
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>
                
                {/* Title Overlay */}
                <h3 className="absolute top-4 left-4 text-xl font-bebas text-white">
                  {project.title}
                </h3>
                
                {/* Location Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
              </div>
              
              {/* Service Type */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.service}</p>
                <span className="text-primary font-bebas tracking-wider group-hover:translate-x-1 inline-flex items-center transition-all duration-300">
                  BEKIJK ONZE PROJECTEN →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/projecten"
            className="btn-primary inline-flex items-center group"
          >
            BEKIJK ALLE PROJECTEN
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
     </section>
  )
}