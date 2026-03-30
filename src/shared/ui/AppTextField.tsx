import { TextField, type TextFieldProps } from "@mui/material";
import { colors, spacing, borderRadius, typography, componentSizes } from "@/shared/config/theme";

export type AppTextFieldProps = TextFieldProps;

export const AppTextField = (props: AppTextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          height: componentSizes.input.md.height,
          minHeight: componentSizes.input.md.height,
          borderRadius: borderRadius.md,
          fontFamily: typography.fontFamily.base.stack,
          fontSize: typography.fontSize.base.size,
          fontWeight: typography.fontWeight.normal,
          paddingX: spacing[3],
          backgroundColor: colors.neutral[50],
          transition: 'all 0.2s ease',
          '& fieldset': {
            borderColor: colors.neutral[300],
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderColor: colors.neutral[400],
          },
          '&.Mui-focused': {
            backgroundColor: colors.neutral[0],
            '& fieldset': {
              borderColor: colors.brand.primary,
              borderWidth: '2px',
            },
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: colors.neutral[100],
            '& fieldset': {
              borderColor: colors.neutral[200],
            },
          },
        },
        "& .MuiOutlinedInput-input": {
          padding: `${spacing[3]} ${spacing[4]}`,
          color: colors.neutral[900],
          fontFamily: typography.fontFamily.base.stack,
          '&::placeholder': {
            color: colors.neutral[400],
            opacity: 1,
          },
        },
        "& .MuiInputLabel-outlined": {
          fontFamily: typography.fontFamily.base.stack,
          fontSize: typography.fontSize.sm.size,
          fontWeight: typography.fontWeight.medium,
          color: colors.neutral[500],
          '&.Mui-focused': {
            color: colors.brand.primary,
          },
        },
      }}
      {...props}
    />
  );
};
