import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  imageUrl: string;
  beforeImage: string;
  afterImage: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <img
          src={isHovered ? project.afterImage : project.beforeImage}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{project.type}</span>
          <span className="text-primary-500 text-sm font-heading uppercase hover:text-primary-600 transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center">
            Meer Details →
          </span>
        </div>
      </div>
    </div>
  );
}