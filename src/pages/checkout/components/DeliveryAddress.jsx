import { Box, Radio, Stack } from "@mui/material";
import { useState } from "react";
import { BoldText, PrimaryButton } from "../../../shared/styles/globalStyles";
import { CustomPaper, CustomTitle, DeliveryAddressWrapper, TextItem } from "../Checkout.styles";

const DeliveryAddress = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <CustomPaper>
      <CustomTitle>Delivery Address</CustomTitle>
      <DeliveryAddressWrapper>
        <Stack py={4} alignItems="flex-start">
          <Stack direction="row" mb={2}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <TextItem>
              <BoldText>YATHENDRA</BoldText> H. No. 17-101,Upstairs, Sector-44
              Main Street, Kurnool, Andhra Pradesh, 518501, India, Phone number:
              9742788996
            </TextItem>
          </Stack>
          <Stack direction="row" mb={2}>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <TextItem>
              <BoldText>YATHENDRA</BoldText> H. No. 17-101,Upstairs, Sector-44
              Main Street, Kurnool, Andhra Pradesh, 518501, India, Phone number:
              9742788996
            </TextItem>
          </Stack>
          <Stack direction="row" mb={2}>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <TextItem>
              <BoldText>YATHENDRA</BoldText> H. No. 17-101,Upstairs, Sector-44
              Main Street, Kurnool, Andhra Pradesh, 518501, India, Phone number:
              9742788996
            </TextItem>
          </Stack>
          <Box mt={2}>
            <PrimaryButton>+ Add Address</PrimaryButton>
          </Box>
        </Stack>
      </DeliveryAddressWrapper>
    </CustomPaper>
  );
};

export default DeliveryAddress;
