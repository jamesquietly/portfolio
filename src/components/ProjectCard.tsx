import { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, Github, Play } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 h-full flex flex-col">

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-foreground">
          {project.title}
        </CardTitle>
        <CardDescription className="text-foreground/70">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Space for future content like tags or images */}
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex w-full justify-end items-center gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          )}
          {project.play && (
            <Link
              href={project.play}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Play className="h-4 w-4" />
                <span className="sr-only">Play</span>
              </Button>
            </Link>
          )}
          {project.learn && (
            <Link 
              href={project.learn} 
              className="inline-flex group/button"
            >
              <Button variant="outline" className="flex items-center">
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
