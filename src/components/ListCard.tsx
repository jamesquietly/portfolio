import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

type ListCardArgs = {
	heading: string;
	text: string[];
	github?: string;
	learn?: string;
	play?: string;
	sx?: SxProps;
};

export default function InfoCard({
	heading,
	text,
	github,
	learn,
	play,
	sx
}: ListCardArgs) {
	return (
		<Card sx={sx}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{heading}
				</Typography>
				{text.map((s) => (
					<Typography key={s} variant="body1" color="text.secondary">
						{s}
					</Typography>
				))}
			</CardContent>
			<CardActions>
				{github ? (
					<Button size="large" href={github} target="_blank">
						Github
					</Button>
				) : null}
				{learn ? (
					<Button size="large" href={learn}>
						Learn More
					</Button>
				) : null}
				{play ? (
					<Button size="large" href={play} target="_blank">
						Play
					</Button>
				) : null}
			</CardActions>
		</Card>
	);
}
