/**
 * Typography Components
 * 
 * Предустановленные компоненты для различных типов текста
 * Используют стили из theme.typography
 */

import { forwardRef, type HTMLAttributes } from 'react';
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6,
  BodyLarge,
  BodySmall,
  LabelLarge,
  LabelSmall,
  Caption,
} from './Typography.styles';

// Heading Components

export interface TypographyProps extends HTMLAttributes<HTMLElement> {}

export const Heading1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH1 ref={ref as any} {...props}>
      {children}
    </HeadingH1>
  )
);
Heading1.displayName = 'Heading1';

export const Heading2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH2 ref={ref as any} {...props}>
      {children}
    </HeadingH2>
  )
);
Heading2.displayName = 'Heading2';

export const Heading3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH3 ref={ref as any} {...props}>
      {children}
    </HeadingH3>
  )
);
Heading3.displayName = 'Heading3';

export const Heading4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH4 ref={ref as any} {...props}>
      {children}
    </HeadingH4>
  )
);
Heading4.displayName = 'Heading4';

export const Heading5 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH5 ref={ref as any} {...props}>
      {children}
    </HeadingH5>
  )
);
Heading5.displayName = 'Heading5';

export const Heading6 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <HeadingH6 ref={ref as any} {...props}>
      {children}
    </HeadingH6>
  )
);
Heading6.displayName = 'Heading6';

// Body Components

export const Body1 = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <BodyLarge ref={ref as any} as="p" {...props}>
      {children}
    </BodyLarge>
  )
);
Body1.displayName = 'Body1';

export const Body2 = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <BodySmall ref={ref as any} as="p" {...props}>
      {children}
    </BodySmall>
  )
);
Body2.displayName = 'Body2';

// Label Components

export const Label1 = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <LabelLarge ref={ref as any} as="span" {...props}>
      {children}
    </LabelLarge>
  )
);
Label1.displayName = 'Label1';

export const Label2 = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <LabelSmall ref={ref as any} as="span" {...props}>
      {children}
    </LabelSmall>
  )
);
Label2.displayName = 'Label2';

// Caption Component

export const CaptionText = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, ...props }, ref) => (
    <Caption ref={ref as any} as="span" {...props}>
      {children}
    </Caption>
  )
);
CaptionText.displayName = 'CaptionText';
