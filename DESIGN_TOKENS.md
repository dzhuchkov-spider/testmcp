# MTGAGRO.PRO - Дизайн-система и токены

## 📋 Обзор

Полная система дизайн-токенов для проекта MTGAGRO.PRO, включающая все цвета, типографию, отступы, размеры компонентов и других переиспользуемые значения дизайна.

## 📁 Структура проекта

```
src/
├── shared/
│   ├── config/                          # Конфигурация проекта
│   │   ├── theme/                       # ⭐ Дизайн-токены
│   │   │   ├── design-tokens.ts         # Основные токены
│   │   │   ├── types.ts                 # TypeScript типы
│   │   │   ├── utils.ts                 # Утилит-функции
│   │   │   ├── examples.ts              # Примеры
│   │   │   ├── index.ts                 # Экспорты
│   │   │   └── README.md                # Документация
│   │   ├── MIGRATION_GUIDE.md           # Гайд миграции компонентов
│   │   └── index.ts                     # Главный экспорт
│   └── ui/                              # Компоненты UI
│       ├── AppButton.tsx
│       ├── AppTextField.tsx
│       └── ...
├── entities/
├── features/
├── pages/
└── app/
```

## 🎨 Доступные токены

### Цвета (Colors)
- `primary` - Основной синий цвет
- `secondary` - Зеленый для агротехнологии
- `neutral` - Нейтральные оттенки
- `success`, `warning`, `error`, `info` - Семантические цвета

```typescript
import { colors } from '@/shared/config/theme';

colors.primary[500]      // '#0ea5e9'
colors.success[600]      // '#16a34a'
colors.neutral.neutral[900]     // '#111827'
```

### Типография (Typography)
- Font families: `base`, `serif`, `mono`
- Font sizes: `xs` → `4xl`
- Font weights: `thin` → `black`
- Готовые стили: `h1` → `h6`, `body*`, `label*`, `caption*`

```typescript
import { typography } from '@/shared/config/theme';

typography.fontSize.base         // { size: '16px', lineHeight: '24px' }
typography.styles.h1             // Полный стиль для H1
typography.fontFamily.base.stack  // 'Inter, system-ui, ...'
```

### Отступы (Spacing)
Шкала от 4px до 384px, а также семантические значения

```typescript
import { spacing, spacingAlias } from '@/shared/config/theme';

spacing[4]               // '16px'
spacingAlias.lg          // '16px'
spacingAlias.component.buttonPaddingMd  // '12px 20px'
```

### Размеры компонентов (Component Sizes)
Предзаготовленные размеры для кнопок, инпутов, иконок

```typescript
import { componentSizes } from '@/shared/config/theme';

componentSizes.button.md    // { height: '40px', padding: '10px 20px' }
componentSizes.input.lg     // { height: '48px', padding: '12px 16px' }
componentSizes.icon.md      // '24px'
```

### Другие токены
- `borderRadius` - Скругления (0px → 9999px)
- `shadows` - Тени от xs до 2xl
- `zIndex` - Слои компонентов
- `breakpoints` - Точки адаптивности
- `transitions` - Длительности и timing функции

## 🚀 Быстрый старт

### 1. Базовое использование в компонентах

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
      Нажимай!
    </button>
  );
}
```

### 2. Использование утилит-функций

```typescript
import { getColorByPath, getTransition, hexToRgba } from '@/shared/config/theme/utils';

const primaryColor = getColorByPath('primary.500');      // '#0ea5e9'
const transition = getTransition('fast', 'easeOut');     // CSS transition
const hoverColor = hexToRgba(colors.primary[500], 0.8);  // rgba(...)
```

### 3. Типизированное использование

```typescript
import type { ColorKey, FontSize, SpacingValue } from '@/shared/config/theme/types';

interface ButtonProps {
  color?: ColorKey;
  size?: FontSize;
  padding?: SpacingValue;
}

export function Button({ color = 'primary', size = 'base', padding = 4 }: ButtonProps) {
  // IDE подскажет все возможные значения!
}
```

### 4. Адаптивные стили

```typescript
import { breakpoints } from '@/shared/config/theme';
import { getMediaQuery } from '@/shared/config/theme/utils';

const responsiveStyles = {
  padding: spacing[2],
  [`@media ${getMediaQuery('md')}`]: {
    padding: spacing[4],
  },
  [`@media ${getMediaQuery('lg')}`]: {
    padding: spacing[6],
  },
};
```

## 📚 Документация

- **[theme/README.md](./src/shared/config/theme/README.md)** - Полная документация токенов
- **[theme/examples.ts](./src/shared/config/theme/examples.ts)** - Примеры использования
- **[MIGRATION_GUIDE.md](./src/shared/config/MIGRATION_GUIDE.md)** - Как обновить существующие компоненты

## 🔄 Миграция существующих компонентов

Смотрите [MIGRATION_GUIDE.md](./src/shared/config/MIGRATION_GUIDE.md) для инструкций по обновлению компонентов.

**Основные шаги:**
1. Импортируйте нужные токены
2. Замените хардкодные значения на значения из токенов
3. Используйте типы для типизации props
4. Тестируйте все состояния компонента

## 🎯 Best Practices

1. ✅ **Используйте токены везде** - Не пишите хардкодные значения
2. ✅ **Предпочитайте семантические цвета** - `success`, `error`, `warning` вместо конкретных оттенков
3. ✅ **Типизируйте обо всех** - Используйте типы из `types.ts`
4. ✅ **Используйте утилит-функции** - Они упростят вычисления
5. ✅ **Документируйте нестандартные решения** - Если создаете custom токены

## 🔗 Источник дизайна

- **Figma библиотека:** https://www.figma.com/design/HVa7wLkYzGVNv3BalCaCun/Lib-%E2%80%93-MTGAgro.Pro--Copy-13.03---Copy-

## 📝 Команды

```bash
# Просмотр структуры
ls -la src/shared/config/

# Поиск использования токенов в проекте
grep -r "colors\." src/

# Проверка типов
npm run check-types
```

## 🆘 Помощь

- Полная документация в `theme/README.md`
- Примеры в `theme/examples.ts`
- Гайд миграции в `MIGRATION_GUIDE.md`

## 📊 Статистика

- **Цветовых палитр:** 9 (primary, secondary, neutral, success, warning, error, info, brand)
- **Размеров текста:** 8 (xs → 4xl)
- **Значений отступов:** 23 (0px → 384px)
- **Размеров компонентов:** 20+
- **Типов border-radius:** 9
- **Типов тени:** 7
- **Breakpoints:** 6

---

Создано: 30 марта 2026 года
Источник: Figma MTGAGRO.PRO Library
