import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import {
    Grid,
    Typography,
    Modal,
    IconButton
  } from "@mui/material";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
  } from "./Library.styles";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AddBookCard from "./AddBookCard";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
    searchBookURL
  } from "../../../../config/Config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  maxHeight:"550px"
};


export default function AddSearchModal(props) {
 
  const [loader, setLoader] = useState(false);
  const [books, setBooks] = useState([]);
 
  const searchBook = (key) => {
    axios
      .get(searchBookURL+"?q="+key)
      .then((res) => {
        if (res?.status === 200) {
          console.log(res.data)
          setBooks([...res.data]);
        }
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(err?.message || "Something is wrong");
      });
  };

 return (
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Book
          <IconButton
            aria-label="close"
            onClick={() => {
              props.onClose();
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Books / Author / ISBN"
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e)=>{
                    if(e.key === "Enter")
                    {
                        searchBook(e.target.value)
                    }
              }}></StyledInputBase>
        </Search>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           {books.map((data, index) => (
              <Grid item xs={6} key={index} >
               <AddBookCard  bookData={data}/>
             </Grid>
            ))}
      </Grid>
      </Box>
    </Modal>
  );
}
