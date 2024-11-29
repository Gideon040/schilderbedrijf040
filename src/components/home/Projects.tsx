import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { Button } from '../common/Button';

const projects = [
  {
    id: 1,
    title: 'Villa Renovatie',
    location: 'Eindhoven Centrum',
    type: 'Buitenschilderwerk',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Modern Appartement',
    location: 'Strijp-S',
    type: 'Binnenschilderwerk',
    imageUrl: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Kantoorpand',
    location: 'High Tech Campus',
    type: 'Totaalproject',
    imageUrl: 'https://images.unsplash.com/photo-1575379774013-9707f2115d5d?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1575379774013-9707f2115d5d?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1575379774013-9707f2115d5d?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Monumentaal Pand',
    location: 'Gestel',
    type: 'Restauratie',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Woonkamer Renovatie',
    location: 'Woensel',
    type: 'Behangwerk',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Nieuwbouwproject',
    location: 'Meerhoven',
    type: 'Totaalproject',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80',
  },
];

export function Projects() {
  return (
    <section id="projecten" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Recente Projecten</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ontdek onze recent voltooide projecten en zie hoe wij ruimtes transformeren
          met vakkundig schilderwerk en oog voor detail.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projecten/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projecten">
            <Button variant="primary" showArrow>
              Bekijk Alle Projecten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}