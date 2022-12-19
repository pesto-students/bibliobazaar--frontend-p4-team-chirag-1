import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: true,
  userId: '',
  userName: ''
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
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer