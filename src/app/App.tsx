import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@/shared/config/theme";
import { AuthPage } from "@/pages/auth";
import { OnboardingPage } from "@/pages/onboarding";

export type AppScreen = "onboarding" | "auth";

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding");

  const handleStartAuth = () => {
    setCurrentScreen("auth");
  };

  const handleBackToOnboarding = () => {
    setCurrentScreen("onboarding");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {currentScreen === "onboarding" ? (
        <OnboardingPage onStartAuth={handleStartAuth} />
      ) : (
        <AuthPage onBackToOnboarding={handleBackToOnboarding} />
      )}
    </ThemeProvider>
  );
};
