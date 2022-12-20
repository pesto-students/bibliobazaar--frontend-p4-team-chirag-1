import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginOpen: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
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
    }
  }
})

export const { setLoginOpen, setLoginClose} = loginSlice.actions

export default loginSlice.reducer