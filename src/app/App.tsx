import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@/shared/config/theme";
import { AuthPage } from "@/pages/auth";
import { OnboardingPage } from "@/pages/onboarding";
import AuthFlowDemo from "@/pages/AuthFlowDemo";

export type AppScreen = "onboarding" | "auth" | "auth-flow-demo";

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("auth-flow-demo");

  const handleStartAuth = () => {
    setCurrentScreen("auth");
  };

  const handleBackToOnboarding = () => {
    setCurrentScreen("onboarding");
  };

  // Для демонстрации - можно переключаться между экранами
  const renderScreen = () => {
    switch (currentScreen) {
      case "onboarding":
        return <OnboardingPage onStartAuth={handleStartAuth} />;
      case "auth":
        return <AuthPage onBackToOnboarding={handleBackToOnboarding} />;
      case "auth-flow-demo":
        return <AuthFlowDemo />;
      default:
        return <AuthFlowDemo />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderScreen()}
    </ThemeProvider>
  );
};
