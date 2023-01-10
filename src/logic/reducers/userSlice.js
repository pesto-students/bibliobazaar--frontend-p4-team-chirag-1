import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
  loginOpen: false,
  signupOpen: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    },
    logoutUser: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    },
    // setToken
    // Clear Token
    setLoginOpen: (state) => {
      return {
        ...state,
        loginOpen: true
      }
    },
    setLoginClose: (state) => {
      return {
        ...state,
        loginOpen: false
      }
    },
    setSignupOpen: (state) => {
      return {
        ...state,
        signupOpen: true
      }
    },
    setSignupClose: (state) => {
      return {
        ...state,
        signupOpen: false
      }
    }
  }
})

export const { loginUser, logoutUser, setLoginOpen, setLoginClose, setSignupOpen, setSignupClose } = userSlice.actions

export default userSlice.reducer