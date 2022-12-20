import { Grid, Stack } from "@mui/material";
import { PageTitle, PrimaryButton, Wrapper } from "../../shared/styles/globalStyles";
import DeliveryAddress from "./components/DeliveryAddress";
import DeliveryFee from "./components/DeliveryFee";
import OrderSummary from "./components/OrderSummary";
import PriceSummary from "./components/PriceSummary";

const Checkout = () => {
  return (
    <Wrapper>
      <PageTitle>Check Out</PageTitle>
      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={6}>
          <OrderSummary />
        </Grid>
        <Grid item xs={12} md={6}>
          <DeliveryAddress />
        </Grid>
        <Grid item xs={12} md={6}>
          <DeliveryFee />
        </Grid>
        <Grid item xs={12} md={6}>
          <PriceSummary />
        </Grid>
      </Grid>
      <Stack
        mt={4}
        justifyContent="center"
        alignItems="center"
      >
        <PrimaryButton>Make Payment</PrimaryButton>
      </Stack>
    </Wrapper>
  );
};

export default Checkout;
