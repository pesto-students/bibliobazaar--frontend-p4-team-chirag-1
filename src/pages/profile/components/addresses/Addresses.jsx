import { Grid, Stack } from "@mui/material";
import axios from 'axios'
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { addressListUrl } from "../../../../config/Config";
import {
  PageSubTitle,
  PageTitle,
  PrimaryButton,
  Wrapper,
} from "../../../../shared/styles/globalStyles";
import { AddressName, AddressPaper, TextContent } from "./Addresses.styles";

const Addresses = () => {

  const [loader, setLoader] = useState(false)
  const [addressData, setAddressData] = useState([])

  useEffect(() => {
    addressList()
  }, [])

  const addressList = () => {
    axios
      .get(addressListUrl)
      .then((res) => {
        setLoader(true);
        if (res?.status === 200) {
          setAddressData([...res?.data])
        }
      })
      .catch((err) => {
        console.log("error", err);
        setLoader(false);
        toast.error(err?.message || "Something is wrong");
      });
  };

  useEffect(() => {
    console.log('addressData', addressData)
  }, [addressData])

  return (
    <Wrapper>
      <Stack direction="row" justifyContent="space-between" mb={6}>
        <PageSubTitle>Saved Addresses</PageSubTitle>
        <PrimaryButton>+ Add Address</PrimaryButton>
      </Stack>
      <Grid container spacing={3}>
        {addressData.map((address, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <AddressCard data={address} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const AddressCard = (props) => {

  const { data: {fullName, mobileNumber, pincode, houseNumber, area, landmark, city, state, addressType, isDefault } } = props

  return (
    <AddressPaper>
      <AddressName>{fullName}</AddressName>
      <TextContent>{houseNumber} {area} {city}</TextContent>
      <TextContent>{landmark}</TextContent>
      <TextContent>{state}</TextContent>
      <TextContent>Phone: {mobileNumber}</TextContent>
      <TextContent>Pincode: {pincode}</TextContent>
    </AddressPaper>
  );
};

export default Addresses;
