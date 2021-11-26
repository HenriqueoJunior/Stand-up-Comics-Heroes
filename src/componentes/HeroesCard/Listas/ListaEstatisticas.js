import React from "react";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

function ListaEstatisticas({ heroes }) {
    return (
<List>
              <ListItemText>
                Inteligência: {heroes.powerstats.intelligence}
              </ListItemText>
              <ListItemText>Força: {heroes.powerstats.strength}</ListItemText>
              <ListItemText>Velocidade: {heroes.powerstats.speed}</ListItemText>
              <ListItemText>
                Resistência :{heroes.powerstats.durability}
              </ListItemText>
              <ListItemText>Poder: {heroes.powerstats.power}</ListItemText>
              <ListItemText>Combate: {heroes.powerstats.combat}</ListItemText>
            </List>
    )
} 

export default ListaEstatisticas