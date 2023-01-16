import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'account'
}

export const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setTab: (state, action) => {
      return {
        ...state,
        activeTab: action.payload
      }
    }
  }
})

export const { setTab } = userSlice.actions

export default userSlice.reducer