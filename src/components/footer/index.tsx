import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

import useStyles from "./styles";

const Footer: React.FC = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <Container className={classes.footerAppBar} maxWidth={false}>
      <Toolbar className={classes.footer}>
        <p>
          <Link
            href="https://www.techagro.com.br/"
            target="_blank"
            className={classes.link}
          >
            TechAgro &copy; Todos os direitos reservados, {year}
          </Link>
        </p>
      </Toolbar>
    </Container>
  );
};
export default Footer;
