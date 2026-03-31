import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@/shared/config/theme";
import { AuthPage } from "@/pages/auth";
import { OnboardingPage } from "@/pages/onboarding";
import AuthFlowDemo from "@/pages/AuthFlowDemo";

export type AppScreen = "onboarding" | "auth" | "auth-flow-demo";

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding");

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
        return (
          <AuthPage 
            onBackToOnboarding={handleBackToOnboarding}
            onLoginSuccess={() => {
              console.log('Login successful!');
              // Здесь можно перейти к основному приложению
            }}
            onError={(error) => {
              console.error('Login error:', error);
            }}
          />
        );
      case "auth-flow-demo":
        return <AuthFlowDemo />;
      default:
        return <OnboardingPage onStartAuth={handleStartAuth} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderScreen()}
    </ThemeProvider>
  );
};
