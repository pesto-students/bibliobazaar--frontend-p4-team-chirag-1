import { PrimaryButton,Wrapper } from "../../../../shared/styles/globalStyles";
import { useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import LibraryCard from "./LibraryCard";
import {
  collectionUrl
} from "../../../../config/Config";
import BookSearchModal from "./SearchBook";
import BookAddModal from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBookOpen } from "../../../../logic/reducers/bookSlice";

const Library = () => {

  const [books, setBooks] = useState([]);
  const { searchBook, addBook } = useSelector(
    (state) => state.book
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = () => {
    axios
      .get(collectionUrl)
      .then((res) => {
        if (res?.status === 200) {
          console.log(res.data[0].books)
          setBooks([...res.data[0].books]);
        }
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(err?.message || "Something is wrong");
      });
  };

  return (
    <Wrapper>
        <Stack direction="row" justifyContent="space-between" pt={4} pr={2}>
        <Typography variant="h6" component="h2">
          Your Collection
        </Typography>
        <PrimaryButton onClick={() => dispatch(setSearchBookOpen())}>
           + Add Book 
        </PrimaryButton>
      </Stack>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {books.map((data, index) => (
              <Grid item xs={6} key={index} >
               <LibraryCard  bookData={data}/>
             </Grid>
            ))}
      </Grid>
      <BookSearchModal
          open={searchBook}
        />
      <BookAddModal
          open={addBook}
      />

    </Wrapper>
  );
}


export default Library