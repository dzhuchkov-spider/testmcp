import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { OnboardingPage } from "@/pages/onboarding";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OnboardingPage />
    </ThemeProvider>
  );
};
