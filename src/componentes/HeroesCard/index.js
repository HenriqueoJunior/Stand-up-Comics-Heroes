import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListaDescricao from "./Listas/ListaDescricao";
import ListaBiografia from "./Listas/ListaBiografia";
import ListaEstatisticas from "./Listas/ListaEstatisticas";
import ListaLigacao from "./Listas/ListaLigacao";

const estilos = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(90deg)" : "rotate(270deg)",
  marginRight: "auto",
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
    <div>
      <Card spacing={2} sx={{ maxWidth: 1280, border: 1 }}>
        <CardContent className={classes.root}>
          <CardContent>
            <CardMedia
              component="img"
              src={heroes.images.lg}
              alt={heroes.slug}
            />
          </CardContent>
          <CardContent>
            <CardHeader
              title={heroes.name}
              subheader={heroes.biography.fullName}
            />
            <Typography variant="h6">
              Descrição
              <ListaDescricao heroes={heroes} />
            </Typography>
            <Typography variant="h6">
              Biografia
              <ListaBiografia heroes={heroes} />
            </Typography>
          </CardContent>
          <CardActions>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Mostrar detalhes"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">
                  Estatísticas
                  <ListaEstatisticas heroes={heroes} />
                </Typography>
                <Typography variant="h6">
                  Ligações
                  <ListaLigacao heroes={heroes} />
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}

export default HeroesCard;
