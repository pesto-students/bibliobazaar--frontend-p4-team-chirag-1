import { PrimaryButton,Wrapper } from "../../../../shared/styles/globalStyles";
import {
  Grid,
  InputLabel,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import LibraryCard from "./LibraryCard";

const Library = () => {
  return (
    <Wrapper>
        <Stack direction="row" justifyContent="space-between" pt={4} pr={2}>
        <Typography variant="h6" component="h2">
          Your Collection
        </Typography>
        <PrimaryButton>
           + Add Book 
        </PrimaryButton>
      </Stack>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <LibraryCard />
      </Grid>
      <Grid item xs={6}>
        <LibraryCard />
      </Grid>
      <Grid item xs={6}>
        <LibraryCard />
      </Grid>
      <Grid item xs={6}>
        <LibraryCard />
      </Grid>
      </Grid>
    </Wrapper>
  );
}


export default Library