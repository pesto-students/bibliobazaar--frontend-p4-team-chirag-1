import { Paper, styled, Typography } from "@mui/material";

export const AddressPaper = styled(Paper)(({ theme }) => ({
  padding: "8px 16px"
}));

export const AddressName = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.xs,
  fontWeight: theme?.fontWeight?.xl
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  
}));