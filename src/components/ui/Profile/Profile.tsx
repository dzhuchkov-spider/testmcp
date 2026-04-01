/**
 * Profile Component
 * 
 * Компонент профиля из Figma Design Library
 * Базируется на существующих компонентах Header и Company
 */

import React, { forwardRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Header } from '../Header/Header';
import { Company } from '../Company/Company';
import { COLORS, SPACING, CORNERS, TYPOGRAPHY } from '../designTokens';

// ============================================================================
// TYPES
// ============================================================================

export type ProfileView = 'contact' | 'notifications';

export interface ProfileProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Текущее представление профиля
   * @default 'contact'
   */
  currentView?: ProfileView;
  
  /**
   * Обработчик смены представления
   */
  onViewChange?: (view: ProfileView) => void;
  
  /**
   * Material-UI sx prop для дополнительного стилизования
   */
  sx?: object;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ProfileContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1512px',
  gap: '0px',
  position: 'relative',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Profile = forwardRef<HTMLDivElement, ProfileProps>(
  (
    {
      className,
      currentView = 'contact',
      onViewChange,
      sx,
      ...rest
    },
    ref
  ) => {
    const handleProfileClick = () => {
      if (currentView === 'contact' && onViewChange) {
        onViewChange('notifications');
      }
    };

    const handleBackToContact = () => {
      if (currentView === 'notifications' && onViewChange) {
        onViewChange('contact');
      }
    };

    return (
      <ProfileContainer
        ref={ref}
        className={className}
        sx={sx}
        {...rest}
      >
        <ContentContainer>
          <Header
            size="Desk"
            state="Logged in"
            onProfileClick={handleProfileClick}
            basketCount={24}
            likeCount={3}
          />
          
          {currentView === 'contact' && (
            <Box sx={{ 
              width: '100%', 
              backgroundColor: COLORS.white,
              borderTop: `1px solid ${COLORS.grayBg}`,
              borderBottom: `1px solid ${COLORS.grayBg}`,
              boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.02)',
              py: SPACING[8],
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box sx={{ 
                width: '1208px', 
                display: 'flex', 
                alignItems: 'center',
                gap: SPACING[12]
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: SPACING[2],
                  justifyContent: 'center'
                }}>
                  <Box 
                    component="h3"
                    sx={{
                      fontFamily: TYPOGRAPHY.fontFamily,
                      fontSize: TYPOGRAPHY.fontSize16,
                      fontWeight: TYPOGRAPHY.fontWeightSemiBold,
                      lineHeight: TYPOGRAPHY.lineHeight24,
                      color: COLORS.blackText,
                      margin: 0
                    }}
                  >
                    ООО «Добронравов групп»
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: SPACING[12], 
                    alignItems: 'center' 
                  }}>
                    <Box 
                      component="p"
                      sx={{
                        fontFamily: TYPOGRAPHY.fontFamily,
                        fontSize: TYPOGRAPHY.fontSize14,
                        fontWeight: TYPOGRAPHY.fontWeightRegular,
                        lineHeight: TYPOGRAPHY.lineHeight20,
                        color: COLORS.blackText,
                        margin: 0
                      }}
                    >
                      г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      transform: 'rotate(-90deg) scaleY(-1)'
                    }}>
                      <Box sx={{
                        backgroundColor: COLORS.grayBg,
                        borderRadius: CORNERS[10],
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          width: '9px',
                          height: '10.5px',
                          backgroundColor: COLORS.iconGray1,
                          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)'
                        }
                      }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          
          {currentView === 'notifications' && (
            <Box sx={{ 
              width: '100%', 
              backgroundColor: COLORS.white,
              borderTop: `1px solid ${COLORS.grayBg}`,
              borderBottom: `1px solid ${COLORS.grayBg}`,
              boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.02)',
              py: SPACING[16],
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box sx={{ 
                width: '1208px', 
                display: 'flex', 
                alignItems: 'center',
                gap: SPACING[16]
              }}>
                <Box 
                  component="button"
                  onClick={handleBackToContact}
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: SPACING[8]
                  }}
                >
                  <Box sx={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: COLORS.white,
                    border: `1px solid ${COLORS.grayBg}`,
                    borderRadius: CORNERS[12],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.12)',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: '15.25px',
                      height: '16.25px',
                      backgroundColor: COLORS.iconGray1,
                      clipPath: 'polygon(0 50%, 75% 0, 75% 35%, 100% 35%, 100% 65%, 75% 65%, 75% 100%)',
                      transform: 'translateX(-20%)'
                    }
                  }} />
                  <Box 
                    component="span"
                    sx={{
                      fontFamily: TYPOGRAPHY.fontFamily,
                      fontSize: TYPOGRAPHY.fontSize14,
                      fontWeight: TYPOGRAPHY.fontWeightSemiBold,
                      lineHeight: TYPOGRAPHY.lineHeight18,
                      color: COLORS.redLink,
                    }}
                  >
                    К контактным данным
                  </Box>
                </Box>
                
                <Box 
                  component="h2"
                  sx={{
                    fontFamily: TYPOGRAPHY.fontFamily,
                    fontSize: TYPOGRAPHY.fontSize18,
                    fontWeight: TYPOGRAPHY.fontWeightSemiBold,
                    lineHeight: TYPOGRAPHY.lineHeight22,
                    color: COLORS.blackText,
                    margin: 0,
                    letterSpacing: TYPOGRAPHY.letterSpacingNeg018
                  }}
                >
                  Уведомления
                </Box>
              </Box>
            </Box>
          )}
        </ContentContainer>
      </ProfileContainer>
    );
  }
);

Profile.displayName = 'Profile';
