import { Box, CardHeader, Grid, Stack, Typography } from "@mui/material";
import {
  PrimaryButton,
  PrimaryText,
  Wrapper,
} from "../../shared/styles/globalStyles";
import {
  Author,
  BuyContainer,
  Description,
  DescriptionPaper,
  Heading,
  HeadingDiv,
  Isbn,
  SubText,
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
        <Grid item sm={12} md={4}>
          <BuyContainer>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={4}
            >
              <HeadingDiv>
                <Heading>Buy</Heading>
              </HeadingDiv>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
                width={"100%"}
                px={4}
              >
                <SubText>Rent Price</SubText>
                <SubText>Rs. 100</SubText>
              </Stack>
              <PrimaryButton >Add to Cart</PrimaryButton>
            </Stack>
          </BuyContainer>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default BookDetail;
