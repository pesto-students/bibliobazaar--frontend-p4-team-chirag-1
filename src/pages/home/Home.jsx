import { Box, Grid, Stack, Typography } from "@mui/material";
import { Wrapper } from "../../shared/styles/globalStyles";
import Filter from "../../assets/icons/filter.svg";
import { CardContainer, FilterBtn, FilterContainer } from "./Home.styles";
import AccordionFilter from "./components/accordionFilter/AccordionFilter";
import { genreFilter, languageFilter, sortOptions } from "./data";
import SortFilter from "./components/sortFilter/SortFilter";
import { useState } from "react";
import BookCard from "../../shared/components/bookCard/BookCard";

const Home = () => {
  const [sortOption, setSortOption] = useState(sortOptions[0]?.key);

  return (
    <Wrapper>
      {/* Top Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <FilterBtn>
          {/* <Stack direction="row" spacing={1}>
            <img src={Filter} alt="" />
            <Typography>Filter</Typography>
          </Stack> */}
        </FilterBtn>
        <Box>
          <Typography>100 Books</Typography>
        </Box>
      </Stack>
      {/* Main Body */}
      <Stack
        direction="row"
        justifyContent="flexStart"
        spacing={4}
        mt={4}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "32px", sm: "" },
        }}
      >
        {/* Left Filter */}
        <FilterContainer>
          <AccordionFilter data={languageFilter} />
          <AccordionFilter data={genreFilter} />
        </FilterContainer>
        {/* Right Container */}
        <CardContainer>
          <SortFilter
            sortOptions={sortOptions}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <Grid container spacing={4} mt={2}>
            {Array?.from({ length: 10 }).map((data, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <BookCard />
              </Grid>
            ))}
          </Grid>
        </CardContainer>
      </Stack>
    </Wrapper>
  );
};

export default Home;
