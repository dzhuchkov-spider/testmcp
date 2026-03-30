import { TextField, type TextFieldProps } from "@mui/material";

export type AppTextFieldProps = TextFieldProps;

export const AppTextField = (props: AppTextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      sx={{
        "& .MuiOutlinedInput-root": {
          height: 56,
          minHeight: 56,
          borderRadius: "8px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          paddingX: 2,
          backgroundColor: '#f9fafb',
          transition: 'all 0.2s ease',
          '& fieldset': {
            borderColor: '#e5e7eb',
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderColor: '#d1d5db',
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#10b981',
              borderWidth: '2px',
            },
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: '#f3f4f6',
            '& fieldset': {
              borderColor: '#e5e7eb',
            },
          },
        },
        "& .MuiOutlinedInput-input": {
          padding: "12px 16px",
          color: '#1f2937',
          fontFamily: "'Inter', sans-serif",
          '&::placeholder': {
            color: '#9ca3af',
            opacity: 1,
          },
        },
        "& .MuiInputLabel-outlined": {
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: '#6b7280',
          '&.Mui-focused': {
            color: '#10b981',
          },
        },
      }}
      {...props}
    />
  );
};
