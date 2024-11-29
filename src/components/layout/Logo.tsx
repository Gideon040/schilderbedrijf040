import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img 
      src="https://schildersbedrijf040.nl/wp-content/uploads/2023/02/schildersbedrijf040_logo.png" 
      alt="Schildersbedrijf040 Logo" 
      className={`h-12 w-auto ${className}`}
    />
  );
}