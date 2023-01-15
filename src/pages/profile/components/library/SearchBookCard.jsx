import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper} from "@mui/material";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import { PrimaryButton } from "../../../../shared/styles/globalStyles";
import { setSearchBookClose,setAddBookOpen, setAddBookData } from "../../../../logic/reducers/bookSlice";
import { useDispatch } from "react-redux";

const SearchBookCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    bookData: {
      bookName,
      author,
      isbn,
      imageUrl,
      description,
      genre,
      language
    },
  } = props;

  
  console.group(props)
  return (
    <CustomCard >
     <CardContent>
            <Stack  direction="row" className="StackTitle" justifyContent="space-between">
            <Stack>
            <BookTitle>{bookName}</BookTitle>
            <BookInfo>{author.join(',')}</BookInfo>
            <BookInfo>ISBN - {isbn}</BookInfo>
            </Stack>
            <CardImage
            component="img"
            image={imageUrl}
            alt={bookName}
            width={100}
            height={100}
           />
           </Stack>
           <Stack mt={1} justifyContent="center" alignItems="center">
            <PrimaryButton onClick={() => {
              console.log(props)
              dispatch(setAddBookData(props))
              dispatch(setAddBookOpen())
              dispatch(setSearchBookClose())
              
            }}>Select</PrimaryButton>
          </Stack>
        </CardContent>
       
    </CustomCard>
  );
};

export default SearchBookCard;

const CustomCard = styled(Card)(() => ({
  borderRadius: "10px",
}));

const CardImage = styled(CardMedia)(() => ({
  objectFit: "contain",
  borderRadius:"10px"
}));

const BookTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.vs,
  fontWeight: theme?.fontWeight?.xl,
}));

const BookInfo = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.vs,
}));

const EditButton = styled(Button)(() => ({
  background: "#FFF4CD",
  borderRadius: "8px",
  color:"#DD9200",
  border:"solid 1px #DD9200",
  margin:"10px"
}));

const RemoveButton = styled(Button)(() => ({
  background: "#FFD5D8",
  borderRadius: "8px",
  color:"#CC0000",
  border:"solid 1px #CC0000",
  margin:"10px"
}));
