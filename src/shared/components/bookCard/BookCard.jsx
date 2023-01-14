import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, styled } from "@mui/material";
import { useNavigate } from "react-router";

import { PrimaryButton } from "../../styles/globalStyles";

const BookCard = (props) => {
  const {
    data: {
      userId,
      rentExpected,
      availableBook,
      bookId,
      bookName,
      author,
      isbn,
      imageUrl,
    },
  } = props;
  const navigate = useNavigate();

  return (
    <CustomCard onClick={() => navigate(`/bookDetail/${bookId}/${userId}`)}>
      <CardActionArea>
        <CardImage
          component="img"
          image={imageUrl}
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
            <BookAuthor>{author}</BookAuthor>
            <BookTitle>{bookName}</BookTitle>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={0.5}
              mt={0.5}
            >
              <BookInfo>Price</BookInfo>
              <BookInfo>Rs. {rentExpected}</BookInfo>
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
