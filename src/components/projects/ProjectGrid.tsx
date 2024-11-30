import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../home/ProjectCard';
import { useProjectContext } from '../../contexts/ProjectContext';

export function ProjectGrid() {
  const { activeCategory, projects, isLoading, error } = useProjectContext();

  if (isLoading) return (
    <div className="py-20 text-center">
      <p>Projecten laden...</p>
    </div>
  );

  if (error) return (
    <div className="py-20 text-center text-red-600">
      <p>Error: {error}</p>
    </div>
  );

  const filteredProjects = activeCategory === 'Alle Projecten'
    ? projects
    : projects.filter(project => project.type === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <p className="text-center">Geen projecten gevonden voor deze categorie.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/projecten/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}