import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Router from "./router/Router";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
