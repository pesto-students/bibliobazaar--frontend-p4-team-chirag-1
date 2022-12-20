import { Grid } from "@mui/material";
import { PageTitle, Wrapper } from "../../shared/styles/globalStyles";
import DeliveryFee from "./components/DeliveryFee";

const Checkout = () => {
  return (
    <Wrapper>
      <PageTitle>Check Out</PageTitle>
      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={6}>
          1
        </Grid>
        <Grid item xs={12} md={6}>
          2
        </Grid>
        <Grid item xs={12} md={6}>
          <DeliveryFee />
        </Grid>
        <Grid item xs={12} md={6}>
          4
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Checkout;
