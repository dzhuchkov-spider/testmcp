/**
 * MainContainer Component
 * 
 * Универсальный контейнер для страниц приложения
 * Поддерживает разные размеры maxWidth для контроля ширины контента
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ============================================================================
// TYPES
// ============================================================================

export type MainContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface MainContainerProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Максимальная ширина контейнера
   * @default 'lg'
   */
  maxWidth?: MainContainerSize;
  
  /**
   * Отступы по горизонтали
   * @default true
   */
  horizontalPadding?: boolean;
  
  /**
   * Отступы по вертикали
   * @default false
   */
  verticalPadding?: boolean;
  
  /**
   * Дочерние элементы
   */
  children: React.ReactNode;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const MainContainerWrapper = styled(Box)<{
  $maxWidth: MainContainerSize;
  $horizontalPadding: boolean;
  $verticalPadding: boolean;
}>(({ theme, $maxWidth, $horizontalPadding, $verticalPadding }) => {
  const getMaxWidth = () => {
    switch ($maxWidth) {
      case 'sm':
        return '600px';
      case 'md':
        return '900px';
      case 'lg':
        return '1208px';
      case 'xl':
        return '1400px';
      case 'full':
        return '100%';
      default:
        return '1208px';
    }
  };

  const getPaddingX = () => {
    if (!$horizontalPadding) return '0px';
    return $maxWidth === 'full' ? '24px' : '0px';
  };

  const getPaddingY = () => {
    return $verticalPadding ? '24px' : '0px';
  };

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: getMaxWidth(),
    margin: '0 auto',
    padding: `${getPaddingY()} ${getPaddingX()}`,
    boxSizing: 'border-box',
  };
});

// ============================================================================
// COMPONENT
// ============================================================================

export const MainContainer = forwardRef<HTMLDivElement, MainContainerProps>(
  (
    {
      className,
      maxWidth = 'lg',
      horizontalPadding = true,
      verticalPadding = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <MainContainerWrapper
        ref={ref}
        className={className}
        $maxWidth={maxWidth}
        $horizontalPadding={horizontalPadding}
        $verticalPadding={verticalPadding}
        {...rest}
      >
        {children}
      </MainContainerWrapper>
    );
  }
);

MainContainer.displayName = 'MainContainer';
