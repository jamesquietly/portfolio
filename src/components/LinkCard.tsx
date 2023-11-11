import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type Link = {
	label: string;
	href?: string;
};

type LinkCardArgs = {
	heading: string;
	links: Link[];
	sx?: SxProps;
};

export default function InfoCard({ heading, links, sx }: LinkCardArgs) {
	return (
		<Card sx={sx}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{heading}
				</Typography>
				<List>
					{links.map((s) => (
						<ListItem key={s.label} disablePadding>
							<ListItemButton href={s.href ?? ""}>
								<ListItemText
									primary={s.label}
									primaryTypographyProps={{
										style: { color: s.href ? "blue" : "black" }
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
}
