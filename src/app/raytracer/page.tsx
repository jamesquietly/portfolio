import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";

const RayTracer = () => {
  return (
    <Box>
      <InfoCard
        sx={{ mb: 3 }}
        heading="Description"
        text="A ray tracer starts from the camera's point of view and sends rays out into the world to see if it hits anything. If the ray hits something, we can determine the color based on the object's color, material, and reflectiveness. In this ray tracer, our input file is a POV ray file. This type of file contains info about the camera and other objects like geometric shapes. The output of the ray tracer is a static image based on the POV file and command line arguments. For the final addition to the ray tracer, I decided to do soft shadows. The concept is to treat our point lights as an area light in order to send multiple shadow feeler rays with that area light. After getting the color from those samples we can average them to get softer shadows. This program was written in C++ with the GLM library."
        github="https://github.com/jamesquietly/cpe473/tree/master/prog1"
      />
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Renders
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            Here are some output images of soft shadows. The left side does not
            have soft shadows. The right side does have soft shadows.
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid xs={6}>
              <Image
                src="/images/simple-gi.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
            <Grid xs={6}>
              <Image
                src="/images/simple-gi-soft.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
            <Grid xs={6}>
              <Image
                src="/images/final_box.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
            <Grid xs={6}>
              <Image
                src="/images/final_box-soft.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
            <Grid xs={6}>
              <Image
                src="/images/final_trees.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
            <Grid xs={6}>
              <Image
                src="/images/final_trees-soft.png"
                alt=""
                width="0"
                height="0"
                layout="responsive"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <InfoCard
        sx={{ mb: 3 }}
        heading="Other working features"
        text="Spheres, triangles, planes, boxes, Reflection and Refraction, Monte Carlo Global Illumination, Blinn-Phong and Cook-Torrance Shading, Anti-Aliasing, Transformations"
      />
      <InfoCard
        heading="References"
        text="Ian Dunn https://www.cs.unc.edu/~dm/UNC/COMP236/LECTURES/SoftShadows.pdf"
      />
    </Box>
  );
};

export default RayTracer;
