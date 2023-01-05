import { Box, Grid, Paper, Stack } from "@mui/material";
import { PageTitle, Wrapper } from "../../shared/styles/globalStyles";
import { RentDetailWrapper, TextContent } from "./RentDetail.styles";

const RentDetail = () => {
  return (
    <Wrapper>
      <RentDetailWrapper>
        <PageTitle align="center" mb={4}>
          Rent Details
        </PageTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Paper>
              <Box p={4}>
                <Stack flexDirection="column" gap="16px">
                  <Stack flexDirection="row">
                    <TextContent>Rent ID:</TextContent>
                    <TextContent>200BDFGJIKL</TextContent>
                  </Stack>
                  <Stack flexDirection="row">
                    <TextContent>Shipping Address:</TextContent>
                    <TextContent>RahulTeatei<br />18-102<br />address</TextContent>
                  </Stack>
                  <Stack flexDirection="row">
                    <TextContent>Payment Mode:</TextContent>
                    <TextContent>Net Banking</TextContent>
                  </Stack>
                  <Stack flexDirection="row">
                    <TextContent>Total Amount:</TextContent>
                    <TextContent>Rs. 320</TextContent>
                  </Stack>
                  <Stack flexDirection="row">
                    <TextContent>Date & Time:</TextContent>
                    <TextContent>11th Dec 2024 4:32:45</TextContent>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </RentDetailWrapper>
    </Wrapper>
  );
};

export default RentDetail;
