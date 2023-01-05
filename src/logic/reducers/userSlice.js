import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  userId: '',
  userName: '',
<<<<<<< HEAD
  token: ''
=======
  loginOpen: false,
  signupOpen: false
>>>>>>> 50ce55fe1569d25c6a8669635e6896b8935182a2
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

export const { login, logout,setLoginOpen ,setLoginClose,setSignupOpen,setSignupClose} = userSlice.actions

export default userSlice.reducer