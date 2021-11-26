import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

function ListaLigacao({ heroes }) {
  return (
    <List>
      <ListItemText>Grupo: {heroes.connections.groupAffiliation}</ListItemText>
      <ListItemText>Relações: {heroes.connections.relatives}</ListItemText>
    </List>
  );
}

export default ListaLigacao;
