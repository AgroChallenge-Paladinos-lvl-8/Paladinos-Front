import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained">Button</Button>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="contained" color="secondary">
          Button
        </Button>
        <Button variant="contained" color="success">
          Button
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
