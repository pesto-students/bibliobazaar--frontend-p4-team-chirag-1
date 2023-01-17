import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchBook:false,
  addBook:false,
  bookData:null
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setAddBookOpen: (state) => {
      return {
        ...state,
        addBook: true
      }
    },
    setAddBookClose: (state) => {
      return {
        ...state,
        addBook: false
      }
    },
    setSearchBookOpen: (state) => {
      return {
        ...state,
        searchBook: true
      }
    },
    setSearchBookClose: (state) => {
      return {
        ...state,
        searchBook: false
      }
    },
    setAddBookData : (state,action) => {
      console.log(action)
      return {
        ...state,
        bookData: action?.payload
      }
    },
    closeAddBookData : (state,action) => {
      console.log(action)
      return {
        ...state,
        bookData: null
      }
    }
  }
})

export const { setSearchBookOpen, setSearchBookClose, setAddBookOpen, setAddBookClose, setAddBookData, closeAddBookData } = bookSlice.actions

export default bookSlice.reducer