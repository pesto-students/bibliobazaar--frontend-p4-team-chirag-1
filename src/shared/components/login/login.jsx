import * as React from 'react';
import Box from '@mui/material/Box';
import { PrimaryButton2,TxtFld,PrimaryText,DangerText } from "../../../shared/styles/globalStyles";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { setLoginClose, setSignupOpen } from '../../../logic/reducers/userSlice';
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

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export default function LoginModal(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
      <Modal
        open = {props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Log In
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
            Welcome back! Please enter your details
          </Typography>
          <form onSubmit={formik.handleSubmit}>
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
            Email<DangerText>*</DangerText>
          </Typography>
          <TxtFld id="email" variant="outlined"   onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Password<DangerText>*</DangerText>
          </Typography>
          <TxtFld
          id="password"
          type="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          />
         
                <PrimaryButton2 type="submit">Log In</PrimaryButton2>
          </form>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Don't have a account? <PrimaryText onClick={() => {
            dispatch(setLoginClose())
            dispatch(setSignupOpen())
           }} sx={{textDecoration: 'underline'}} >Sign Up</PrimaryText>
          </Typography>
        </Box>
      </Modal>
  );
}