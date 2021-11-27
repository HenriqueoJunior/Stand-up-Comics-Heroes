import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Autocomplete,
  createFilterOptions,
} from "@mui/material/";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.name,
});

function Cabecalho({ heroes }) {
  console.log(heroes);
  return (
    <Box>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Stand-up Heroes (os mais "Cómicos")
          </Typography>

          <Autocomplete
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            options={heroes}
            getOptionLabel={(option) => option.name}
            filterOptions={filterOptions}
            renderInput={(params) => (
              <TextField {...params} label="I'm batman" />
            )}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Cabecalho;
