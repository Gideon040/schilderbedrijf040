import React from 'react';
import { ServiceCard } from './ServiceCard';
import { PaintBucket, Home, Wallpaper, Brush, Paintbrush2, Wrench } from 'lucide-react';

const services = [
  {
    icon: PaintBucket,
    title: 'Binnenschilderwerk',
    description: 'Bent u de kleuren op uw muren zat? Of is uw woning gewoon toe aan een opfrisbeurt? Onze specialisten komen graag bij u langs om uw binnenmuren te transformeren.',
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80',
    link: '/diensten/binnenschilderwerk',
  },
  {
    icon: Home,
    title: 'Buitenschilderwerk',
    description: 'Bij buitenschilderwerk spelen verschillende aspecten een rol, zoals de verschillende ondergronden en weersomstandigheden. Onze specialisten weten als geen ander hoe ze hier rekening mee moeten houden.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    link: '/diensten/buitenschilderwerk',
  },
  {
    icon: Wallpaper,
    title: 'Behangen',
    description: 'Behangen is echt precisiewerk. Gelukkig hebben onze mensen dit kunstje helemaal in de vingers. Wij kunnen elke wand behangen, bijvoorbeeld met een mooi sierbehang of met renovlies.',
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80',
    link: '/diensten/behangen',
  },
  {
    icon: Brush,
    title: 'Lakwerk',
    description: 'Voor gedetailleerd lakwerk komt onze expertise optimaal tot zijn recht. Van trappen tot kozijnen - we garanderen een perfecte afwerking die jaren meegaat.',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80',
    link: '/diensten/lakwerk',
  },
  {
    icon: Paintbrush2,
    title: 'Latex Spuiten',
    description: 'Zijn uw wanden of plafonds toe aan een laagje verf? Denk dan ook eens aan het spuiten van latexverf in plaats van rollen! Dit is een geweldige manier om snel en streeploos uw muren op te laten frissen.',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    link: '/diensten/latex-spuiten',
  },
  {
    icon: Wrench,
    title: 'Houtrot Sanering',
    description: 'Wij zijn gespecialiseerd in het herstellen en saneren van houtrot. Met onze expertise en hoogwaardige materialen zorgen we ervoor dat uw houtwerk weer in optimale conditie komt.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    link: '/diensten/houtrot-sanering',
  },
];

export function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
        />
      ))}
    </div>
  );
}