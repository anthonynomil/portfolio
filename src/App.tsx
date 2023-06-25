import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Appbar from "./layouts/Appbar";
import "./App.css";
import { RootState } from "./app/store";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const appTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Box component={"main"}>
        <Appbar />
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <Box id={"home"} sx={{ height: "100vh" }}>
            <Home />
          </Box>
          <Box
            id={"aboutme"}
            sx={{ sm: { height: "auto" }, md: { height: "100vh" } }}
          >
            <Hobbies />
          </Box>
          <Box id={"projects"} sx={{ height: "100vh" }}>
            <Projects />
          </Box>
          <Box id={"contact"} sx={{ height: "100vh" }}>
            <Contact />
          </Box>
          <ScrollToTop />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
