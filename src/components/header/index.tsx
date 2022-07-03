import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/styles";

import React from "react";
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../contexts/LayoutContext";
import theme from "../../theme";

const Header: React.FC = () => {
  const layoutState = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  const MyAppBar = styled(AppBar)({
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  });
  return (
    <MyAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
        >
          {layoutState.isSidebarOpened ? <ArrowBackIcon /> : <MenuIcon />}
        </IconButton>
        {/* <Typography variant="h6" noWrap component="div">
          TechAgro
        </Typography> */}
        <Box
          sx={{
            p: "4px 4px 0",
            m: 1,
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
        >
          <img
            src="/img/logo.png"
            alt="TechAgro"
            height="40px"
            style={{ verticalAlign: "bottom" }}
          />
        </Box>
      </Toolbar>
    </MyAppBar>
  );
};

export default Header;
