import { useState } from "react";
import Box from "@mui/material/Box";
import {
    Typography,
    Modal,
    Stack,
    IconButton
  } from "@mui/material";

  import {
    PrimaryButton,
    TxtFld,
    OutlineButton
  } from "../../../../shared/styles/globalStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import { setAddBookClose,closeAddBookData,setEditModeClose } from "../../../../logic/reducers/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../shared/components/spinner/Spinner";
import { addBookUrl,editBookUrl } from "../../../../../src/config/Config";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  BookTitle,
  BookInfo,
  CardImage
} from "./Library.styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  maxHeight:"550px"
};

const validationSchema = yup.object({
  availableBook: yup
    .number("Please enter the Available Books")
    //.min(0, "Password should be of minimum 8 characters length")
    .required("Available Book is required"),
    rentExpected: yup
    .number("Please enter rent expected Amount")
    //.min(8, "Password should be of minimum 8 characters length")
    .required("Rent Expected is required"),
});

export default function BookAddModal(props) {
 
  const dispatch = useDispatch(); 
  const { bookData,editMode } = useSelector(
    (state) => state.book
  );

  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    
    initialValues: {
      availableBook: "",
      rentExpected: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
    if(editMode)
    {
      const info = {
        availableBook: values.availableBook,
        rentExpected: values.rentExpected,
        bookId:bookData.bookId
      };
      console.log(info)
      axios
        .post(editBookUrl, info)
        .then((res) => {
          setLoader(true);
          if (res?.status === 200) {
            formik.resetForm();
            setLoader(false);
            dispatch(closeAddBookData());
            dispatch(setAddBookClose());
            dispatch(setEditModeClose());
            toast.success("Book data saved successfully!!");
          }
        })
        .catch((err) => {
          console.log("error", err);
          setLoader(false);
          toast.error(err?.message || "Something is wrong");
          formik.resetForm();
          // dispatch(setLoginClose());
        });
    }
    else
    {
      const info = {
        availableBook: values.availableBook,
        rentExpected: values.rentExpected,
        bookName:bookData.bookName,
        author:bookData.author,
        isbn:bookData.isbn,
        imageUrl:bookData.imageUrl,
        description:bookData.description,
        genre:bookData.genre,
        language:bookData.language
      };
      axios
        .post(addBookUrl, info)
        .then((res) => {
          setLoader(true);
          if (res?.status === 200) {
            formik.resetForm();
            setLoader(false);
            dispatch(closeAddBookData());
            dispatch(setAddBookClose());
            dispatch(setEditModeClose());
            toast.success("Book was added to your collection");
          }
        })
        .catch((err) => {
          console.log("error", err);
          setLoader(false);
          toast.error(err?.message || "Something is wrong");
          formik.resetForm();
          // dispatch(setLoginClose());
        });
      }
    },
  });
 return (
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        {editMode?"Edit":"Add"} Book
          <IconButton
            aria-label="close"
            onClick={
                () => {
                    
                    dispatch(setAddBookClose())
                    dispatch(setEditModeClose());
                }
            }
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
        { bookData ? 
           <><Stack  direction="row" justifyContent="space-between">
            <Stack>
            <BookTitle>{bookData.bookName}</BookTitle>
            <BookInfo>{bookData?.author?.join(',')}</BookInfo>
            <BookInfo>ISBN - {bookData.isbn}</BookInfo>
            {editMode?<BookInfo>On Rent - {bookData.rentedBook}</BookInfo>:""}
            </Stack>
            <CardImage
            component="img"
            image={bookData.imageUrl}
            alt={bookData.bookName}
            width={100}
            height={100}
           />
        </Stack>
         <form onSubmit={formik.handleSubmit} >
         <Stack direction="row">
         <TxtFld
           id="availableBook"
           label="Available Book(s)"
           variant="outlined"
           onChange={formik.handleChange}
           error={formik.touched.availableBook && Boolean(formik.errors.availableBook)}
           helperText={formik.touched.availableBook && formik.errors.availableBook}
         />
         <TxtFld
           id="rentExpected"
           label="Rent Expected(Rs)"
           onChange={formik.handleChange}
           error={formik.touched.rentExpected && Boolean(formik.errors.rentExpected)}
           helperText={formik.touched.rentExpected && formik.errors.rentExpected}
         />
          </Stack>
          <Stack mt={2} flexDirection="row" gap="8px" justifyContent={"center"}>
          <OutlineButton onClick={
                () => {
                    
                    dispatch(setAddBookClose())
                    dispatch(setEditModeClose());
                }
            }>{editMode?"Cancel":"Back"}</OutlineButton>
         <PrimaryButton
           type="submit"
         >
           {loader ? <Spinner /> : "Save"}
         </PrimaryButton>
         </Stack>
       </form></> :""
        }
      </Box>
    </Modal>
  );
}