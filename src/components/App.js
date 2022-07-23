import React from "react";
import BoasVindas from "./BoasVindas";
import Jogo from "./Jogo";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App(){
    const [tela, setTela] = React.useState('boasVindas');

    return(
        <>
        {
            tela === 'boasVindas' ? <BoasVindas setTela={setTela} /> : <Jogo />
        }
        </>
    );
}