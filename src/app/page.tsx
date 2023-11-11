import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import InfoCard from "@/components/InfoCard";

export default function HomePage() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box marginBottom={2}>
				<Typography variant="h4" component="div" marginBottom={2}>
					Cal Poly Projects
				</Typography>
				<Grid container rowSpacing={3} columnSpacing={3}>
					<Grid xs={6}>
						<InfoCard
							heading="Ray Tracer"
							text="A ray tracer sends rays into the world in order to determine what color each pixel needs to be rendered in our view. This generates a static image based on a POV file input. Written in C++"
							github="https://github.com/jamesquietly/cpe473/tree/master/prog1"
							learn="/portfolio/raytracer"
						/>
					</Grid>
					<Grid xs={6}>
						<InfoCard
							heading="Haunter's Candy Hunt"
							text="A 3D game where you can play as Haunter and collect rare candy. The candy spawns in random locations and there are trees that you can't pass through. Writtern in C++ and OpenGL"
							learn="/portfolio/haunter"
						/>
					</Grid>
					<Grid xs={6}>
						<InfoCard
							heading="AstroJump"
							text="A platform jumping game where you must keep jumping upwards on platforms to avoid falling into the rising lava."
							github="https://github.com/jamesquietly/AstroJump"
						/>
					</Grid>
				</Grid>
			</Box>
			<Box marginBottom={2}>
				<Typography variant="h4" component="div" marginBottom={2}>
					Unity Projects
				</Typography>
				<Grid container rowSpacing={3} columnSpacing={3}>
					<Grid xs={6}>
						<InfoCard
							heading="Laser Defender"
							text="Shoot down enemy space ships with lasers! Written in C#"
							github="https://github.com/jamesquietly/LaserDefender"
							play="https://jamesquietly.github.io/LaserDefender/"
						/>
					</Grid>
					<Grid xs={6}>
						<InfoCard
							heading="Block Breaker"
							text="Smash all the blocks by bouncing the ball with a paddle! Written in C#"
							github="https://github.com/jamesquietly/BlockBreaker"
							play="https://jamesquietly.github.io/BlockBreaker/"
						/>
					</Grid>
				</Grid>
			</Box>
			<Box marginBottom={2}>
				<Typography variant="h4" component="div" marginBottom={2}>
					Web Dev Projects
				</Typography>
				<Grid container rowSpacing={3} columnSpacing={3}>
					<Grid xs={6}>
						<InfoCard
							heading="Natours"
							text="Web site for nature tours with cool animations. Made for a course on Udemy."
							github="https://jamesquietly.github.io/natours/"
							learn="https://jamesquietly.github.io/natours/"
						/>
					</Grid>
					<Grid xs={6}>
						<InfoCard
							heading="Omnifood"
							text="Responsive web site for a food delivery service. Made for a course on Udemy."
							github="https://jamesquietly.github.io/omnifood/"
							learn="https://jamesquietly.github.io/omnifood/"
						/>
					</Grid>
					<Grid xs={6}>
						<InfoCard
							heading="Pomodoro Clock"
							text="Clock that switches between work and break time in order to visualize the pomodoro technique."
							github="https://github.com/jamesquietly/pomodoro-clock"
							learn="https://jamesquietly.github.io/pomodoro-clock/"
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
