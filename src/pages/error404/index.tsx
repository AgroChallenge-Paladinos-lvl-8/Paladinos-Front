import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Error404: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography
          variant="h1"
          color="primary"
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant="h5" color="primary" className={classes.textRow}>
          Ops. Parece que a página que você está procurando não existe mais
        </Typography>
        <Typography
          variant="h6"
          // color="text"
          // colorBrightness="secondary"
          className={classnames(classes.textRow, classes.safetyText)}
        >
          Mas estamos aqui para trazê-lo de volta à segurança
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
          className={classes.backButton}
        >
          Voltar para página inicial
        </Button>
      </Paper>
    </Grid>
  );
};
export default Error404;
