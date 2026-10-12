'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone, Mail, Star, HelpCircle, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: 'Binnenschilderwerk', href: '/diensten/binnenschilderwerk' },
  { name: 'Buitenschilderwerk', href: '/diensten/buitenschilderwerk' },
  { name: 'Behangen', href: '/diensten/behangen' },
  { name: 'Lakwerk', href: '/diensten/lakwerk' },
  { name: 'Latex Spuiten', href: '/diensten/latex-spuiten' },
  { name: 'Houtrot Sanering', href: '/diensten/houtrot-sanering' }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#001B32] text-white py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              <span>Google ★★★★★</span>
            </div>
            <a href="tel:+31638903004" className="flex items-center text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              <span>06-38903004</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="flex items-center text-sm hover:text-primary transition-colors">
              <HelpCircle className="w-4 h-4 mr-1" />
              <span>FAQ</span>
            </Link>
            <a href="mailto:info@schildersbedrijf040.nl" className="flex items-center text-sm hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@schildersbedrijf040.nl</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        'sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm',
        isScrolled ? 'py-2' : 'py-4'
      )}>
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="https://res.cloudinary.com/dbtaisgda/image/upload/v1739556474/pnex6bboplimq3s41db8.png"
              alt="Schildersbedrijf040 Logo"
              fill
              sizes="192px"
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-text-dark hover:text-primary transition-colors font-sans text-sm tracking-normal flex items-center">
                  Diensten
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white rounded-md shadow-lg border border-gray-200">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild className="focus:bg-gray-100">
                      <Link
                        href={service.href}
                        className="w-full px-4 py-2 text-gray-700 hover:text-primary font-sans text-sm"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/projecten" className="text-text-dark hover:text-primary transition-colors font-sans text-sm">
                Projecten
              </Link>
              <Link href="/blog" className="text-text-dark hover:text-primary transition-colors font-sans text-sm">
                Blog
              </Link>
              <Link href="/over-ons" className="text-text-dark hover:text-primary transition-colors font-sans text-sm">
                Over Ons
              </Link>
              <Link href="/contact" className="text-text-dark hover:text-primary transition-colors font-sans text-sm">
                Contact
              </Link>
            </nav>
            
            <Link href="/contact" className="btn-primary">
              Gratis offerte aanvragen
            </Link>
          </div>

          <button 
            className="md:hidden"
            aria-label={isMobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[64px] bg-white z-40 md:hidden">
            <nav className="container py-8 flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="font-sans text-sm text-gray-600">Diensten</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-4 py-2 text-text-dark hover:text-primary transition-colors font-sans text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link 
                href="/projecten"
                className="text-text-dark hover:text-primary transition-colors font-sans text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projecten
              </Link>
              <Link 
                href="/blog"
                className="text-text-dark hover:text-primary transition-colors font-sans text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/over-ons"
                className="text-text-dark hover:text-primary transition-colors font-sans text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Over Ons
              </Link>
              <Link 
                href="/contact"
                className="text-text-dark hover:text-primary transition-colors font-sans text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact" className="btn-primary w-full text-center">
                  Gratis offerte aanvragen
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}