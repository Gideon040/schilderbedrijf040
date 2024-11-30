import React, { createContext, useContext, useState } from 'react';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

interface ProjectContextType {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  getProject: (slug: string) => Project | undefined;
  getAllProjects: () => Project[];
}

// Testdata
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Een moderne portfolio website gebouwd met React en TypeScript',
    imageUrl: '/images/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com'
  },
  {
    id: '2',
    slug: 'blog-platform',
    title: 'Blog Platform',
    description: 'Een volledig functioneel blogplatform met CMS integratie',
    imageUrl: '/images/blog.jpg',
    technologies: ['Next.js', 'TypeScript', 'Decap CMS'],
    link: 'https://example.com/blog'
  }
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects] = useState<Project[]>(MOCK_PROJECTS);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  const getProject = (slug: string) => projects.find(project => project.slug === slug);
  const getAllProjects = () => projects;

  return (
    <ProjectContext.Provider value={{ 
      projects,
      isLoading,
      error,
      getProject,
      getAllProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}