import makeStyles from "@mui/styles/makeStyles";

import theme from "../../theme";

export default makeStyles(() => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    width: `calc(100vw - 240px)`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  contentChildren: {
    flexGrow: 1,
  },
  contentShift: {
    width: `calc(100vw - 240px - ${theme.spacing(6)})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
}));
