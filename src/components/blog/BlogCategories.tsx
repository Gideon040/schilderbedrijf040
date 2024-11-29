import React from 'react';
import { Button } from '../common/Button';
import { useBlogContext } from '../../contexts/BlogContext';

const categories = [
  'Alle Regio\'s',
  'Eindhoven',
  'Veldhoven',
  'Nuenen',
  'Best',
  'Son en Breugel',
  'Geldrop',
];

export function BlogCategories() {
  const { activeCategory, setActiveCategory } = useBlogContext();

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