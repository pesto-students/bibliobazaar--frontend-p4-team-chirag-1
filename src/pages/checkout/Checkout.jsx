import { Grid, Stack } from "@mui/material";
import axios from "axios";
import { checkout, paymentVerify } from "../../config/Config";

import {
  PageTitle,
  PrimaryButton,
  Wrapper,
} from "../../shared/styles/globalStyles";
import DeliveryAddress from "./components/DeliveryAddress";
import DeliveryFee from "./components/DeliveryFee";
import OrderSummary from "./components/OrderSummary";
import PriceSummary from "./components/PriceSummary";

const Checkout = () => {
  const razorpayId = process.env.REACT_APP_RAZORPAY_ID;

  const paymentVerifyFn = async (response) => {
    console.log(response);
    if (
      response.razorpay_payment_id &&
      response.razorpay_order_id &&
      response.razorpay_signature
    ) {
      const info = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      };
      const result = await axios.post(paymentVerify, info);
      console.log("result", result);
      // Need to add toast
    }
  };

  const makePayment = async (amount) => {
    console.log("process.env", process.env.REACT_APP_BASE_URL);

    const {
      data: { message, data },
    } = await axios.post(checkout, { amount });

    if (message === "Success") {
      const options = {
        key: razorpayId,
        amount: data.amount,
        currency: "INR",
        name: "RazorPay Test",
        description: "Bibliobazar payment description",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: data.id,
        // callback_url: "http://localhost:8080/payment/verify",
        handler: function (response) {
          paymentVerifyFn(response);
        },
        prefill: {
          name: "Yathendra",
          email: "yathendra@example.com",
          contact: "9742788996",
        },
        notes: {
          address: "BiblioBazaar Corporate Office",
        },
        theme: {
          color: "#9A98F0",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    }
  };

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
      <Stack mt={4} justifyContent="center" alignItems="center">
        <PrimaryButton onClick={() => makePayment(100)}>
          Make Payment
        </PrimaryButton>
      </Stack>
    </Wrapper>
  );
};

export default Checkout;
