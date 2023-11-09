import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer theme="colored" />
      <Router />
    </ThemeProvider>
  );
}

export default App;
