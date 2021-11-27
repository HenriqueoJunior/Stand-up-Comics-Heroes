import React, { useEffect, useState } from "react";
import Catalogo from "./componentes/Catalogo";
import { makeStyles } from "@material-ui/core";
import Cabecalho from "./componentes/Cabecalho";

const estilos = makeStyles({
  content: {
    backgroundColor: "white",
    padding: 32,
  },
});

function Heroes() {
  const classes = estilos();

  const [heroes, setHeroes] = useState([]);

  const getHeroes = async () => {
    fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((res) => res.json())
      .then((responseJson) => setHeroes(responseJson));
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div>
      <div className={classes.content} spacing={2}>
        <Cabecalho heroes={heroes} />
        {heroes.map((heroes) => (
          <Catalogo key={heroes.id} heroes={heroes}></Catalogo>
        ))}
      </div>
    </div>
  );
}

export default Heroes;
