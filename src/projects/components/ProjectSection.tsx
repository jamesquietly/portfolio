'use client';

import { Box, Divider, Typography } from '@mui/material';
import { Project } from '@/src/projects/interfaces/Project';
import ProjectCard from './ProjectCard';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
  return (
    <Box className="flex flex-col gap-4">
      <Typography variant="h4">{title}</Typography>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Box>
  );
};

export default ProjectSection;
