import * as React from 'react';
import Box from '@mui/material/Box';
import { PrimaryButton2,TxtFld,PrimaryText,DangerText } from "../../../shared/styles/globalStyles";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    ActionItems
  } from "../../../pages/landing/Landing.styles";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { setLoginOpen,setSignupClose } from '../../../logic/reducers/userSlice';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px'
};

export default function SignUpModal(props) {
  const dispatch = useDispatch()

  return (
    <div>
      <Modal
        open = {props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign Up
            <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please enter your details
          </Typography>
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
            First Name<DangerText>*</DangerText>
          </Typography>
          <TxtFld id="outlined-basic" variant="outlined"  />
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
            Last Name
          </Typography>
          <TxtFld id="outlined-basic" variant="outlined"  />
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
            Email<DangerText>*</DangerText>
          </Typography>
          <TxtFld id="outlined-basic" variant="outlined"  />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Password<DangerText>*</DangerText>
          </Typography>
          <TxtFld
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Confirm Password<DangerText>*</DangerText>
          </Typography>
          <TxtFld
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          />
          <ActionItems>
                <PrimaryButton2>Sign Up</PrimaryButton2>
           </ActionItems>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Already have an account? <PrimaryText onClick={() => {
            dispatch(setSignupClose())
            dispatch(setLoginOpen())
           }} sx={{textDecoration: 'underline'}} >Log In</PrimaryText>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}