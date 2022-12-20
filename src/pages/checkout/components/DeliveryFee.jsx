import { Radio, Stack } from "@mui/material";
import { useState } from "react";
import {
  CustomPaper,
  CustomSubPaper,
  CustomTitle,
  TextItem,
} from "../Checkout.styles";

const DeliveryFee = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <CustomPaper>
      <CustomTitle>Select Delivery Fee</CustomTitle>
      <CustomSubPaper>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <TextItem>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            Normal
          </TextItem>
          <TextItem>Rs. 20</TextItem>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <TextItem>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            Speed
          </TextItem>
          <TextItem>Rs. 50</TextItem>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <TextItem>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            Super Fast
          </TextItem>
          <TextItem>Rs. 100</TextItem>
        </Stack>
      </CustomSubPaper>
    </CustomPaper>
  );
};

export default DeliveryFee;
