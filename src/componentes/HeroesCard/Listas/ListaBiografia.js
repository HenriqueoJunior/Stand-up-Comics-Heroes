import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

function ListaBiografia({ heroes }) {
  return (
    <List>
      <ListItemText>Editora: {heroes.biography.publisher}</ListItemText>
      <ListItemText>
        Primeira aparição: {heroes.biography.firstAppearance}
      </ListItemText>
      <ListItemText>Nasceu em {heroes.biography.placeOfBirth}</ListItemText>
      <ListItemText>Tendência: {heroes.biography.alignment}</ListItemText>
      <ListItemText>É conhecido como {heroes.work.occupation}</ListItemText>
      <ListItemText>Base: {heroes.work.base}</ListItemText>
    </List>
  );
}

export default ListaBiografia;
