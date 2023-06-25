import { Box, IconButton, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "mui-image";
import { GitHub } from "@mui/icons-material";

type Project = {
  name: string;
  description: string[];
  images: string[];
  github: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, description, images, github } = project;

  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", p: 8 }}
      elevation={12}
    >
      <Typography variant={"h4"} color={"primary"} align={"center"} mb={5}>
        {name}{" "}
        <IconButton href={github}>
          <GitHub />
        </IconButton>
      </Typography>
      {description.map((desc, index) => (
        <Typography key={index} align={"center"} mb={3}>
          {desc}
        </Typography>
      ))}
      <Carousel
        animation={"slide"}
        sx={{ height: "100%" }}
        navButtonsAlwaysVisible
        interval={5000}
      >
        {images.map((image, index) => (
          <Box display={"flex"} justifyContent={"center"} key={index}>
            <Image
              src={image}
              width={"auto"}
              height={"auto"}
              style={{ maxHeight: "40vh" }}
              showLoading={true}
              shift={"left"}
              duration={100}
            />
          </Box>
        ))}
      </Carousel>
    </Paper>
  );
};

export default ProjectCard;
