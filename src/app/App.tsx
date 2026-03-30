import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/shared/config/theme";
import { AuthPage } from "@/pages/auth";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthPage />
    </ThemeProvider>
  );
};
