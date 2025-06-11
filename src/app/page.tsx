import ProjectCard from "@/components/ProjectCard";
import Typography from "@/components/Typography";
import { CalPolyProjects, UnityProjects, WebProjects } from "@/lib/constants/Project";
import Image from "next/image";

export default function Home() {
  return (
    <section className={"flex flex-col mx-4"}>
      <Typography variant={"h2"} className={"my-4"}>
        Cal Poly Projects
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CalPolyProjects.map((cp) => (
          <ProjectCard key={cp.title} project={cp} />
        ))}
      </div>

      <Typography variant={"h2"} className={"my-4"}>
        Unity Projects
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {UnityProjects.map((unity) => (
          <ProjectCard key={unity.title} project={unity} />
        ))}
      </div>

      <Typography variant={"h2"} className={"my-4"}>
        Web Dev Projects
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WebProjects.map((web) => (
          <ProjectCard key={web.title} project={web} />
        ))}
      </div>
    </section>
  );
}
