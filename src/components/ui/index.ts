/**
 * UI Components
 * 
 * Компоненты созданные на основе Figma дизайна
 * Используют MUI + styled components для стилизации
 */

// Main Buttons - Основные кнопки
export { MainButtons } from './MainButtons';
export type { 
  MainButtonsProps, 
  MainButtonSize, 
  MainButtonType, 
  MainButtonState 
} from './MainButtons';

// Action Buttons - Кнопки действий
export { ActionButtons } from './ActionButtons';
export type { 
  ActionButtonsProps, 
  ActionButtonSize, 
  ActionButtonType, 
  ActionButtonState 
} from './ActionButtons';

// Link Buttons - Кнопки-ссылки
export { LinkButtons } from './LinkButtons';
export type { 
  LinkButtonsProps, 
  LinkButtonSize, 
  LinkButtonType, 
  LinkButtonState 
} from './LinkButtons';

// Input - Поля ввода
export { Input } from './Input';
export type { 
  InputProps, 
  InputState 
} from './Input';

// Header - Хедер
export { Header } from './Header';
export type { HeaderProps } from './Header';

// ProductCard - Карточка товара
export { ProductCard } from './ProductCard';
export type { 
  ProductCardProps 
} from './ProductCard';

// Heading - Заголовки
export { Heading } from './Heading';
export type { 
  HeadingProps, 
  HeadingSize 
} from './Heading';

// Catalog - Компоненты каталога
export { Catalog } from './Catalog';
export type { 
  CatalogProps, 
  CatalogSize, 
  CatalogLevel, 
  CatalogState 
} from './Catalog';

// PromoBanner - Промо-баннеры
export { PromoBanner } from './PromoBanner';
export type { 
  PromoBannerProps, 
  PromoBannerSize, 
  PromoBannerState 
} from './PromoBanner';

// Demo Component
export { ComponentDemo } from './ComponentDemo';

// MainContainer - Универсальный контейнер
export { MainContainer } from './MainContainer';
export type { 
  MainContainerProps, 
  MainContainerSize 
} from './MainContainer';

// PromoSection - Секция промо-баннеров
export { PromoSection } from './PromoSection';
export type { 
  PromoSectionProps 
} from './PromoSection';

// CatalogSection - Секция каталога
export { CatalogSection } from './CatalogSection';
export type { 
  CatalogSectionProps 
} from './CatalogSection';

// PopularSection - Секция популярных товаров
export { PopularSection } from './PopularSection';
export type { 
  PopularSectionProps 
} from './PopularSection';

// Notification - Компоненты уведомлений
export { Notification } from './Notification';
export type { 
  NotificationProps, 
  NotificationType 
} from './Notification';

// Company - Компоненты компании
export { Company } from './Company';
export type { 
  CompanyProps, 
  CompanyType 
} from './Company';

// Profile - Компонент профиля
export { Profile } from './Profile';
export type { 
  ProfileProps, 
  ProfileView 
} from './Profile';

// Menu Components - Компоненты меню на основе Figma дизайна
export { MenuItem } from './MenuItem';
export { Menu } from './Menu';
export { MenuExit } from './MenuExit';

// Figma Components - Компоненты на основе Figma дизайна
export { HeaderButtons } from './HeaderButtons';
export { MainButton } from './MainButton';
export { OrderStatuses } from './OrderStatuses';
