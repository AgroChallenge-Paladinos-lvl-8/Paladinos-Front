import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { LayoutProvider } from "./contexts/LayoutContext";

import { Routes } from "./routes";
import theme from "./theme";

function App() {
  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </LayoutProvider>
  );
}

export default App;
