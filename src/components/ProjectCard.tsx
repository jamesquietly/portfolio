import { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Typography from "./Typography";
import { Button } from "./ui/button";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h2"}>{project.title}</Typography>
        <Typography>{project.description}</Typography>
      </CardContent>
      <CardFooter>
        {project.github ? (
          <Button asChild className="mr-2">
            <Link href={project.github}>Github</Link>
          </Button>
        ) : undefined}
        {project.learn ? (
          <Button asChild>
            <Link href={project.learn}>Learn More</Link>
          </Button>
        ) : undefined}
        {project.play ? (
          <Button asChild>
            <Link href={project.play}>Play</Link>
          </Button>
        ) : undefined}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
