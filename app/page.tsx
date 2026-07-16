import { CalPolyProjects, UnityProjects, WebProjects } from "@/src/projects/constants/ProjectList";
import ProjectSection from "@/src/projects/components/ProjectSection";
import { IconButton, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <Typography variant="h2">James Ly</Typography>
          <Typography variant="h6">Software Engineer</Typography>
          <div className="mt-2">
            <IconButton href="mailto:jamesquietly@gmail.com" target="_blank">
              <Email sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton href="https://github.com/jamesquietly" target="_blank">
              <GitHub sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/jamesly3" target="_blank">
              <LinkedIn sx={{ fontSize: 50 }} />
            </IconButton>
          </div>
          <div className="mt-4">
            <Typography variant="h6">A collection of my work and contributions across different domains</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <ProjectSection title="Web Projects" projects={WebProjects} />
          <ProjectSection title="Unity Projects" projects={UnityProjects} />
          <ProjectSection title="Cal Poly SLO Projects" projects={CalPolyProjects} />
        </div>
      </main>
    </div>
  );
}
