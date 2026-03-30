import { Button, type ButtonProps } from "@mui/material";

export interface AppButtonProps extends ButtonProps {}

export const AppButton = (props: AppButtonProps) => {
  return (
    <Button
      disableElevation
      disableFocusRipple
      disableRipple
      fullWidth
      sx={{
        height: 56,
        minHeight: 56,
        borderRadius: "12px",
        px: 2.5,
        py: 2,
        textTransform: "none",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0px",
      }}
      {...props}
    />
  );
};
