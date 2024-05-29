import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import Theme from "./custom-theme/theme";
import { AppRoutes } from "./routes";
import { Toaster } from "sonner";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isSmallScreen = useMediaQuery("(max-width:728px)");

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseLine />
        <Toaster
          richColors
          position="bottom-left"
          visibleToasts={3}
          toastOptions={{
            style: {
              width: isSmallScreen ? "90%" : "125%",
            },
          }}
        />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
