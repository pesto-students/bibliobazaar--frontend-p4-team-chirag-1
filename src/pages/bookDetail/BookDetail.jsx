import { Grid, Stack } from "@mui/material";
import { PrimaryText, Wrapper } from "../../shared/styles/globalStyles";
import {
  Author,
  Description,
  DescriptionPaper,
  Isbn,
  Title,
} from "./BookDetail.styles";
import ImageCard from "./components/ImageCard";

const BookDetail = () => {
  return (
    <Wrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <ImageCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DescriptionPaper>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Title>RICH DAD POOR DAD</Title>
              <Author>
                AUTHOR: <PrimaryText>ROBERT T. KIYOSAKI</PrimaryText>
              </Author>
              <Description>
                April of 2022 marks a 25-year milestone for the personal finance
                classic Rich Dad Poor Dad that still ranks as the #1 Personal
                Finance book of all time. And although 25 years have passed
                since Rich Dad Poor Dad was first published,readers will find
                that very little in the book itself has changed ― and for good
                reason.
              </Description>
              <Isbn>
                ISBN: <PrimaryText>9780007716951</PrimaryText>
              </Isbn>
            </Stack>
          </DescriptionPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          Buy
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default BookDetail;
