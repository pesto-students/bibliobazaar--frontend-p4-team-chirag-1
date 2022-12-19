import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, styled } from "@mui/material";
import { useNavigate } from "react-router";

import { PrimaryButton } from "../../styles/globalStyles";

const BookCard = () => {
  const navigate = useNavigate();

  return (
    <CustomCard onClick={() => navigate("/bookDetail")}>
      <CardActionArea>
        <CardImage
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm33lv0W92j2lTEfjP-AkuRKY1z7vPlKfYbQ&usqp=CAU"
          alt=""
          width={300}
          height={300}
        />
        <CardContent>
          <Stack
            direction="column"
            alignItems="flexStart"
            spacing={0.5}
            mt={0.5}
          >
            <BookAuthor>L. D. Goffigan</BookAuthor>
            <BookTitle>Fortress of Blood</BookTitle>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={0.5}
              mt={0.5}
            >
              <BookInfo>Price</BookInfo>
              <BookInfo>Rs. 100</BookInfo>
            </Stack>
          </Stack>
          <Stack mt={1} justifyContent="center" alignItems="center">
            <PrimaryButton>Check Out</PrimaryButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

export default BookCard;

const CustomCard = styled(Card)(() => ({
  borderRadius: "10px",
  // width: "auto",
  // minWidth: "300px",
}));

const CardImage = styled(CardMedia)(() => ({
  // minWidth: "300px",
  // minHeight: "300px",
  // width: '100%',
  // height: 'auto',
  objectFit: "contain",
}));

const BookAuthor = styled(Typography)(() => ({}));

const BookTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.md,
  fontWeight: theme?.fontWeight?.xl,
}));

const BookInfo = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.md,
}));
