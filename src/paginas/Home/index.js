import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Catalogo from "./componentes/Catalogo";
import NavBar from "./componentes/NavBar";
//import "./style.css";

function Home() {
    return (
    <div>
        <Cabecalho/>
        <main >
            <NavBar />

            <Catalogo />
            
        </main>
    </div>
    )
}

export default Home