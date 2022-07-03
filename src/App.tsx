import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import { Routes } from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
