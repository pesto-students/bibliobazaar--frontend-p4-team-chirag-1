import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper} from "@mui/material";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import { PrimaryButton } from "../../../../shared/styles/globalStyles";

const AddBookCard = (props) => {
  const navigate = useNavigate();
  
  console.group(props)
  return (
    <CustomCard >
     <CardContent>
            <Stack  direction="row" className="StackTitle" justifyContent="space-between">
            <Stack>
            <BookTitle>{props.bookData.bookName}</BookTitle>
            <BookInfo>{props.bookData.author.join(',')}</BookInfo>
            <BookInfo>ISBN - {props.bookData.isbn}</BookInfo>
            </Stack>
            <CardImage
            component="img"
            image={props.bookData?.imageUrl}
            alt={props.bookData.bookName}
            width={140}
            height={140}
           />
           </Stack>
           <Stack mt={1} justifyContent="center" alignItems="center">
            <PrimaryButton>Select</PrimaryButton>
          </Stack>
        </CardContent>
       
    </CustomCard>
  );
};

export default AddBookCard;

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
