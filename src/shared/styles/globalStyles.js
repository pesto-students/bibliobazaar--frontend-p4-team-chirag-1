import { Modal, styled, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// Container
export const Wrapper = styled('div')(() => ({
  padding: '32px'
}))

// Page Title
export const PageTitle = styled(Typography)((({ theme }) => ({
  fontSize: theme?.fontSize?.lg,
  fontWeight: theme?.fontWeight?.xl,
})))

// Shared Button Styles
const ButtonStyles = styled(Button)((({ theme }) => ({
  padding: '8px 48px',
  borderRadius: '10px',
  '&:hover': {
    transform: 'scale(1.05)'
  }
})))

// Primary Button
export const PrimaryButton = styled(ButtonStyles)((({ theme }) => ({
  background: theme?.primary?.main,
  color: theme?.palette?.white,
  textTransform: 'none',
  '&:hover': {
    background: theme?.primary?.main
  }
})))

// Secondary Button
export const OutlineButton = styled(ButtonStyles)((({ theme }) => ({
  // border: `1px solid ${theme?.palette.grey}`,
  border: `1px solid grey`,
  color: theme?.palette?.black
})))

export const PrimaryText = styled('span')((({ theme }) => ({
  color: theme?.primary?.main
})))

export const PrimaryButton2 = styled(PrimaryButton)((({ theme }) => ({
  marginTop: '20px',
  width: '100%'

})))

export const TxtFld = styled(TextField)((({ theme }) => ({
  width: '100%',
  input: {
    height: '1em'
  }
})))

export const BoldText = styled('span')((({ theme }) => ({
  fontWeight: 'bold',
})))