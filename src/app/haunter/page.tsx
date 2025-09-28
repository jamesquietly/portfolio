import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowUpRight,
  Gamepad2,
  Move3d,
  Code2,
  ShieldCheck,
  Camera,
  ImageIcon,
  Box,
  BookOpen,
} from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

export const metadata = {
  title: "Haunter's Candy Hunt | Project",
  description:
    "A 3D game featuring Haunter collecting candies in a forest environment, built with C++ and OpenGL",
};

const FeatureCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-primary/10 p-2 rounded-lg">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const HaunterPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Haunter&apos;s Candy Hunt
        </h1>
        <p className="text-xl text-muted-foreground">
          A 3D adventure where Haunter searches for rare candies in a mysterious
          forest
        </p>
      </div>

      {/* Game Preview */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg bg-card border">
          <div className="aspect-video w-full relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ddLDYoN6Kuc"
              title="Haunter's Candy Hunt Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Game Screenshot */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={`${BASE_PATH}/images/haunter.jpg`}
            alt="Haunter's Candy Hunt Game Screenshot"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg border"
            priority
          />
        </div>
      </div>

      {/* Game Overview */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Gamepad2 className="h-6 w-6 text-purple-500" />
              <CardTitle>About the Game</CardTitle>
            </div>
            <CardDescription>
              <p className="text-foreground">
                In the Pokémon world, rare candies are hard to come by, but
                Haunter has discovered a forest full of them! Play as Haunter in
                this 3D adventure game to collect as many candies as you can
                while navigating through a mystical forest filled with obstacles
                and surprises.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                OpenGL
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                3D Graphics
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Move3d className="h-6 w-6 text-blue-500" />
              <CardTitle>Controls</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center p-2 hover:bg-accent/50 rounded-md">
              <span className="text-muted-foreground">Movement</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                WASD
              </span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-accent/50 rounded-md">
              <span className="text-muted-foreground">Camera Control</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                Arrow Keys
              </span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-accent/50 rounded-md">
              <span className="text-muted-foreground">Look Around</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                Mouse
              </span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-accent/50 rounded-md">
              <span className="text-muted-foreground">Respawn Trees</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                T Key
              </span>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-accent/50 rounded-md">
              <span className="text-muted-foreground">Respawn Candy</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                C Key
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FeatureCard icon={ShieldCheck} title="Collision Detection">
              Advanced collision detection using bounding sphere algorithms to
              handle interactions between Haunter, trees, and candies.
            </FeatureCard>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FeatureCard icon={Camera} title="Camera Control">
              Intuitive camera controls allowing players to look around and
              explore the 3D environment with smooth transitions.
            </FeatureCard>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FeatureCard icon={ImageIcon} title="High-Quality Textures">
              Custom textures applied to 3D models to create a visually
              appealing and immersive game world.
            </FeatureCard>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FeatureCard icon={Box} title="Skybox Implementation">
              Seamless skybox rendering that creates a sense of depth and
              atmosphere in the game environment.
            </FeatureCard>
          </Card>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Development Insights
        </h2>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-purple-500">
            Technical Challenges
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              One of the initial challenges was properly loading and rendering
              3D models with their textures. The Haunter model, for instance,
              was initially only rendering the eyes due to how the OBJ file was
              structured with separate meshes for different parts of the model.
            </p>
            <p>
              Implementing the skybox required creating a cube map and properly
              mapping the textures to create a seamless environment that
              enhances the game&apos;s atmosphere.
            </p>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-purple-500">
            Lessons Learned
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This project provided valuable experience in 3D graphics
              programming, particularly in understanding how 3D models are
              structured and rendered in a game environment. Working with OpenGL
              shaders and understanding the graphics pipeline were crucial
              aspects of development.
            </p>
            <p>
              The collision detection implementation taught me about spatial
              partitioning and optimization techniques for real-time collision
              checking in a 3D space.
            </p>
          </div>
        </Card>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={`${BASE_PATH}/images/texture.jpg`}
              alt="Game Textures"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <p className="p-4 text-sm text-muted-foreground">
              Custom textures applied to 3D models
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={`${BASE_PATH}/images/sky.jpg`}
              alt="Game Skybox"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <p className="p-4 text-sm text-muted-foreground">
              Skybox implementation creating immersive environment
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          Resources & Credits
        </h2>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "Haunter Model",
                  href: "https://www.models-resource.com/wii/pokeparkwiipikachusadventure/model/2556/",
                  description: "3D model of Haunter from Pokémon",
                },
                {
                  label: "Candy Model",
                  href: "https://www.models-resource.com/wii/kirbysreturntodreamland/model/4572/",
                  description: "Candy item model",
                },
                {
                  label: "Tree Model",
                  href: "https://free3d.com/3d-model/realistic-tree-pack-3-trees-95419.html",
                  description: "3D tree models for the forest environment",
                },
                {
                  label: "Skybox Textures",
                  href: "http://www.custommapmakers.org/skyboxes.php",
                  description: "Skybox textures for the game environment",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-muted-foreground"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                        <ArrowUpRight className="inline-block h-3.5 w-3.5 ml-1 -translate-y-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HaunterPage;
