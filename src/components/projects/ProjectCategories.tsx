import React from 'react';
import { Button } from '../common/Button';
import { useProjectContext } from '../../contexts/ProjectContext';

const categories = [
  'Alle Projecten',
  'Binnenschilderwerk',
  'Buitenschilderwerk',
  'Behangwerk',
  'Lakwerk',
  'Houtrot Sanering',
];

export function ProjectCategories() {
  const { activeCategory, setActiveCategory } = useProjectContext();

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