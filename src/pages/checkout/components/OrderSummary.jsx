import { Stack } from "@mui/material"
import { CustomPaper, CustomTitle, OrderSummaryWrapper, TextContent, TextItem } from "../Checkout.styles"

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

        
      </OrderSummaryWrapper>
    </CustomPaper>
  )
}

export default OrderSummary