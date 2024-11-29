import React, { createContext, useContext, useState, useEffect } from 'react';
import matter from 'gray-matter'

interface ProjectData {
  title: string;
  description: string;
  image: string;
  content: string;
  // andere velden die je nodig hebt
}

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

const projectDetails: Record<number, ProjectDetails> = {
  1: {
    id: 1,
    title: 'villa niet villa niet',
    location: 'nee Centrum',
    type: 'Buitenschilderwerk',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    completionDate: 'Maart 2024',
    projectManager: 'Jan van der Steen',
    description: 'Complete renovatie van een karakteristieke villa in het centrum van Eindhoven.',
    workPerformed: [
      'Complete voorbereiding en reiniging',
      'Houtrot reparatie',
      'Schilderwerk buitenzijde',
      'Kozijnrenovatie'
    ],
    materialsUsed: [
      'Sigma Coating systemen',
      'Repair Care producten',
      'Premium aflakken'
    ],
    result: 'Een volledig gerenoveerde villa met behoud van authentieke details.'
  },
  2: {
    id: 2,
    title: 'Modern Appartement',
    location: 'Strijp-S',
    type: 'Binnenschilderwerk',
    imageUrl: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80',
    completionDate: 'Februari 2024',
    projectManager: 'Peter de Vries',
    description: 'Modern interieur schilderwerk voor een nieuw appartement in Strijp-S.',
    workPerformed: [
      'Wandvoorbereiding',
      'Latex spuitwerk',
      'Kozijnen lakken',
      'Plafondafwerking'
    ],
    materialsUsed: [
      'Sikkens producten',
      'Sigma latex',
      'Hoogglans lakken'
    ],
    result: 'Een strak en modern afgewerkt appartement met perfecte details.'
  },
  // Add more projects as needed...
};

interface ProjectDetailsContextType {
  getProjectDetails: (id: number) => ProjectDetails | undefined;
  getAllProjects: () => ProjectDetails[];
  getProjectsByType: (type: string) => ProjectDetails[];
  getRelatedProjects: (currentId: number, type: string) => ProjectDetails[];
}

const ProjectDetailsContext = createContext<ProjectDetailsContextType | undefined>(undefined);

export const ProjectDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cmsProjects, setCmsProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const projectsData = await response.json();
        setCmsProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    loadProjects();
  }, []);

  const getProjectDetails = (id: number) => projectDetails[id];
  
  const getAllProjects = () => {
    const hardcodedProjects = Object.values(projectDetails);
    return [...hardcodedProjects, ...cmsProjects.map((project, index) => ({
      id: hardcodedProjects.length + index + 1,
      title: project.title,
      location: '',  // of een default waarde
      type: 'Overig', // of een default waarde
      imageUrl: project.image,
      beforeImage: '',
      afterImage: '',
      completionDate: '',
      projectManager: '',
      description: project.description,
      workPerformed: [],
      materialsUsed: [],
      result: project.content
    }))];
  };
  
  const getProjectsByType = (type: string) => 
    Object.values(projectDetails).filter(project => project.type === type);
  
  const getRelatedProjects = (currentId: number, type: string) => 
    Object.values(projectDetails)
      .filter(project => project.id !== currentId && project.type === type)
      .slice(0, 3);

  return (
    <ProjectDetailsContext.Provider value={{ 
      getProjectDetails, 
      getAllProjects, 
      getProjectsByType,
      getRelatedProjects 
    }}>
      {children}
    </ProjectDetailsContext.Provider>
  );
}

export function useProjectDetails() {
  const context = useContext(ProjectDetailsContext);
  if (context === undefined) {
    throw new Error('useProjectDetails must be used within a ProjectDetailsProvider');
  }
  return context;
}
