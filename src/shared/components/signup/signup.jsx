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
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const validationSchema = yup.object({
  fname: yup
  .string('Enter your first name')
  .required('First Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    confirmpassword: yup
    .string('Re-enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SignUpModal(props) {
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues: {
      fname:'',
      lname:'',
      email: '',
      password: '',
      confirmpassword:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values,{ resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(setSignupClose());
      resetForm();
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
         <TxtFld id="fname" variant="outlined"  label="First Name" onChange={formik.handleChange}
          error={formik.touched.fname && Boolean(formik.errors.fname)}
          helperText={formik.touched.fname && formik.errors.fname} />
          <TxtFld id="lname" label="Last Name (optional)" variant="outlined"  />
          <TxtFld id="email" variant="outlined" label="Email"  onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} />
          <TxtFld
          id="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          />
          <TxtFld
          id="confirmpassword"
          type="password"
          label="Confirm Password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          error={formik.touched.confirmpassword  && Boolean(formik.errors.confirmpassword)}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
          />
             <PrimaryButton2 type="submit">Sign Up</PrimaryButton2>
           </form>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Already have an account? <PrimaryText onClick={() => {
            dispatch(setSignupClose())
            dispatch(setLoginOpen())
            formik.resetForm();
           }} sx={{textDecoration: 'underline'}} >Log In</PrimaryText>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}