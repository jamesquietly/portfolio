import { Project } from "../types";

export const RayTracerProject: Project = {
  title: "Ray Tracer",
  description:
    "A ray tracer sends rays into the world in order to determine what color each pixel needs to be rendered in our view. This generates a static image based on a POV file input. Written in C++",
  github: "https://github.com/jamesquietly/cpe473/tree/master/prog1",
  learn: "/raytracer",
};

export const CalPolyProjects: Project[] = [
  RayTracerProject,
  {
    title: "Haunter's Candy Hunt",
    description:
      "A 3D game where you can play as Haunter and collect rare candy. The candy spawns in random locations and there are trees that you can't pass through. Writtern in C++ and OpenGL",
    learn: "/haunter",
  },
  {
    title: "AstroJump",
    description:
      "A platform jumping game where you must keep jumping upwards on platforms to avoid falling into the rising lava.",
    github: "https://github.com/jamesquietly/AstroJump",
  },
];

export const UnityProjects: Project[] = [
  {
    title: "Laser Defender",
    description: "Shoot down enemy space ships with lasers! Written in C#",
    github: "https://github.com/jamesquietly/LaserDefender",
    play: "https://jamesquietly.github.io/LaserDefender/",
  },
  {
    title: "Block Breaker",
    description: "Smash all the blocks by bouncing the ball with a paddle! Written in C#",
    github: "https://github.com/jamesquietly/BlockBreaker",
    play: "https://jamesquietly.github.io/BlockBreaker/",
  },
];

export const WebProjects: Project[] = [
  {
    title: "Natours",
    description: "Web site for nature tours with cool animations. Made for a course on Udemy.",
    github: "https://github.com/jamesquietly/natours",
    learn: "https://jamesquietly.github.io/natours/",
  },
  {
    title: "Omnifood",
    description: "Responsive web site for a food delivery service. Made for a course on Udemy.",
    github: "https://github.com/jamesquietly/omnifood",
    learn: "https://jamesquietly.github.io/omnifood/",
  },
  {
    title: "Pomodoro Clock",
    description: "Clock that switches between work and break time in order to visualize the pomodoro technique.",
    github: "https://github.com/jamesquietly/pomodoro-clock",
    learn: "https://jamesquietly.github.io/pomodoro-clock/",
  },
];
