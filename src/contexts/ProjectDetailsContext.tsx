import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProjectDetails {
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

interface ProjectDetailsContextType {
 projects: ProjectDetails[];
 isLoading: boolean;
 error: string | null;
 getProjectDetails: (id: number) => ProjectDetails | undefined;
 getAllProjects: () => ProjectDetails[];
 getProjectsByType: (type: string) => ProjectDetails[];
 getRelatedProjects: (currentId: number, type: string) => ProjectDetails[];
}

const ProjectDetailsContext = createContext<ProjectDetailsContextType | undefined>(undefined);

export function ProjectDetailsProvider({ children }: { children: React.ReactNode }) {
 const [projects, setProjects] = useState<ProjectDetails[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
   const fetchProjects = async () => {
     try {
       setIsLoading(true);
       const response = await fetch('/content/projects/index.json');
       if (!response.ok) throw new Error('Failed to fetch projects');
       const data = await response.json();
       setProjects(data);
     } catch (err) {
       setError(err instanceof Error ? err.message : 'Er is een fout opgetreden');
     } finally {
       setIsLoading(false);
     }
   };

   fetchProjects();
 }, []);

 const getProjectDetails = (id: number) => projects.find(project => project.id === id);
 const getAllProjects = () => projects;
 const getProjectsByType = (type: string) => 
   projects.filter(project => project.type === type);
 const getRelatedProjects = (currentId: number, type: string) => 
   projects.filter(project => project.id !== currentId && project.type === type).slice(0, 3);

 return (
   <ProjectDetailsContext.Provider value={{ 
     projects,
     isLoading,
     error,
     getProjectDetails, 
     getAllProjects, 
     getProjectsByType,
     getRelatedProjects 
   }}>
     {children}
   </ProjectDetailsContext.Provider>
 );
}

// Voeg deze hook toe aan het einde van het bestand
export function useProjectDetails() {
 const context = useContext(ProjectDetailsContext);
 if (context === undefined) {
   throw new Error('useProjectDetails must be used within a ProjectDetailsProvider');
 }
 return context;
}