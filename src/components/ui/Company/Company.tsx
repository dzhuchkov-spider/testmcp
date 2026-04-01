/**
 * Company Component
 * 
 * Пиксель-перфект компонент компании из Figma Design Library
 * Точные размеры и позиционирование как в дизайне
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ============================================================================
// DESIGN TOKENS (точные значения из Figma)
// ============================================================================

const COLORS = {
  white: '#ffffff',
  grayBg: '#f6f7f7',
  blackText: '#192434',
  grayText: '#a3a7ae',
  iconGray5: '#e8e9eb',
  redLink: '#f4364c',
} as const;

const SPACING = {
  4: '4px',
  8: '8px',
  12: '12px',
  20: '20px',
  24: '24px',
} as const;

const CORNERS = {
  10: '10px',
  16: '16px',
} as const;

const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  fontSize14: '14px',
  fontSize16: '16px',
  fontSize18: '18px',
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  lineHeight18: '18px',
  lineHeight20: '20px',
  lineHeight22: '22px',
  letterSpacingNeg018: '-0.18px',
  letterSpacingNeg024: '-0.24px',
  letterSpacing0: '0',
} as const;

// ============================================================================
// TYPES
// ============================================================================

export type CompanyType = 'Default' | 'Reg';

export interface CompanyProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Тип компонента
   * @default 'Default'
   */
  type?: CompanyType;
  
  /**
   * Показывать ли иконку замка
   * @default false
   */
  showLockIcon?: boolean;
  
  /**
   * Material-UI sx prop для дополнительного стилизования
   */
  sx?: object;
}

// ============================================================================
// STYLED COMPONENTS (точные размеры из Figma)
// ============================================================================

const CompanyContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{
  $type: CompanyType;
}>(({ theme, $type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.white,
  border: `1px solid ${COLORS.grayBg}`,
  borderRadius: CORNERS[16],
  padding: `${SPACING[20]} ${SPACING[24]}`,
  gap: `${SPACING[24]}`,
  width: '456px',
  position: 'relative',
  boxSizing: 'border-box',
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${SPACING[12]}`,
  alignItems: 'flex-start',
  justifyContent: 'center',
  flex: '1 0 0',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
}));

const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: `${SPACING[8]}`,
  alignItems: 'center',
  justifyContent: 'center',
  height: '22px',
  flexShrink: 0,
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize18,
  fontWeight: TYPOGRAPHY.fontWeightSemiBold,
  lineHeight: TYPOGRAPHY.lineHeight22,
  color: COLORS.blackText,
  letterSpacing: TYPOGRAPHY.letterSpacingNeg018,
  height: '100%',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 0',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '344px',
}));

const CompanyAddress = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightRegular,
  lineHeight: TYPOGRAPHY.lineHeight20,
  color: COLORS.blackText,
  width: 'min-content',
  minWidth: '100%',
  flexShrink: 0,
}));

const LockIconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.iconGray5,
  borderRadius: '120px',
  overflow: 'hidden',
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
}));

const LockIconInner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '9px',
  height: '10.5px',
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.grayBg,
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  padding: `${SPACING[8]}`,
  borderRadius: CORNERS[10],
  width: '40px',
  height: '40px',
  position: 'relative',
  flexShrink: 0,
}));

const SwapIconContainer = styled(Box)(({ theme }) => ({
  gridColumn: '1',
  gridRow: '1',
  width: '30px',
  height: '30px',
  flexShrink: 0,
  position: 'relative',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
}));

const RegTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${SPACING[12]}`,
  alignItems: 'flex-start',
  justifyContent: 'center',
  flex: '1 0 0',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
}));

const RegText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: TYPOGRAPHY.fontSize16,
  fontWeight: TYPOGRAPHY.fontWeightRegular,
  lineHeight: TYPOGRAPHY.lineHeight20,
  color: COLORS.blackText,
  letterSpacing: TYPOGRAPHY.letterSpacingNeg024,
  width: 'min-content',
  minWidth: '100%',
  flexShrink: 0,
}));

const LinkButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexShrink: 0,
  position: 'relative',
}));

const LinkButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: `${SPACING[4]}`,
  padding: `${SPACING[4]} 0`,
  flexShrink: 0,
  position: 'relative',
}));

const LinkButtonTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 0',
  flexShrink: 0,
}));

const LinkButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightSemiBold,
  lineHeight: TYPOGRAPHY.lineHeight18,
  color: COLORS.redLink,
  textAlign: 'center',
  whiteSpace: 'nowrap',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Company = forwardRef<HTMLDivElement, CompanyProps>(
  (
    {
      className,
      type = 'Default',
      showLockIcon = false,
      sx,
      ...rest
    },
    ref
  ) => {
    const isDefault = type === 'Default';
    const isReg = type === 'Reg';

    return (
      <CompanyContainer
        ref={ref}
        className={className}
        $type={type}
        sx={sx}
        {...rest}
        data-node-id={isReg ? "205:7086" : "77:36505"}
      >
        {isDefault && (
          <>
            <TitleContainer data-name="Title" data-node-id="77:36507">
              <TitleRow data-node-id="247:6521">
                <CompanyName data-node-id="80:9865">
                  ООО «Добронравов групп»
                </CompanyName>
                
                {showLockIcon && (
                  <LockIconContainer data-name="Icon" data-node-id="247:6522">
                    <LockIconInner data-node-id="I247:6522;247:6285">
                      <Box 
                        data-node-id="I247:6522;247:6286"
                        sx={{
                          position: 'absolute',
                          inset: '-5.71% -6.67%',
                          '& img': {
                            display: 'block',
                            maxWidth: 'none',
                            width: '100%',
                            height: '100%',
                          }
                        }}
                      >
                        {/* Lock icon would be implemented here as SVG or imported icon */}
                      </Box>
                    </LockIconInner>
                  </LockIconContainer>
                )}
              </TitleRow>
              
              <CompanyAddress data-node-id="77:36509">
                г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В
              </CompanyAddress>
            </TitleContainer>
            
            <ActionButtonsContainer data-node-id="80:9459">
              <SwapIconContainer data-name="Basic Icon / 24" data-node-id="80:9460">
                {/* Swap icon would be implemented here as SVG or imported icon */}
              </SwapIconContainer>
            </ActionButtonsContainer>
          </>
        )}
        
        {isReg && (
          <>
            <IconContainer data-node-id="49:2934">
              {/* Company icon would be implemented here as SVG or imported icon */}
            </IconContainer>
            
            <RegTextContainer data-name="Title" data-node-id="205:6858">
              <RegText data-node-id="205:6860">
                Зарегистрируйтесь как юридическое лицо, чтобы разблокировать все функции приложения
              </RegText>
            </RegTextContainer>
            
            <LinkButtonContainer data-name="Link Buttons" data-node-id="205:6861">
              <LinkButton data-name="Desktop / Base buttons" data-node-id="I205:6861;23:4915">
                <LinkButtonTextContainer data-name="Button Text" data-node-id="I205:6861;23:4915;20:1934">
                  <LinkButtonText data-node-id="I205:6861;23:4915;20:1905">
                    Зарегистрировать юр.лицо
                  </LinkButtonText>
                </LinkButtonTextContainer>
              </LinkButton>
            </LinkButtonContainer>
          </>
        )}
      </CompanyContainer>
    );
  }
);

Company.displayName = 'Company';
