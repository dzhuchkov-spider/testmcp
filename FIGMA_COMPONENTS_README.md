# Figma Components Implementation

## Overview
Created React components based on Figma designs using Material-UI and TypeScript, following the existing project patterns.

## Components Created

### 1. MenuItem Component
**Location**: `src/components/ui/MenuItem/`

**Features**:
- Supports states: Default, Hover, Focused
- Responsive variants: Web, Tablet
- Optional notification badge with count
- Full TypeScript support with proper interfaces
- Material-UI styled components

**Props**:
- `state?: 'Default' | 'Hover' | 'Focused'`
- `variant?: 'web' | 'tablet'`
- `text?: string`
- `showNotification?: boolean`
- `notificationCount?: number`
- `onClick?: () => void`
- `sx?: SxProps` (for custom styling)

### 2. MenuExit Component
**Location**: `src/components/ui/MenuExit/`

**Features**:
- Complete menu with 7 default items
- Exit button with icon
- Support for additional menu items
- Responsive design
- Material-UI styling

**Props**:
- `onExitClick?: () => void`
- `additionalItems?: MenuItemProps[]`

### 3. Design Tokens
**Location**: `src/components/ui/designTokens.ts`

Centralized design variables extracted from Figma:
- Colors (primary, text, background, badge colors)
- Spacing values
- Border radius values
- Typography settings
- Component dimensions
- Transitions

### 4. Example Component
**Location**: `src/components/ui/MenuExample.tsx`

Demonstrates usage of both components with different configurations.

## Design Variables Extracted

### Colors
- White: `#ffffff`
- Black Text: `#192434`
- Gray Text: `#a3a7ae`
- Gray Background: `#f6f7f7`
- Red Badge Background: `#f65e70`
- Icon Gray 1: `#47505d`
- Icon Gray 5: `#e8e9eb`

### Spacing
- 2px, 4px, 8px, 12px, 14px, 16px, 18px

### Border Radius
- 8px, 10px, 16px, 24px

### Typography
- Font Family: Inter
- Font Sizes: 11px, 14px
- Font Weights: 400 (Regular), 500 (Medium)
- Line Heights: 16px, 20px, 24px
- Letter Spacing: -0.22px, -0.28px, 0

## Usage Examples

```tsx
import { MenuItem, MenuExit } from '@/components/ui';

// Basic MenuItem
<MenuItem
  variant="web"
  text="Контактные данные"
  onClick={() => console.log('Clicked')}
/>

// MenuItem with notification
<MenuItem
  variant="web"
  text="Уведомления"
  showNotification={true}
  notificationCount={5}
  onClick={() => console.log('Notifications')}
/>

// Complete MenuExit
<MenuExit
  onExitClick={() => console.log('Exit')}
  additionalItems={[
    { text: 'Custom Item 1' },
    { text: 'Custom Item 2', showNotification: true }
  ]}
/>
```

## Technical Details

### Architecture
- Uses Material-UI styled components for consistent styling
- TypeScript with comprehensive type definitions
- Forward refs for proper component composition
- Follows existing project patterns (similar to PromoBanner)

### Figma Integration
- Design variables extracted using Figma MCP
- Component structure matches Figma designs exactly
- All spacing, colors, and typography preserved
- Node IDs preserved for potential future Figma sync

### Responsive Design
- Web variant shows text and arrow icons
- Tablet variant shows only icons
- Proper width and layout adjustments

## Files Created
1. `src/components/ui/MenuItem/MenuItem.tsx`
2. `src/components/ui/MenuItem/index.ts`
3. `src/components/ui/MenuExit/MenuExit.tsx`
4. `src/components/ui/MenuExit/index.ts`
5. `src/components/ui/designTokens.ts`
6. `src/components/ui/MenuExample.tsx`

All components are ready to use and follow the established project conventions.
