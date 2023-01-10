import { Box, Stack } from "@mui/material";
import { useState } from "react";

import { navProfileTabs } from "./data";
import { NavItemDiv } from "./LeftNav.styles";

const LeftNav = (props) => {
  const { active, setActive } = props;

  return (
    <Box p={4}>
      <Stack direction="column" alignItems="flex-start" spacing={1}>
        {navProfileTabs?.map((item, i) => (
          <NavItem
            data={item}
            key={item?.key}
            active={active}
            onClick={() => setActive(item?.key)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LeftNav;

const NavItem = (props) => {
  const {
    data: { label, key },
    active,
    onClick
  } = props;
  return <NavItemDiv active={active === key} onClick={onClick}>{label}</NavItemDiv>;
};
