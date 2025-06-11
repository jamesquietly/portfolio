import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RayTracerProject } from "@/lib/constants/Project";
import Image from "next/image";
import Link from "next/link";

const RayTracerPage = () => {
  return (
    <div className="mx-4 grid grid-cols-1 gap-4 my-4">
      <Typography variant="h1">Ray Tracer</Typography>
      <Card>
        <CardContent>
          <Typography variant="h2">Description</Typography>
          <Typography>
            A ray tracer starts from the camera's point of view and sends rays out into the world to see if it hits
            anything. If the ray hits something, we can determine the color based on the object's color, material, and
            reflectiveness. In this ray tracer, our input file is a POV ray file. This type of file contains info about
            the camera and other objects like geometric shapes. The output of the ray tracer is a static image based on
            the POV file and command line arguments. For the final addition to the ray tracer, I decided to do soft
            shadows. The concept is to treat our point lights as an area light in order to send multiple shadow feeler
            rays with that area light. After getting the color from those samples we can average them to get softer
            shadows. This program was written in C++ with the GLM library.
          </Typography>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={RayTracerProject.github || ""}>Github</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h2">Renders</Typography>
          <Typography>
            Here are some output images of soft shadows. The left side does not have soft shadows. The right side does
            have soft shadows.
          </Typography>
          <div className="grid grid-cols-2 mt-2">
            <Image src="/images/simple-gi.png" alt="" width="0" height="0" layout="responsive" />
            <Image src="/images/simple-gi-soft.png" alt="" width="0" height="0" layout="responsive" />
            <Image src="/images/final_box.png" alt="" width="0" height="0" layout="responsive" />
            <Image src="/images/final_box-soft.png" alt="" width="0" height="0" layout="responsive" />
            <Image src="/images/final_trees.png" alt="" width="0" height="0" layout="responsive" />
            <Image src="/images/final_trees-soft.png" alt="" width="0" height="0" layout="responsive" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h2">Other working features</Typography>
          <Typography>Spheres, triangles, planes, boxes</Typography>
          <Typography>Reflection and Refraction</Typography>
          <Typography>Monte Carlo Global Illumination</Typography>
          <Typography>Anti-Aliasing</Typography>
          <Typography>Transformations</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h2">References</Typography>
          <Button variant="link" asChild>
            <Link href="https://www.cs.unc.edu/~dm/UNC/COMP236/LECTURES/SoftShadows.pdf">Soft Shadows</Link>
          </Button>
          <Typography>Ian Dunn</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RayTracerPage;
