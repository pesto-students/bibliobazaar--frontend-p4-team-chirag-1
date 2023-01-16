import { Box, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

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
import { addToCartUrl, bookDetailUrl } from "../../config/Config";
import Spinner from "../../shared/components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../logic/reducers/userSlice";

const BookDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { bookId, userId } = useParams();
  const [loader, setLoader] = useState(false);
  const [bookInfo, setBookInfo] = useState({});
  const [cartLoader, setCartLoader] = useState(false);
  const [cartBookIds, setCartBookIds] = useState([]);

  const getBookDetails = () => {
    const info = { bookId, userId };
    axios
      .post(bookDetailUrl, info)
      .then((res) => {
        setLoader(true);
        if (res?.status === 200) {
          console.log(res?.data);
          setBookInfo({ ...res?.data?.[0] });
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoader(false);
        toast.error(err?.message || "Something is wrong");
      });
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  useEffect(() => {
    console.log(user?.cart?.contents);
    const bookIds = user?.cart?.contents?.map((item) => item?.bookId);
    console.log("bookIds", bookIds);
    setCartBookIds([...bookIds]);
  }, [user]);

  const addToCartFn = () => {
    const info = {
      bookId,
      ownerId: userId,
      ownerName: "Need to add",
      rent: bookInfo?.rentExpected,
      rentStatus: "On Rent",
      deliveryStatus: "Dispatched",
      bookImage: bookInfo?.bookId?.imageUrl,
      bookName: bookInfo?.bookId?.bookName,
      bookAuthor: bookInfo?.bookId?.author?.[0],
      isbn: bookInfo?.bookId?.isbn,
    };
    axios
      .post(addToCartUrl, info)
      .then((res) => {
        setCartLoader(true);
        if (res?.status === 200) {
          dispatch(updateCart(res?.data));
          setCartLoader(false);
          toast.success("Item added to cart successfully");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setCartLoader(false);
        toast.error(err?.message || "Something is wrong");
      });
  };

  return (
    <Wrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <ImageCard url={bookInfo?.bookId?.imageUrl} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DescriptionPaper>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Title>{bookInfo?.bookId?.bookName}</Title>
              <Author>
                AUTHOR:{" "}
                <PrimaryText>{bookInfo?.bookId?.author?.join(',')}</PrimaryText>
              </Author>
              <Description>{bookInfo?.bookId?.description}</Description>
              <Isbn>
                ISBN: <PrimaryText>{bookInfo?.bookId?.isbn}</PrimaryText>
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
                <SubText>Rs. {bookInfo?.rentExpected}</SubText>
              </Stack>
              {cartBookIds?.includes(bookId) ? (
                <PrimaryButton onClick={() => navigate(`/checkout`)}>
                  Go to Cart
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={() => addToCartFn()}>
                  {cartLoader ? <Spinner /> : "Add to Cart"}
                </PrimaryButton>
              )}
            </Stack>
          </BuyContainer>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default BookDetail;
