import { Breakpoint } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

export interface PageBreadcrumbs {
  to?: string;
  title: string;
}

export interface PageContentProps {
  children: React.ReactNode;
  pageBreadcrumbs?: PageBreadcrumbs[];
  maxWidth?: Breakpoint | false;
}

const defaultProps: {
  pageBreadcrumbs: PageBreadcrumbs[];
  maxWidth: Breakpoint | false;
} = {
  pageBreadcrumbs: [],
  maxWidth: "lg",
};

const PageContent: React.FC<PageContentProps> = ({
  children,
  pageBreadcrumbs,
  maxWidth,
}) => {
  return (
    <Container sx={{ paddingTop: 2 }} maxWidth={maxWidth}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs>
            <Link component={RouteLink} to="/" color="inherit">
              Dashboard
            </Link>
            {pageBreadcrumbs &&
              pageBreadcrumbs.map((page) => {
                if (page.to) {
                  return (
                    <Link
                      component={RouteLink}
                      to={page.to}
                      key={page.title}
                      color="inherit"
                    >
                      {page.title}
                    </Link>
                  );
                }
                return <Typography key={page.title}>{page.title}</Typography>;
              })}
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

PageContent.defaultProps = defaultProps;
export default PageContent;
