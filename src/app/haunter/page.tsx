import Image from "next/image";
import Box from "@mui/material/Box";
import InfoCard from "@/components/InfoCard";
import Typography from "@mui/material/Typography";
import ListCard from "@/components/ListCard";
import LinkCard from "@/components/LinkCard";
import ImageCard from "@/components/ImageCard";

const Haunter = () => {
	return (
		<Box>
			<Typography gutterBottom variant="h4">
				Haunter&apos;s Candy Hunt
			</Typography>
			<Image
				src="/portfolio/images/haunter.jpg"
				alt=""
				width="0"
				height="0"
				layout="responsive"
				style={{
					marginBottom: 5,
					maxWidth: 800
				}}
			/>
			<Box mb={2}>
				<iframe
					width="100%"
					height="500"
					src="https://www.youtube.com/embed/ddLDYoN6Kuc"
				></iframe>
			</Box>
			<InfoCard
				sx={{ mb: 2 }}
				heading="Introduction"
				text="Rare candy is hard to come by in the Pokemon world, but Haunter seems to have found a forest full of them. You can play as Haunter in this simple game and collect as much candy as you want! This is written in C++ and OpenGL."
			/>
			<ListCard
				sx={{ mb: 2 }}
				heading="Controls"
				text={[
					"WASD to move",
					"Arrow keys to move camera location",
					"Mouse scrolling to rotate/look around",
					"T to change/respawn tree locations",
					"C to change/respawn candy location"
				]}
			/>
			<ListCard
				sx={{ mb: 2 }}
				heading="Features"
				text={[
					"Hierarchical Models",
					"Collision Detection",
					"Camera Control",
					"Textures",
					"Skybox"
				]}
			/>
			<InfoCard
				sx={{ mb: 2 }}
				heading="Collision Detection"
				text="Collision Detection is being implemented by calculating the distances between Haunter and the other objects in the world. If the distance between Haunter and the other object is less than the sum of their bounding sphere's radius, then we have a collision. I am using this to check if Haunter is colliding with the tree or candy. The candy will respawn at a differnt location once it collides with Haunter. Haunter is not able to pass through the trees, but he is free to float off the map or ground plane."
			/>
			<ImageCard
				sx={{ mb: 2 }}
				heading="Textures"
				text="I was not able to get the original textures that came with the obj files. However, I did end up finding some textures that made the models look as close to the original as possible."
				image="/portfolio/images/texture.jpg"
			/>
			<ImageCard
				sx={{ mb: 2 }}
				heading="Skybox"
				text="Skybox added a little more visual appeal to the simple game. The idea is that the skybox is a cube with textures on each side of the cube. The camera is centered inside the cube so when you look around you can see the different textures on each side of the cube. In this game, I went for a cloud textures to simluate a sky."
				image="/portfolio/images/sky.jpg"
			/>
			<InfoCard
				sx={{ mb: 2 }}
				heading="Lessons Learned"
				text="The hardest part when starting the project was getting the obj files and textures to load correctly. At first I was only able to see the eyes of the Pokemon models, so I thought I would be able to animate them once I am able to load the rest of the shapes. Turns out there were only two shapes, the eyes and the rest of the body. So that made that it difficult to try to animate the model. The main lesson I learned from this project was how to implement collision detection and skyboxes."
			/>
			<LinkCard
				heading="Resources"
				links={[
					{
						label: "Haunter Model",
						href: "https://www.models-resource.com/wii/pokeparkwiipikachusadventure/model/2556/"
					},
					{
						label: "Candy Model",
						href: "https://www.models-resource.com/wii/kirbysreturntodreamland/model/4572/"
					},
					{
						label: "Tree",
						href: "https://free3d.com/3d-model/realistic-tree-pack-3-trees-95419.html"
					},
					{
						label: "Skybox",
						href: "http://www.custommapmakers.org/skyboxes.php"
					}
				]}
			/>
		</Box>
	);
};

export default Haunter;
