import { Box, Toolbar, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import meeticHome from "../assets/images/projects/meetic-home.png";
import meeticLogin from "../assets/images/projects/meetic-login.png";
import meeticSearch from "../assets/images/projects/meetic-search.png";
import snapchatAuth from "../assets/images/projects/snapchat-auth.png";
import snapchatHome from "../assets/images/projects/snapchat-home.png";
import snapchatProfile from "../assets/images/projects/snapchat-profile.png";
import snapchatCamera from "../assets/images/projects/snapchat-camera.png";
import spotifyAlbumTracks from "../assets/images/projects/spotify-album-tracks.png";
import spotifyHome from "../assets/images/projects/spotify-home.png";
import spotifyArtistList from "../assets/images/projects/spotify-artist-list.png";
import spotifySearchResults from "../assets/images/projects/spotify-search-result.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const items = [
    {
      name: "My Meetic",
      description: [
        "Ce projet avait pour but de nous apprendre à faire une recherche, login et register front et back.",
        "Durée : 2 semaines",
        "Technologie utilisée : PHP, Javascript (+ jQuery), HTML, CSS (+ SASS)",
      ],
      images: [meeticHome, meeticLogin, meeticSearch],
      github: "https://github.com/anthonynomil/epitech-my-meetic",
    },
    {
      name: "My Snapchat",
      description: [
        "Le but de ce projet était de créer un équivalent à snapchat front seulement en utilisant une API fournie par Epitech.",
        "Durée : 1 semaines",
        "Technologie utilisée : React Native, Node.JS, expo",
      ],
      images: [snapchatHome, snapchatProfile, snapchatCamera, snapchatAuth],
      github: "https://github.com/anthonynomil/epitech-my-snapchat",
    },
    {
      name: "My Spotify",
      description: [
        "Le but de ce projet était de créer un équivalent à spotify front seulement en utilisant une API fournie par Epitech.",
        "Durée : 1 week-end",
        "Technologie utilisée : React Native, Node.JS, expo",
      ],
      images: [
        spotifyHome,
        spotifyAlbumTracks,
        spotifyArtistList,
        spotifySearchResults,
      ],
      github: "https://github.com/anthonynomil/epitech-my-spotify",
    },
  ];

  return (
    <Box sx={{ mt: "auto" }} height={"100%"}>
      <Toolbar />
      <Box display={"flex"} flexDirection={"column"} height={"100%"}>
        <Typography variant={"h3"} align={"center"} my={5} color={"primary"}>
          Projects
        </Typography>
        <Carousel
          sx={{ height: "100%" }}
          animation={"slide"}
          navButtonsAlwaysVisible
          interval={10000}
        >
          {items.map((item, i) => (
            <ProjectCard project={item} key={i} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Projects;
