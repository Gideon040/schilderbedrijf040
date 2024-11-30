import React, { useState } from 'react';
import { Button } from '../common/Button';

const categories = [
  'Algemeen',
  'Diensten',
  'Werkwijze',
  'Kosten',
  'Garantie',
  'Planning',
];

export function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState('Algemeen');

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'secondary'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}