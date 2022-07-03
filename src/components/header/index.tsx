import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
        <Typography variant="h6" noWrap component="div">
          TechAgro
        </Typography>
      </Toolbar>
    </MyAppBar>
  );
};

export default Header;
