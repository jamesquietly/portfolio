import ProjectCard from "@/components/ProjectCard";
import { Typography } from "@/components/Typography";
import { CalPolyProjects, UnityProjects, WebProjects } from "@/lib/constants/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Projects",
  description: "A showcase of my projects and work"
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of my work and contributions across different domains
          </p>
        </div>

        <section className="mb-16">
          <Typography variant="h2" className="text-2xl font-semibold mb-6 pb-2 border-b">
            Cal Poly Projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CalPolyProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Typography variant="h2" className="text-2xl font-semibold mb-6 pb-2 border-b">
            Unity Projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UnityProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section>
          <Typography variant="h2" className="text-2xl font-semibold mb-6 pb-2 border-b">
            Web Development
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WebProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
