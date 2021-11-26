import React from "react";
import Catalogo from "./paginas/Home/componentes/Catalogo";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core";

const estilos = makeStyles({
  root: {
    display: "flex",
  },
  pesquisa: {
    backgroundColor: "white",
    paddingTop: 8,
    maxWidth: "100%",
  },
});

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.name,
});


const heroes = [
  {
    id: 1,
    name: "A-Bomb",
    slug: "1-a-bomb",
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      eyeColor: "Yellow",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Richard Milhouse Jones",
      alterEgos: "No alter egos found.",
      aliases: ["Rick Jones"],
      placeOfBirth: "Scarsdale, Arizona",
      firstAppearance: "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Musician, adventurer, author; formerly talk show host",
      base: "-",
    },
    connections: {
      groupAffiliation:
        "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
      relatives:
        "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg",
    },
  },
  {
    id: 2,
    name: "Abe Sapien",
    slug: "2-abe-sapien",
    powerstats: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85,
    },
    appearance: {
      gender: "Male",
      race: "Icthyo Sapien",
      height: ["6'3", "191 cm"],
      weight: ["145 lb", "65 kg"],
      eyeColor: "Blue",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Abraham Sapien",
      alterEgos: "No alter egos found.",
      aliases: ["Langdon Everett Caul", "Abraham Sapien", "Langdon Caul"],
      placeOfBirth: "-",
      firstAppearance: "Hellboy: Seed of Destruction (1993)",
      publisher: "Dark Horse Comics",
      alignment: "good",
    },
    work: {
      occupation: "Paranormal Investigator",
      base: "-",
    },
    connections: {
      groupAffiliation: "Bureau for Paranormal Research and Defense",
      relatives: "Edith Howard (wife, deceased)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/2-abe-sapien.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/2-abe-sapien.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/2-abe-sapien.jpg",
    },
  },
  {
    id: 3,
    name: "Abin Sur",
    slug: "3-abin-sur",
    powerstats: {
      intelligence: 50,
      strength: 90,
      speed: 53,
      durability: 64,
      power: 99,
      combat: 65,
    },
    appearance: {
      gender: "Male",
      race: "Ungaran",
      height: ["6'1", "185 cm"],
      weight: ["200 lb", "90 kg"],
      eyeColor: "Blue",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "",
      alterEgos: "No alter egos found.",
      aliases: ["Lagzia"],
      placeOfBirth: "Ungara",
      firstAppearance: "Showcase #22 (October, 1959)",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: {
      occupation: "Green Lantern, former history professor",
      base: "Oa",
    },
    connections: {
      groupAffiliation: "Green Lantern Corps, Black Lantern Corps",
      relatives:
        "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)",
    },
    images: {
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/3-abin-sur.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/3-abin-sur.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/3-abin-sur.jpg",
    },
  },
];

function Heroes() {
  const classes = estilos();
  /* 
const [heroes, setHeroes] = useState([]);

const getHeroes = async () => {
  fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans")
  .then((res) => res.json())
  .then((responseJson) => (
    console.log(responseJson),
    setHeroes(responseJson)
  ));
}

useEffect(() => {
  getHeroes();
},[])
 */

  return (
    <div>
      <div className={classes.pesquisa}>
        <Autocomplete
          options={heroes}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          renderInput={(params) => <TextField {...params} label="I'm batman" />}
        />
      </div>
      <div>
        {heroes.map((heroes) => (
          <Catalogo key={heroes.id} heroes={heroes}></Catalogo>
        ))}
      </div>
    </div>
  );
}

export default Heroes