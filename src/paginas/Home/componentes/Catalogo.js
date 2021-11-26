import React from "react";
import HeroesCard from "../../../componentes/HeroesCard";

function Catalogo({ heroes }) {
  return (
    <div>
      <HeroesCard heroes={heroes} />
    </div>
  );
}
export default Catalogo;
