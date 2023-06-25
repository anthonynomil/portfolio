import { Box, Fab, Tooltip, useScrollTrigger, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useCallback } from "react";

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Tooltip title={"Scroll back to top"} placement={"left"} arrow>
          <Fab
            onClick={scrollToTop}
            color="primary"
            size="small"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Tooltip>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
