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
export type { 
  HeaderProps, 
  HeaderSize, 
  HeaderState 
} from './Header';

// ProductCard - Карточка товара
export { ProductCard } from './ProductCard';
export type { 
  ProductCardProps 
} from './ProductCard';

// Demo Component
export { ComponentDemo } from './ComponentDemo';
