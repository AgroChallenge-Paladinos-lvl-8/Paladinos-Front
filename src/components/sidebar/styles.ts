import makeStyles from "@mui/styles/makeStyles";

import theme from "../../theme";

export default makeStyles(() => ({
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.default,
    },
  },
  linkActive: {
    backgroundColor: theme.palette.background.default,
  },
}));
