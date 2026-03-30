/**
 * Утилит-функции для работы с дизайн-токенами
 */

import { theme } from './design-tokens';
import type { ColorKey, ColorShade, FontSize, SpacingValue } from './types';

/**
 * Получить цвет по пути (например: "primary.500", "neutral.800")
 * @param colorPath - Путь к цвету (например: "primary.500")
 * @returns Значение цвета в hex
 */
export function getColorByPath(colorPath: string): string | undefined {
  const [group, shade] = colorPath.split('.');
  const colorGroup = (theme.colors as Record<string, any>)[group];

  if (!colorGroup) return undefined;

  return colorGroup[shade] as string | undefined;
}

/**
 * Получить значение отступа
 * @param key - Ключ отступа (например: 4, 8, 16)
 * @returns Значение отступа в px
 */
export function getSpacingValue(key: SpacingValue): string {
  return theme.spacing[key];
}

/**
 * Получить стили типографии
 * @param styleKey - Ключ стиля (h1, h2, bodyBase и т.д.)
 * @returns Объект со стилями типографии
 */
export function getTypographyStyle(styleKey: string) {
  const styles = theme.typography.styles as Record<string, any>;
  return styles[styleKey] || styles.bodyBase;
}

/**
 * Конвертировать CSS значение отступа в число (в px)
 * @param value - Значение (например: "16px")
 * @returns Числовое значение в px
 */
export function getSpacingNumber(value: string): number {
  return parseInt(value, 10);
}

/**
 * Создать медиа-запрос для брейкпоинта
 * @param breakpoint - Ключ брейкпоинта (sm, md, lg и т.д.)
 * @returns Строка для медиа-запроса
 */
export function getMediaQuery(breakpoint: keyof typeof theme.breakpoints): string {
  const value = theme.breakpoints[breakpoint];
  return `(min-width: ${value})`;
}

/**
 * Получить переход (transition) по параметрам
 * @param duration - Длительность (fast, base, slow и т.д.)
 * @param timing - Функция timing (ease, easeOut и т.д.)
 * @param property - Свойство для transition (по умолчанию "all")
 * @returns Строка для CSS transition
 */
export function getTransition(
  duration: keyof typeof theme.transitions.duration = 'base',
  timing: keyof typeof theme.transitions.timing = 'easeInOut',
  property = 'all'
): string {
  const dur = theme.transitions.duration[duration];
  const tim = theme.transitions.timing[timing];
  return `${property} ${dur} ${tim}`;
}

/**
 * Получить значение z-index
 * @param layer - Слой (dropdown, modal, tooltip и т.д.)
 * @returns Числовое значение z-index
 */
export function getZIndex(layer: keyof typeof theme.zIndex): number {
  return theme.zIndex[layer];
}

/**
 * Получить тень (box-shadow)
 * @param shadowKey - Ключ тени (xs, sm, md, lg и т.д.)
 * @returns Значение для box-shadow
 */
export function getShadow(shadowKey: keyof typeof theme.shadows): string {
  return theme.shadows[shadowKey];
}

/**
 * Смешивание цветов (простой вспомогательный метод)
 * Преобразует hex в rgba с opacity
 * @param hex - Hex цвет
 * @param alpha - Альфа канал (0-1)
 * @returns Rgba значение
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Получить контрастный текстовый цвет (черный или белый) для фона
 * @param bgColor - Цвет фона (hex)
 * @returns Цвет текста (черный или белый)
 */
export function getContrastTextColor(bgColor: string): '#000000' | '#ffffff' {
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Получить все цвета определенной группы
 * @param colorGroupKey - Ключ группы цветов (primary, secondary, neutral и т.д.)
 * @returns Объект со всеми оттенками цвета
 */
export function getColorGroup(colorGroupKey: ColorKey) {
  return theme.colors[colorGroupKey];
}
