import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";


function Cabecalho() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit" enableColorOnDark>
        <Toolbar>
          <Menu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Stand-up Heroes (os mais "Cómicos")
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Cabecalho;
