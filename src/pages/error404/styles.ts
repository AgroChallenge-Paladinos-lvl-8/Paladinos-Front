import makeStyles from "@mui/styles/makeStyles";
import { drawerWidth } from "../../components/sidebar";

import theme from "../../theme";

export default makeStyles(() => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
    paperRoot: {
      boxShadow: theme.customShadows.widgetDark,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
      maxWidth: "500px",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "90vw",
      },
    },
    textRow: {
      marginBottom: theme.spacing(10),
      textAlign: "center",
    },
    errorCode: {
      fontSize: 148,
      fontWeight: 600,
    },
    safetyText: {
      fontWeight: 300,
      color: theme.palette.text.primary,
    },
    backButton: {
      boxShadow: theme.customShadows.widget,
      textTransform: "none",
      fontSize: 22,
    },
  };
});
