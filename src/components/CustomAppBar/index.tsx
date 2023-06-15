import { AppBar, Box, Toolbar } from "@mui/material";

import twLogo from "../../assets/tw_logo.png";

const CustomAppBar = () => {
  return (
    <AppBar
      sx={(theme) => ({
        backgroundColor: theme.palette.ixColorMist.main,
        boxShadow: "none",
      })}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={twLogo} alt="ThoughtWorks Logo"></img>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
