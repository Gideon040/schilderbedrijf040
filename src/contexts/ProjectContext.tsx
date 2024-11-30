import React, { createContext, useContext, useState } from 'react';

interface ProjectContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('Alle Projecten');

  return (
    <ProjectContext.Provider value={{ activeCategory, setActiveCategory }}>
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