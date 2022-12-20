import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  userId: '',
  userName: '',
  loginOpen: false,
  signupOpen: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, payload) => {
      return {
        ...state,
        isLoggedIn: true,
        userId: 'test',
        userName: 'yathendra'
      }
    },
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: true,
        userId: '',
        userName: ''
      }
    },
    setLoginOpen: (state) => {
      return {
        ...state,
        loginOpen: true
      }
    },
    setLoginClose: (state) => {
      return {
        ...state,
        loginOpen: true
      }
    },
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

export const { login, logout,setLoginOpen ,setLoginClose,setSignupOpen,setSignuClose} = userSlice.actions

export default userSlice.reducer