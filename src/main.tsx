import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import CustomAppBar from "./components/CustomAppBar/index.tsx";
import ReactDOM from "react-dom/client";
import customTheme from "./theme/themes.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline></CssBaseline>
    <CustomAppBar></CustomAppBar>
    <App />
  </ThemeProvider>
);
