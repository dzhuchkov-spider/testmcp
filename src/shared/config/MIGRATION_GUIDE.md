/**
 * Рекомендации по интеграции дизайн-токенов в существующие компоненты
 * 
 * Этот файл содержит инструкции и примеры того, как обновить существующие компоненты
 * для использования централизованных дизайн-токенов из @/shared/config/theme
 */

import { colors, spacing, typography, componentSizes, borderRadius, shadows } from '@/shared/config/theme';

/**
 * ПРИМЕР 1: Обновление AppButton компонента
 * 
 * ДО (без токенов):
 * const buttonStyle = {
 *   backgroundColor: '#3b82f6',
 *   color: '#ffffff',
 *   padding: '10px 20px',
 *   borderRadius: '6px',
 * }
 * 
 * ПОСЛЕ (с токенами):
 */
export const appButtonExample = {
  style: {
    backgroundColor: colors.primary[500],
    color: colors.neutral[0],
    padding: componentSizes.button.md.padding,
    borderRadius: borderRadius.md,
    boxShadow: shadows.md,
    ...typography.styles.labelLg,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    // States
    '&:hover': {
      backgroundColor: colors.primary[600],
    },
    '&:active': {
      backgroundColor: colors.primary[700],
    },
    '&:disabled': {
      backgroundColor: colors.neutral[300],
      color: colors.neutral[400],
      cursor: 'not-allowed',
    },
  },
};

/**
 * ПРИМЕР 2: Обновление AppTextField компонента
 */
export const appTextFieldExample = {
  style: {
    padding: componentSizes.input.md.padding,
    fontSize: typography.fontSize.base.size,
    fontFamily: typography.fontFamily.base.stack,
    lineHeight: typography.fontSize.base.lineHeight,
    border: `1px solid ${colors.neutral[300]}`,
    borderRadius: borderRadius.md,
    
    '&:focus': {
      borderColor: colors.primary[500],
      boxShadow: `0 0 0 3px ${colors.primary[50]}`,
    },
    
    '&:disabled': {
      backgroundColor: colors.neutral[100],
      color: colors.neutral[400],
      borderColor: colors.neutral[200],
    },
  },
};

/**
 * ПРИМЕР 3: Создание Card компонента с использованием токенов
 */
export const cardExample = {
  style: {
    backgroundColor: colors.neutral[0],
    padding: spacing[6],
    borderRadius: borderRadius.lg,
    boxShadow: shadows.md,
    border: `1px solid ${colors.neutral[200]}`,
  },
};

/**
 * ПРИМЕР 4: Layout компоненты
 */
export const layoutExample = {
  container: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: spacing[4],
    paddingRight: spacing[4],
  },
  
  section: {
    padding: spacing[12],
    marginBottom: spacing[8],
  },
  
  grid: {
    display: 'grid',
    gap: spacing[6],
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
};

/**
 * ПРИМЕР 5: Текстовые стили
 */
export const textExample = {
  heading1: typography.styles.h1,
  heading2: typography.styles.h2,
  heading3: typography.styles.h3,
  bodyLarge: typography.styles.bodyLg,
  bodyBase: typography.styles.bodyBase,
  bodySmall: typography.styles.bodySm,
  caption: typography.styles.captionSm,
  label: typography.styles.labelBase,
};

/**
 * ПРИМЕР 6: Цветовые схемы для различных состояний
 */
export const colorSchemes = {
  // Схема для success состояния
  success: {
    background: colors.success[50],
    border: colors.success[200],
    text: colors.success[900],
    icon: colors.success[500],
  },
  
  // Схема для warning состояния
  warning: {
    background: colors.warning[50],
    border: colors.warning[200],
    text: colors.warning[900],
    icon: colors.warning[500],
  },
  
  // Схема для error состояния
  error: {
    background: colors.error[50],
    border: colors.error[200],
    text: colors.error[900],
    icon: colors.error[500],
  },
  
  // Схема для info состояния
  info: {
    background: colors.info[50],
    border: colors.info[200],
    text: colors.info[900],
    icon: colors.info[500],
  },
};

/**
 * ИНСТРУКЦИИ по миграции:
 * 
 * 1. Откройте компонент, который нужно обновить (например, AppButton.tsx)
 * 
 * 2. Добавьте импорт токенов в начало файла:
 *    import { colors, spacing, typography, ... } from '@/shared/config/theme';
 * 
 * 3. Замените хардкодные значения на значения из токенов:
 *    - Цвета: '##3b82f6' → colors.primary[500]
 *    - Отступы: '16px' → spacing[4]
 *    - Округления: '6px' → borderRadius.md
 *    - Тени: 'box-shadow: ...' → shadows.md
 *    - Типография: {...styles} → typography.styles.bodyBase
 * 
 * 4. Используйте семантические значения:
 *    - Вместо конкретных тонов используйте named tokens
 *    - colors.primary[500] лучше чем hardcode цвета
 *    - componentSizes.button.md лучше чем отдельные значения
 * 
 * 5. Тестируйте компонент после изменений
 * 
 * 6. Убедитесь, что все состояния (hover, active, disabled) используют токены
 */

export const migrationChecklist = [
  '[ ] Импортированы нужные токены',
  '[ ] Все хардкодные цвета заменены на colors.*',
  '[ ] Все отступы заменены на spacing[*]',
  '[ ] Все округления заменены на borderRadius.*',
  '[ ] Все тени заменены на shadows.*',
  '[ ] Все размеры компонентов используют componentSizes',
  '[ ] Все текстовые стили используют typography.styles',
  '[ ] Протестированы все состояния компонента',
  '[ ] Проверена адаптивность на мобильных устройствах',
  '[ ] Обновлена документация компонента',
];

/**
 * ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:
 * 
 * Q: Как обновить существующий компонент с MUI стилями?
 * A: Замените значения sx props на токены:
 *    Было: sx={{ backgroundColor: '#3b82f6' }}
 *    Стало: sx={{ backgroundColor: colors.primary[500] }}
 * 
 * Q: Можно ли использовать токены с CSS/SCSS?
 * A: Да, экспортируйте токены как CSS переменные в корневом стиле
 * 
 * Q: Что делать если нет подходящего токена?
 * A: Добавьте новый токен в design-tokens.ts и обновите типы в types.ts
 * 
 * Q: Как использовать токены с CSS-in-JS решениями (styled-components)?
 * A: Импортируйте токены и используйте их в шаблонах:
 *    - styled.button\`background: ${colors.primary[500]};\`
 * 
 * Q: Можно ли переопределить токены для конкретного компонента?
 * A: Да, но лучше использовать existing tokens. Если нужны custom -
 *    создайте их в папке компонента.
 */
