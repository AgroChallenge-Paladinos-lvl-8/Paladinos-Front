import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../footer";
import Header from "../header";
import Sidebar from "../sidebar";
import useStyles from "./styles";

const Layout: React.FC = () => {
  const classes = useStyles();
  // const layoutState = useLayoutState();
  // const contentClassName = !layoutState.isSidebarOpened
  //   ? classes.content
  //   : `${classes.content} ${classes.contentShift}`;
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <div className={classes.content}>
        <div className={classes.fakeToolbar} />
        <div className={classes.contentChildren}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
