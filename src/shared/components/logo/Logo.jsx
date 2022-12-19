import { styled, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  cursor: "pointer",
  fontWeight: theme?.fontWeight?.xxl,
  fontSize: theme?.fontSize?.xl,
  color: theme?.palette?.logo,
}));

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoTypography onClick={() => navigate("/")}>BiblioBazaar</LogoTypography>
  );
};

export default Logo;
