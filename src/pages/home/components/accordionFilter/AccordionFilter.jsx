import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AccordionFilter = (props) => {
  const {
    data: { heading, data },
  } = props;

  return (
    <Accordion 
      elevation={0}
      disablegutters={"true"}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        disablegutters={"true"}
      >
        <Typography sx={{ fontWeight: 'bold'}}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {data?.map((item, index) => (
          <CheckBoxFilter info={item} key={item?.key} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const CheckBoxFilter = (props) => {
  const {
    info: { key, label },
  } = props;

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="spaceBetween"
    >
      <Typography sx={{ minWidth: "100px" }}>{label}</Typography>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Stack>
  );
};

export default AccordionFilter;
