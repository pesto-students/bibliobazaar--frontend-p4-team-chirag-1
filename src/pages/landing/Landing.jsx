import { Grid } from "@mui/material";
import * as React from 'react';
import {
  ActionItems,
  LandingContainer,
  SubTitle,
  TextContainer,
  Title,
} from "./Landing.styles";
import LandingImage from "../../../src/assets/images/landingImage.svg";
import { OutlineButton, PrimaryButton } from "../../shared/styles/globalStyles";
import LoginModal from "../../shared/components/login/login"
import SignUpModal from "../../shared/components/signup/signup"

const Landing = () => {
  const [LoginOpen, setLoginOpen] = React.useState(false);
  const [SignupOpen, setSignupOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  return (
    <LandingContainer>
      <Grid container>
        <Grid item md={7} xs={12}>
          <TextContainer>
            <Title variant="h3">
              Ever wanted to read a book but could not because it was too
              expensive?
            </Title>
            <SubTitle variant="h6">
              Worry not! BiblioBazaar is here!
            </SubTitle>
            <ActionItems>
              <OutlineButton onClick={handleSignupOpen}>Sign Up</OutlineButton>
              <PrimaryButton onClick={handleLoginOpen}>Login</PrimaryButton>
            </ActionItems>
          </TextContainer>
        </Grid>
        <Grid item md={5} xs={12}>
          <img src={LandingImage} alt="" width={450} height={450} />
        </Grid>
      </Grid>
      <LoginModal open={LoginOpen} onClose={handleLoginClose}/>
      <SignUpModal open={SignupOpen} onClose={handleSignupClose}/>
    </LandingContainer>
  );
};

export default Landing;
