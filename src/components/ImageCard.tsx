import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

type ImageCardArgs = {
	heading: string;
	text: string;
	image: string;
	sx?: SxProps;
};

export default function InfoCard({ heading, text, image, sx }: ImageCardArgs) {
	return (
		<Card sx={sx}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{heading}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
			<Image alt="" src={image} width="0" height="0" layout="responsive" />
		</Card>
	);
}
