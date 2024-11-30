import React, { createContext, useContext, useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  imageUrl: string;
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  projectManager: string;
  description: string;
  workPerformed: string[];
  materialsUsed: string[];
  result: string;
}

interface ProjectContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isLoading: boolean;
  error: string | null;
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('Alle Projecten');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/content/projects/index.json');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ 
      activeCategory, 
      setActiveCategory,
      isLoading,
      error,
      projects
    }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}