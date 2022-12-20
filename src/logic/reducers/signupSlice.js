import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupOpen: false
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignupOpen: (state) => {
      return {
        ...state,
        signupOpen: true
      }
    },
    setSignuClose: (state) => {
      return {
        ...state,
        signupOpen: true
      }
    }
  }
})

export const { setLoginOpen, setLoginClose} = signupSlice.actions

export default signupSlice.reducer