import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

function ListaDescricao({ heroes }) {
  return (
    <List>
      <ListItemText>Gênero: {heroes.appearance.gender}</ListItemText>
      <ListItemText>Raça: {heroes.appearance.race}</ListItemText>
      <ListItemText>Altura: {heroes.appearance.height}</ListItemText>
      <ListItemText>Peso: {heroes.appearance.weight}</ListItemText>
      <ListItemText>Cor dos olhos: {heroes.appearance.eyeColor}</ListItemText>
      <ListItemText>Cor do cabelo: {heroes.appearance.hairColor}</ListItemText>
    </List>
  );
}

export default ListaDescricao;
