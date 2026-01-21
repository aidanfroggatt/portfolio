import { createContext, ReactNode, useContext } from 'react';
import type { Project } from '~/db/schema';

const ProjectContext = createContext<Project | null>(null);

export const ProjectProvider = ({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) => {
  return <ProjectContext.Provider value={project}>{children}</ProjectContext.Provider>;
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
