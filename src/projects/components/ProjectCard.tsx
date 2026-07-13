'use client';

import { Project } from '../interfaces/Project';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader title={project.title} />
      <CardContent sx={{ flex: 1 }}>
        <Typography>{project.description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', mb: 1 }}>
        {project.github && (
          <Button variant="outlined" href={project.github} target="_blank">
            Github
          </Button>
        )}
        {project.learn && (
          <Button variant="contained" href={project.learn} target="_blank">
            Visit Site
          </Button>
        )}
        {project.play && (
          <Button variant="contained" href={project.play} target="_blank">
            Play Game
          </Button>
        )}
        {project.page && (
          <Button variant="contained">
            <Link href={project.page} target="_blank">
              Visit Site
            </Link>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
