/**
 * Pages Module
 * 
 * Экспорт всех страниц приложения
 */

// Main Pages
export { default as MainPage } from './MainPage';
export { default as ProfilePage } from './ProfilePage';
export { default as NotificationsPage } from './NotificationsPage';
export { default as CatalogPage } from './CatalogPage';

// Demo Pages
export { default as AuthFlowDemo } from './AuthFlowDemo';
export { default as CatalogDemo } from './CatalogDemo';
export { default as LoginDemo } from './LoginDemo';
export { default as NotificationsDemo } from './NotificationsDemo';

// Figma Pages
export { default as FigmaMainPage } from './FigmaMainPage';
export { default as FigmaCatalogPage } from './FigmaCatalogPage';
export { default as FigmaCatalogMainPage } from './FigmaCatalogMainPage';
export { default as FigmaLayoutDemo } from './FigmaLayoutDemo';
export { default as ExactFigmaCatalog } from './ExactFigmaCatalog';

// Sub-modules
export * from './auth';
export * from './onboarding';
