import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { theme } from "@/shared/config/theme";
import { AuthPage } from "@/pages/auth";
import { OnboardingPage } from "@/pages/onboarding";
import CatalogPage from "@/pages/CatalogPage";
import FigmaCatalogPage from "@/pages/FigmaCatalogPage";
import ExactFigmaCatalog from "@/pages/ExactFigmaCatalog";
import FigmaCatalogMainPage from "@/pages/FigmaCatalogMainPage";
import AuthFlowDemo from "@/pages/AuthFlowDemo";
import ProfilePage from "@/pages/ProfilePage";
import MyBalancePage from "@/pages/MyBalance";
import NotificationsPage from "@/pages/NotificationsPage";
import NotificationsDemo from "@/pages/NotificationsDemo";
import MyOrders from "@/pages/MyOrders";
import { LoginModal } from "@/components/ui/LoginModal";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";

export type AppScreen = "onboarding" | "auth" | "catalog" | "figma-catalog-main" | "auth-flow-demo" | "profile" | "mybalance" | "notifications" | "notifications-demo" | "myorders";

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleStartAuth = () => {
    setCurrentScreen("auth");
  };

  const handleBackToOnboarding = () => {
    setCurrentScreen("onboarding");
  };

  const handleLoginSuccess = () => {
    console.log('Login successful!');
    setIsAuthenticated(true);
    setCurrentScreen("figma-catalog-main");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen("onboarding");
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen("profile");
  };

  const handleNavigateToMyBalance = () => {
    setCurrentScreen("mybalance");
  };

  const handleNavigateToNotifications = () => {
    setCurrentScreen("notifications");
  };

  const handleNavigateToMyOrders = () => {
    setCurrentScreen("myorders");
  };

  const handleNavigateToMain = () => {
    setCurrentScreen("figma-catalog-main");
  };

  // Навигационные функции для роутера
  const navigateToAuth = () => {
    window.location.href = '/auth/login';
  };

  const navigateToOnboarding = () => {
    window.location.href = '/onboarding';
  };

  const navigateToConfirmation = (phone: string, password: string) => {
    console.log('Login attempt:', phone, password);
    window.location.href = '/auth/confirmation';
  };

  const navigateToProfile = () => {
    window.location.href = '/profile';
  };

  const handleConfirmationSuccess = (code: string) => {
    console.log('Code confirmed:', code);
    window.location.href = '/figma-catalog-main';
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
            onLoginSuccess={handleLoginSuccess}
            onError={(error) => {
              console.error('Login error:', error);
            }}
          />
        );
      case "catalog":
        return <CatalogPage />;
      case "figma-catalog-main":
        return <FigmaCatalogMainPage />;
      case "auth-flow-demo":
        return <AuthFlowDemo />;
      case "profile":
        return <ProfilePage onNavigateToMain={handleNavigateToMain} />;
      case "mybalance":
        return <MyBalancePage onNavigateToMain={handleNavigateToMain} />;
      case "notifications":
        return <NotificationsPage onNavigateToMain={handleNavigateToMain} />;
      case "notifications-demo":
        return <NotificationsDemo />;
      case "myorders":
        return <MyOrders onNavigateToMain={handleNavigateToMain} />;
      default:
        return <OnboardingPage onStartAuth={handleStartAuth} />;
    }
  };

  // Если нужно использовать роутинг, можно использовать эту версию
  const renderWithRouting = () => {
    return (
      <Router>
        <Routes>
          <Route path="/onboarding" element={<OnboardingPage onStartAuth={navigateToAuth} />} />
          <Route path="/auth" element={
            <AuthPage 
              onBackToOnboarding={navigateToOnboarding}
              onLoginSuccess={handleLoginSuccess}
              onError={(error) => {
                console.error('Login error:', error);
              }}
            />
          }>
            {/* Вложенные роуты для AuthFlow */}
            <Route path="login" element={
              <LoginModal
                onLogin={navigateToConfirmation}
                onForgotPassword={() => console.log('Forgot password')}
                onEmailLogin={() => console.log('Email login')}
                onClose={() => window.location.href = '/onboarding'}
              />
            } />
            <Route path="confirmation" element={
              <ConfirmationModal
                phoneNumber="+7 (987) 654-32-10"
                onConfirm={handleConfirmationSuccess}
                onResend={() => console.log('Resend code')}
                onBack={() => window.location.href = '/auth/login'}
                onClose={() => window.location.href = '/onboarding'}
              />
            } />
          </Route>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/figma-catalog" element={<FigmaCatalogPage />} />
          <Route path="/figma-catalog-main" element={<FigmaCatalogMainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mybalance" element={<MyBalancePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/notifications-demo" element={<NotificationsDemo />} />
          <Route path="/myorders" element={<MyOrders onNavigateToMain={() => window.location.href = '/figma-catalog-main'} />} />
          <Route path="/exact-catalog" element={<ExactFigmaCatalog />} />
          <Route path="/demo" element={<AuthFlowDemo />} />
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </Router>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Используем роутинг для навигации между страницами */}
      {renderWithRouting()}
      
      {/* Альтернативно - без роутинга */}
      {/* {renderScreen()} */}
    </ThemeProvider>
  );
};
