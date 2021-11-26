import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Catalogo from "./componentes/Catalogo";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import "./style.css";


const estilos = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
      },
      main: {
          
        maxWidth: 1980,
        height: "100vh",
        marginTop: theme.spacing(5),
        padding:  theme.spacing(3)
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
            <Box display="flex" >
              <Catalogo/>
            </Box>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default Home;
