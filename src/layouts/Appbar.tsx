import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Brightness4Rounded,
  Brightness7Rounded,
  ContactMailRounded,
  FolderCopyRounded,
  HomeRounded,
  MenuRounded,
  VideogameAssetRounded,
} from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { toggleTheme } from "../features/theme/theme.slice";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    path: "#home",
    label: "home",
    icon: <HomeRounded />,
  },
  {
    name: "About Me",
    path: "#aboutme",
    label: "aboutMe",
    icon: <VideogameAssetRounded />,
  },
  {
    name: "Projects",
    path: "#projects",
    label: "projects",
    icon: <FolderCopyRounded />,
  },
  {
    name: "Contact",
    path: "#contact",
    label: "contact",
    icon: <ContactMailRounded />,
  },
];

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={HashLink}
              to={item.path}
              smooth
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <Divider />
        <IconButton
          onClick={() => dispatch(toggleTheme())}
          sx={{ color: "text.primary" }}
        >
          {theme === "light" ? <Brightness7Rounded /> : <Brightness4Rounded />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuRounded />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
              userSelect: "none",
            }}
          >
            My Portfolio
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Tooltip
                title={item.name}
                key={item.label}
                placement={"bottom"}
                arrow
              >
                <IconButton
                  component={HashLink}
                  to={item.path}
                  smooth
                  sx={{ color: "#fff", margin: 1, padding: 2 }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
            <Divider orientation={"vertical"} flexItem />
            <IconButton
              sx={{ padding: 2, margin: 1 }}
              onClick={() => dispatch(toggleTheme())}
              color="inherit"
            >
              {theme === "dark" ? (
                <Brightness7Rounded />
              ) : (
                <Brightness4Rounded />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ position: "absolute" }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Appbar;
