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
import ListaDescricao from "./Listas/ListaDescricao";
import ListaBiografia from "./Listas/ListaBiografia";
import ListaEstatisticas from "./Listas/ListaEstatisticas";
import ListaLigacao from "./Listas/ListaLigacao";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

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



    <Card className={classes.root} sx={{ maxWidth: 1200 }}>
      <CardContent>
        <CardMedia component="img" src={heroes.images.lg} alt={heroes.slug} />
      </CardContent>
      <CardContent>
        <CardHeader title={heroes.name} subheader={heroes.biography.fullName} />
        <Typography variant="h6" paragraph>
          Descrição
          <ListaDescricao heroes={heroes} />
        </Typography>
        <Typography variant="h6" paragraph>
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

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" paragraph>
            Estatísticas
            <ListaEstatisticas heroes={heroes} />
          </Typography>
          <Typography variant="h6" paragraph>
            Ligações
            <ListaLigacao heroes={heroes} />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
</div>
  );
}

export default HeroesCard;
