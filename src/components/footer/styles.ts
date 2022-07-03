import makeStyles from "@mui/styles/makeStyles";

import theme from "../../theme";

export default makeStyles(() => ({
  footerAppBar: {
    backgroundColor: theme.palette.background.paper,
    flexShrink: 0,
  },
  footer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    color: theme.palette.primary.main,
    "&:not(:fist-child)": {
      paddingLeft: theme.spacing(2),
    },
  },
}));
