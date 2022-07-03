import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Layout from "./components/layout";
import Error404 from "./pages/error404";
import Dashboard from "./pages/dashboard";
import Produtos from "./pages/produtos";
import Estoques from "./pages/estoques";
import CalculoInsumo from "./pages/calculo-insumo/intex";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/estoques" element={<Estoques />} />
          <Route path="/calculo-insumo" element={<CalculoInsumo />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
