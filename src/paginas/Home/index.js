import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Heroes from "../../Heroes";
import { DataGrid } from '@mui/x-data-grid';
//import "./style.css";

const estilos = makeStyles((theme) => ({
  main: {
    height: "100vh",
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));



function Home() {

  const classes = estilos();
  return (
    <div className={classes.root}>
      <Cabecalho />
      <div className={classes.feed}>
        <main className={classes.main}>
          <Container>
            <Box display="flex">            
              <Heroes />
            </Box>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default Home;
