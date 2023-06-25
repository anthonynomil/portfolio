import { Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { Image } from "mui-image";
import AvatarImage from "../assets/images/avatar.png";

const Home = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src={AvatarImage}
              alt={"Profile"}
              style={{ borderRadius: "100%", width: "50%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack
              spacing={5}
              sx={{
                mt: {
                  xs: 5,
                  sm: 5,
                  md: 0,
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              <Typography variant={"h3"}>Hello, I am</Typography>
              <Typography variant={"h2"} color={"primary"} fontWeight={500}>
                LIMON Anthony
              </Typography>
              <Typography variant={"h3"}>Full Stack Developer</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
