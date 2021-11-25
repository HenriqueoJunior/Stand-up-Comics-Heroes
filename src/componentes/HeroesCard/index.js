import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const estilos = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    display: "flex",
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function HeroesCard({ heroes }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = estilos();

  return (
    <Card className={classes.root}>
      <CardHeader title={heroes.name} />
      <CardMedia
        component="img"
        height="300"
        width="100%"
        src={heroes.images.lg}
        alt={heroes.slug}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          Estatísticas
          <List>
            <ListItemText>
              Inteligência:{heroes.powerstats.intelligence}
            </ListItemText>
            <ListItemText>Força:{heroes.powerstats.strength}</ListItemText>
            <ListItemText>Velocidade:{heroes.powerstats.speed}</ListItemText>
            <ListItemText>
              Resistência:{heroes.powerstats.durability}
            </ListItemText>
            <ListItemText>Poder:{heroes.powerstats.power}</ListItemText>
            <ListItemText>Combate:{heroes.powerstats.combat}</ListItemText>
          </List>
        </Typography>
      </CardContent>
      <CardActions >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar detalhes"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default HeroesCard;