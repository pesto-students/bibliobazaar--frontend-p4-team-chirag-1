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
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};


export default function AddBook(props) {
 
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
       <form onSubmit={formik.handleSubmit}>
        <Stack direction="row"> 
          <TxtFld
            id="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TxtFld
            id="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          </Stack>
          <PrimaryButton2
            // disabled={!formik.hasChanged || formik.hasErrors || formik.isSubmitting}
            type="submit"
          >
            {loader ? <Spinner /> : "Log In"}
          </PrimaryButton2>
        </form>
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
