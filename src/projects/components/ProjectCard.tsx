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
import { GitHub, Web, PlayArrow } from '@mui/icons-material';

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
        height: '100%',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
        border: 1,
        borderColor: 'divider',
      }}
    >
      <CardHeader title={project.title} />
      <CardContent sx={{ flex: 1 }}>
        <Typography>{project.description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', mb: 1 }}>
        {project.github && (
          <Button
            variant="outlined"
            href={project.github}
            target="_blank"
            startIcon={<GitHub />}
          >
            GitHub
          </Button>
        )}
        {project.learn && (
          <Button
            variant="contained"
            href={project.learn}
            target="_blank"
            startIcon={<Web />}
          >
            Visit Site
          </Button>
        )}
        {project.play && (
          <Button
            variant="contained"
            href={project.play}
            target="_blank"
            startIcon={<PlayArrow />}
          >
            Play Game
          </Button>
        )}
        {project.page && (
          <Button
            variant="contained"
            component={Link}
            href={project.page}
            target="_blank"
            startIcon={<Web />}
          >
            Visit Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
