import React from 'react';
import { MapPin, Calendar, User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useProjectDetails } from '../../contexts/ProjectDetailsContext';

export function ProjectDetail() {
  const { id } = useParams();
  const { getProjectDetails } = useProjectDetails();
  const project = getProjectDetails(Number(id));

  if (!project) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Project niet gevonden</h1>
            <p className="text-gray-600">Het opgevraagde project bestaat niet of is niet meer beschikbaar.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary-500" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-500" />
              <span>Voltooid: {project.completionDate}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-primary-500" />
              <span>Projectleider: {project.projectManager}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Voor</h2>
              <img
                src={project.beforeImage}
                alt="Voor renovatie"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Na</h2>
              <img
                src={project.afterImage}
                alt="Na renovatie"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="prose max-w-none">
            <h2>Projectbeschrijving</h2>
            <p>{project.description}</p>

            <h3>Uitgevoerde Werkzaamheden</h3>
            <ul>
              {project.workPerformed.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>

            <h3>Gebruikte Materialen</h3>
            <ul>
              {project.materialsUsed.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>

            <h3>Resultaat</h3>
            <p>{project.result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}