import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classnames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from "../../contexts/LayoutContext";
import theme from "../../theme";

import structure from "./structure";
import useStyles from "./styles";
import { Dot } from "./Dot";

export const drawerWidth = 300;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();

  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();
  const [isPermanent, setPermanent] = React.useState(true);

  function handleWindowWidthChange(): void {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }

  React.useEffect((): (() => void) => {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return () => {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  const checkIsActive = (link: string): boolean => {
    return (
      location.pathname === link ||
      (link !== "/" && location.pathname.indexOf(link) !== -1)
    );
  };

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      open={isSidebarOpened}
      // sx={{
      //   width: drawerWidth,
      //   flexShrink: 0,
      //   [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      // }}
      className={classnames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classnames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
    >
      <Toolbar />
      <Box>
        <List>
          {structure.map(({ label, link, icon }) => (
            <ListItem
              key={link}
              disablePadding
              className={classes.link}
              classes={{
                root: classnames({
                  [classes.linkActive]: checkIsActive(link),
                }),
              }}
            >
              <ListItemButton component={Link} to={link}>
                <ListItemIcon
                  className={classnames(classes.linkIcon, {
                    [classes.linkIconActive]: checkIsActive(link),
                  })}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classnames(classes.linkText, {
                      [classes.linkTextActive]: checkIsActive(link),
                      [classes.linkTextHidden]: !isSidebarOpened,
                    }),
                  }}
                  primary={label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default Sidebar;
