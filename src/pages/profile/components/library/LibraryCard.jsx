import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper} from "@mui/material";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';


const LibraryCard = (props) => {
  const navigate = useNavigate();
  
  console.group(props)
  return (
    <CustomCard >
     <CardContent>
            <Stack  direction="row" className="StackTitle" justifyContent="space-between">
            <Stack>
            <BookTitle>{props.bookData.bookId.bookName}</BookTitle>
            <BookInfo>{props.bookData.bookId?.author.join(',')}</BookInfo>
            <BookInfo>ISBN - {props.bookData.bookId.isbn}</BookInfo>
            <TableContainer component={Paper}>
            <Table>
              <TableRow>
                  <TableCell variant="head">Rent Expected</TableCell>
                  <TableCell>{props.bookData.rentExpected}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell variant="head">On Rent</TableCell>
                  <TableCell>{props.bookData.rentedBook}</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell variant="head">Available</TableCell>
                  <TableCell>{props.bookData.availableBook}</TableCell>
              </TableRow>
            </Table>
            </TableContainer>
            </Stack>
            <Stack>
            <CardImage
            component="img"
            image={props.bookData.bookId?.imageUrl}
            alt={props.bookData.bookId.bookName}
            width={140}
            height={140}
           />
            <Stack direction="row" justifyContent="flex-end">
              <EditButton variant="outlined" >Edit</EditButton>
              <RemoveButton variant="outlined">Remove</RemoveButton>
           </Stack>
           </Stack>
           </Stack>
          
        </CardContent>
       
    </CustomCard>
  );
};

export default LibraryCard;

const CustomCard = styled(Card)(() => ({
  borderRadius: "10px",
}));

const CardImage = styled(CardMedia)(() => ({
  objectFit: "contain",
  borderRadius:"10px"
}));

const BookTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme?.fontSize?.xs,
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
