import { Paper, styled, Typography } from "@mui/material";

export const DescriptionPaper = styled(Paper)(() => ({
  borderRadius: "10px",
  padding: "32px"
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.lg
}));

export const Author = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.md
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.sm
}));

export const Isbn = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.md
}));