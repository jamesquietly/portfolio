import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RayTracerProject } from "@/lib/constants/Project";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github } from "lucide-react";
import { BASE_PATH } from "@/lib/constants/Constants";

const features = [
  "Spheres, triangles, planes, and boxes",
  "Reflection and Refraction",
  "Monte Carlo Global Illumination",
  "Anti-Aliasing",
  "Transformations",
];

const imagePairs = [
  {
    before: `${BASE_PATH}/images/simple-gi.png`,
    after: `${BASE_PATH}/images/simple-gi-soft.png`,
  },
  {
    before: `${BASE_PATH}/images/final_box.png`,
    after: `${BASE_PATH}/images/final_box-soft.png`,
  },
  {
    before: `${BASE_PATH}/images/final_trees.png`,
    after: `${BASE_PATH}/images/final_trees-soft.png`,
  },
];

const RayTracerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge
              variant="outline"
              className="text-sm font-medium px-3 py-1 inline-flex"
            >
              Computer Graphics
            </Badge>
            <Typography
              variant="h1"
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Ray Tracer
            </Typography>
            <div className="space-y-6">
              <Typography className="mx-auto max-w-2xl text-muted-foreground md:text-xl">
                A physically-based ray tracer with global illumination, soft
                shadows, and more
              </Typography>
              <div className="flex justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link
                    href={RayTracerProject.github || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 md:px-6 py-12 space-y-12">
        {/* Description Card */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Project Overview
            </CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A ray tracer simulates the way light interacts with virtual
                objects to create realistic images. Starting from the camera's
                perspective, it traces rays of light as they travel through a
                scene, calculating how they interact with different surfaces and
                materials.
              </p>
              <p>
                This implementation processes POV-Ray scene files, supporting
                various geometric primitives, materials, and lighting models.
                The ray tracer was developed in C++ using the GLM library for
                vector and matrix operations.
              </p>
              <p>
                Implemented soft shadows by treating point lights as area
                lights, casting multiple shadow feeler rays and averaging the
                results to create more natural-looking shadows with penumbras.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Renders Section */}
        <section className="space-y-6">
          <div className="text-center mb-8">
            <Typography
              variant="h2"
              className="text-3xl font-bold tracking-tight"
            >
              Render Showcase
            </Typography>
            <p className="text-muted-foreground mt-2">
              Comparing standard rendering (left) with soft shadows enabled
              (right)
            </p>
          </div>

          <div className="grid gap-8">
            {imagePairs.map((pair, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={pair.before}
                      alt={`Render ${idx + 1} without soft shadows`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Standard Rendering
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="relative aspect-video overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={pair.after}
                      alt={`Render ${idx + 1} with soft shadows`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    With Soft Shadows
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Technical Features
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      {/* References Section */}
      <section className="w-full max-w-7xl px-4 md:px-6 py-12">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">References</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Soft Shadows Implementation</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://www.cs.unc.edu/~dm/UNC/COMP236/LECTURES/SoftShadows.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <span>View Paper</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Ian Dunn, Cal Poly San Luis Obispo
                  </h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default RayTracerPage;
