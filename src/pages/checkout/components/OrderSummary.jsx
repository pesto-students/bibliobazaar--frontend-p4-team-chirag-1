import { Stack, Typography } from "@mui/material";
import {
  CustomPaper,
  CustomTitle,
  Description,
  Image,
  OrderSummaryWrapper,
  Price,
  Quantity,
  TextContent,
  TextItem,
} from "../Checkout.styles";

const OrderSummary = () => {
  return (
    <CustomPaper>
      <CustomTitle>Order Summary</CustomTitle>
      <OrderSummaryWrapper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextContent>Image</TextContent>
          <TextContent>Description</TextContent>
          <TextContent>Quantity</TextContent>
          <TextContent>Price</TextContent>
        </Stack>
        {Array.from({ length: 2 }).map(() => (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Image>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm33lv0W92j2lTEfjP-AkuRKY1z7vPlKfYbQ&usqp=CAU"
                alt=""
                width={50}
                height={50}
              />
            </Image>
            <Description>
              <Stack direction="column">
                <Typography>Author name</Typography>
                <Typography>Narnia - Book name</Typography>
                <Typography>ISBN: 93234384</Typography>
              </Stack>
            </Description>
            <Quantity>
              <Typography>1</Typography>
            </Quantity>
            <Price>
              <Typography>Rs. 100</Typography>
            </Price>
          </Stack>
        ))}
      </OrderSummaryWrapper>
    </CustomPaper>
  );
};

export default OrderSummary;
