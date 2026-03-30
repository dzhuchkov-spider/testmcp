# Design Tokens для MTGAGRO.PRO

Централизованная система дизайн-токенов для всего проекта.

## Структура

```
@/shared/config/theme/
├── design-tokens.ts      # Основные токены (цвета, типография, отступы и т.д.)
├── types.ts              # TypeScript типы для токенов
├── utils.ts              # Утилит-функции для работы с токенами
├── examples.ts           # Примеры использования
├── index.ts              # Экспорт всех токенов
└── README.md             # Этот файл
```

## Основные категории токенов

### 1. Цвета (Colors)

```typescript
import { colors } from '@/shared/config/theme';

// Первичные цвета
colors.primary[500]      // '#0ea5e9'
colors.secondary[500]    // '#22c55e' (зеленый для агро)

// Нейтральные цвета
colors.neutral[0]        // '#ffffff'
colors.neutral[900]      // '#111827'

// Семантические цвета
colors.success[500]
colors.warning[500]
colors.error[500]
colors.info[500]
```

### 2. Типография (Typography)

```typescript
import { typography } from '@/shared/config/theme';

// Font families
typography.fontFamily.base       // 'Inter, system-ui, sans-serif'
typography.fontFamily.mono       // 'Fira Code, monospace'

// Font sizes
typography.fontSize.base.size       // '16px'
typography.fontSize.base.lineHeight // '24px'

// Text styles (готовые комбинации)
typography.styles.h1
typography.styles.bodyBase
typography.styles.labelLg
```

### 3. Отступы (Spacing)

```typescript
import { spacing } from '@/shared/config/theme';

spacing[4]   // '16px'
spacing[8]   // '32px'
spacing[16]  // '64px'

// Или используйте семантические имена
import { spacingAlias } from '@/shared/config/theme';

spacingAlias.md          // '12px'
spacingAlias.lg          // '16px'
spacingAlias.component.buttonPaddingMd  // '12px 20px'
```

### 4. Размеры компонентов

```typescript
import { componentSizes } from '@/shared/config/theme';

componentSizes.button.md    // { height: '40px', padding: '10px 20px' }
componentSizes.input.lg     // { height: '48px', padding: '12px 16px' }
componentSizes.icon.md      // '24px'
componentSizes.avatar.lg    // '48px'
```

### 5. Другие токены

- **borderRadius** - Радиусы скругления
- **shadows** - Тени (box-shadow)
- **zIndex** - Слои (z-index)
- **breakpoints** - Брейкпоинты для адаптивности
- **transitions** - Длительности и функции анимаций

## Использование

### Базовое использование в компонентах

```typescript
import React from 'react';
import { colors, spacing, typography, borderRadius } from '@/shared/config/theme';

export function MyButton() {
  return (
    <button
      style={{
        backgroundColor: colors.primary[600],
        color: colors.neutral[0],
        padding: `${spacing[3]} ${spacing[4]}`,
        borderRadius: borderRadius.md,
        ...typography.styles.labelLg,
      }}
    >
      Нажимай
    </button>
  );
}
```

### Использование утилит-функций

```typescript
import { getColorByPath, getTransition, hexToRgba } from '@/shared/config/theme/utils';

// Получить цвет по пути
const primaryColor = getColorByPath('primary.500');  // '#0ea5e9'

// Создать переход
const transition = getTransition('fast', 'easeOut', 'background-color');
// Результат: 'background-color 100ms cubic-bezier(0, 0, 0.2, 1)'

// Конвертировать hex в rgba
const transparentColor = hexToRgba(colors.primary[500], 0.5);
```

### Типизированное использование (TypeScript)

```typescript
import type { ColorKey, FontSize, SpacingValue } from '@/shared/config/theme/types';

interface Props {
  color?: ColorKey;
  fontSize?: FontSize;
  padding?: SpacingValue;
}

export function Component({ color = 'primary', fontSize = 'base', padding = 4 }: Props) {
  // IDE подскажет все возможные значения
  return <div />;
}
```

### Адаптивность (Responsive)

```typescript
import { breakpoints } from '@/shared/config/theme';
import { getMediaQuery } from '@/shared/config/theme/utils';

const responsiveStyles = {
  // Mobile-first
  padding: spacing[2],
  fontSize: '14px',
  
  // Tablet and up
  [`@media ${getMediaQuery('md')}`]: {
    padding: spacing[4],
    fontSize: '16px',
  },
  
  // Desktop and up
  [`@media ${getMediaQuery('lg')}`]: {
    padding: spacing[6],
    fontSize: '18px',
  },
};
```

## Утилит-функции

### getColorByPath(path: string)
Получить цвет по пути (например: "primary.500")

```typescript
getColorByPath('primary.500')      // '#0ea5e9'
getColorByPath('error.600')        // '#dc2626'
```

### getSpacingValue(key: SpacingValue)
Получить значение отступа

```typescript
getSpacingValue(4)   // '16px'
getSpacingValue(8)   // '32px'
```

### getTypographyStyle(styleKey: string)
Получить полный стиль типографии

```typescript
getTypographyStyle('h1')        // { fontFamily: '...', fontSize: '36px', ... }
getTypographyStyle('bodyBase')  // { fontFamily: '...', fontSize: '16px', ... }
```

### getMediaQuery(breakpoint: string)
Создать медиа-запрос

```typescript
getMediaQuery('md')   // '(min-width: 768px)'
getMediaQuery('lg')   // '(min-width: 1024px)'
```

### getTransition(duration, timing, property)
Создать CSS transition

```typescript
getTransition('fast', 'easeOut', 'background-color')
// 'background-color 100ms cubic-bezier(0, 0, 0.2, 1)'
```

### hexToRgba(hex: string, alpha: number)
Конвертировать hex в rgba

```typescript
hexToRgba('#0ea5e9', 0.5)   // 'rgba(14, 165, 233, 0.5)'
```

### getContrastTextColor(bgColor: string)
Получить контрастный цвет текста (черный или белый)

```typescript
getContrastTextColor('#ffffff')  // '#000000'
getContrastTextColor('#000000')  // '#ffffff'
```

## Интеграция с CSS

### CSS Modules

```css
/* styles.module.css */
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

```typescript
// Экспортировать токены как CSS переменные
export function useCSSVariables() {
  const root = document.documentElement;
  Object.entries(colors.primary).forEach(([key, value]) => {
    root.style.setProperty(`--color-primary-${key}`, value);
  });
}
```

### Tailwind CSS Integration

Если используется Tailwind, можно расширить конфиг:

```javascript
// tailwind.config.js
import { colors, spacing, borderRadius } from '@/shared/config/theme';

export default {
  theme: {
    colors,
    spacing,
    borderRadius,
  },
};
```

## Best Practices

1. **Используйте токены везде** - Не пишите хардкодные значения цветов/отступов
2. **Предпочитайте семантические цвета** - Используйте `success`, `error`, `warning` вместо конкретных оттенков
3. **Типизируйте Props** - Используйте типы из `@/shared/config/theme/types`
4. **Используйте утилит-функции** - Они упрощают вычисления и преобразования
5. **Документируйте нестандартные токены** - Если создаете свои, добавьте комментарии

## Источник

Эта система дизайн-токенов основана на официальной библиотеке MTGAGRO.PRO:
https://www.figma.com/design/HVa7wLkYzGVNv3BalCaCun/Lib-%E2%80%93-MTGAgro.Pro

## Обновление токенов

При обновлении дизайна в Figma:
1. Обновите соответствующие значения в `design-tokens.ts`
2. Добавьте новые токены если требуется
3. Сохраните файл
4. Все компоненты автоматически получат новые значения

## Примеры

Смотрите `examples.ts` для примеров использования в реальных компонентах.
