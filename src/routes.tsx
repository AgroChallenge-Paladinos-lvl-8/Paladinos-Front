import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Layout from "./components/layout";
import Error404 from "./pages/error404";
import Dashboard from "./pages/dashboard";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
