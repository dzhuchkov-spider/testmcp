import { Button, type ButtonProps } from "@mui/material";
import { colors, spacing, borderRadius, typography, componentSizes } from "@/shared/config/theme";

export interface AppButtonProps extends ButtonProps {}

export const AppButton = (props: AppButtonProps) => {
  return (
    <Button
      disableElevation
      disableFocusRipple
      disableRipple
      fullWidth
      sx={{
        height: componentSizes.button.md.height,
        minHeight: componentSizes.button.md.height,
        borderRadius: borderRadius.md,
        px: spacing[5],
        py: spacing[4],
        textTransform: "none",
        fontFamily: typography.fontFamily.base.stack,
        fontWeight: typography.fontWeight.semibold,
        fontSize: typography.fontSize.base.size,
        lineHeight: typography.fontSize.base.lineHeight,
        letterSpacing: typography.fontSize.base.letterSpacing,
        transition: 'all 200ms ease',
        
        // Default contained variant
        '&.MuiButton-contained': {
          backgroundColor: colors.brand.primary, // Красный от библиотеки
          color: colors.neutral[0],
          
          '&:hover': {
            backgroundColor: colors.red[700], // darker red
          },
          
          '&:active': {
            backgroundColor: colors.red[800], // even darker
          },
          
          '&:disabled': {
            backgroundColor: colors.neutral[300],
            color: colors.neutral[500],
          },
        },
        
        // Outlined variant
        '&.MuiButton-outlined': {
          borderColor: colors.brand.primary,
          color: colors.brand.primary,
          
          '&:hover': {
            backgroundColor: colors.red[50],
            borderColor: colors.red[700],
          },
          
          '&:disabled': {
            borderColor: colors.neutral[300],
            color: colors.neutral[400],
          },
        },
        
        // Text variant  
        '&.MuiButton-text': {
          color: colors.brand.primary,
          
          '&:hover': {
            backgroundColor: colors.red[50],
          },
          
          '&:disabled': {
            color: colors.neutral[400],
          },
        },
      }}
      {...props}
    />
  );
};
