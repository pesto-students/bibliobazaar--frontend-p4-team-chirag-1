import { Paper, styled, Typography } from "@mui/material";

export const CustomPaper = styled(Paper)((({ theme }) => ({
  borderRadius: '10px',
  padding: '16px',
})))

export const CustomTitle = styled(Typography)((({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  fontWeight: theme?.fontWeight?.xl,
  fontSize: theme?.fontSize?.md
})))