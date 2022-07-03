import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import classnames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import structure from "./structure";
import useStyles from "./styles";

export const drawerWidth = 300;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();

  const checkIsActive = (link: string): boolean => {
    return (
      location.pathname === link ||
      (link !== "/" && location.pathname.indexOf(link) !== -1)
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
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
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default Sidebar;
