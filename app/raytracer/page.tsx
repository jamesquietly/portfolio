import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
import { RayTracerProject } from '@/src/projects/constants/ProjectList';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BASE_PATH } from '@/src/lib/constants';
import { GitHub } from '@mui/icons-material';

const features = [
  'Spheres, triangles, planes, and boxes',
  'Reflection and Refraction',
  'Monte Carlo Global Illumination',
  'Anti-Aliasing',
  'Transformations',
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
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center mt-8 gap-4">
        <Typography variant="h2">Ray Tracer</Typography>
        <Typography variant="h5">
          A physically-based ray tracer with global illumination, soft shadows,
          and more
        </Typography>
        <Button
          variant="contained"
          href={RayTracerProject.github || ''}
          target="_blank"
          className="flex items-center gap-2"
        >
          <GitHub />
          GitHub
        </Button>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 md:px-6 py-12 space-y-12">
        {/* Description Card */}
        <Card className="border-none shadow-lg">
          <CardContent>
            <Typography variant="h4" className="pb-4">
              Project Overview
            </Typography>
            <Divider />
            <div className="space-y-4 mt-4">
              <p>
                A ray tracer simulates the way light interacts with virtual
                objects to create realistic images. Starting from the
                camera&apos;s perspective, it traces rays of light as they
                travel through a scene, calculating how they interact with
                different surfaces and materials.
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
        <section className="gap-6">
          <div className="text-center mb-8">
            <Typography variant="h3">Render Showcase</Typography>
            <Typography variant="h6" className="mt-4">
              Comparing standard rendering (left) with soft shadows enabled
              (right)
            </Typography>
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
                  <Typography variant="h6" className="text-center">
                    Standard Rendering
                  </Typography>
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
                  <Typography variant="h6" className="text-center">
                    With Soft Shadows
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <Card className="border-none shadow-lg">
            <CardContent>
              <Typography variant="h6">Technical Features</Typography>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <Typography>{feature}</Typography>
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
          <CardContent>
            <Typography variant="h6" className="pb-4">
              References
            </Typography>
            <Divider />
            <div>
              <div className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Soft Shadows Implementation</h3>
                  <Button variant="outlined">
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
              <div className="flex items-start gap-4 p-4">
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
